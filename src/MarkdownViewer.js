const e = React.createElement;
const {useState,useEffect} = React;
const {Segment,Grid,Menu,Button,Loader,Form,TextArea} = semanticUIReact;

const dirListEnabled = false;

export default function MarkdownViewer(props) {
    const reader = new commonmark.Parser();
    const writer = new commonmark.HtmlRenderer();
    const parser = new DOMParser();

    const [fileList,setFileList] = useState(["Test.md","Test2.md","Test3.md"]);
    const fetchFileList = async () => {
        if(fileList?.length > 0) return;
        const res = await fetch("/Content/");
        const txt = await res.text();
        const doc = parser.parseFromString(txt,"text/html");
        const files = Array.from(doc.querySelectorAll("td a[href*='.md']")).map(a => a.innerText);
        setFileList(files);
    }
    dirListEnabled && useEffect(()=>{fetchFileList()},[]);

    const [currFile,setCurrFile] = useState("");
    const handleItemClick = (e,{content}) => {
        setCurrFile(content);
    }

    const [markdown,setMarkdown] = useState("");
    const fetchMarkdownText = async (file) => {
        if(!file) return;
        const res = await fetch("/Content/" + file);
        const txt = await res.text();
        setMarkdown(txt);
    }
    useEffect(()=>{fetchMarkdownText(currFile)},[currFile]);

    const [newDraft,setNewDraft] = useState(false);
    const handleNewBtnClick = (e) => {
        setNewDraft(true);
    }

    const renderMarkupFromString = (source) => {
        const parsed = reader.parse(source);
        const output = writer.render(parsed);
        return {__html: output};
    }

    return e(
        Segment,null,e(
            Grid,null,e(
                Grid.Column,{width:4,className:"post-side-menu"},e(
                    Menu,{fluid:true,vertical:true,tabular:true,pointing:true},e(
                        Menu.Item,{content:"Posts",header:true}
                    )
                    ,fileList.map((fileName) => {
                        return e(
                            Menu.Item,{key:fileName,content:fileName,active:fileName===currFile,onClick:handleItemClick}
                        )
                    })
                ),e(
                    Button,{positive:true,content:"New",icon:"edit",labelPosition:"right",onClick:handleNewBtnClick}
                )
            ),e(
                Grid.Column,{width:12,stretched:true},currFile ? e(
                    Segment,markdown?.length>0 ? {
                        dangerouslySetInnerHTML:renderMarkupFromString(markdown),inverted:true
                    } : null
                    ,markdown?.length===0 ? e(
                        Loader,{active:true}
                    ): null
                ) : null
            )
        ), newDraft ? e(
            Form,null,e(TextArea)
        ) : null
    );
}