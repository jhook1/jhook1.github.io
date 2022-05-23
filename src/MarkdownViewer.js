const e = React.createElement;
const {useState,useEffect} = React;
const {Container,Grid,Menu,Segment} = semanticUIReact;

export default function MarkdownViewer(props) {
    const reader = new commonmark.Parser();
    const writer = new commonmark.HtmlRenderer();
    const parser = new DOMParser();

    const [fileList,setFileList] = useState([]);
    const fetchFileList = async () => {
        if(fileList?.length > 0) return;
        const res = await fetch("/Content/");
        const txt = await res.text();
        const doc = parser.parseFromString(txt,"text/html");
        const files = Array.from(doc.querySelectorAll("td a[href*='.md']")).map(a => a.innerText);
        setFileList(files);
    }
    useEffect(()=>{fetchFileList()},[]);

    const [currFile,setCurrFile] = useState("");

    const [markdown,setMarkdown] = useState("");
    const fetchMarkdownText = async (file) => {
        if(!file) return;
        const res = await fetch("/Content/" + file);
        const txt = await res.text();
        setMarkdown(txt);
    }
    useEffect(()=>{fetchMarkdownText(currFile)},[currFile]);

    const handleItemClick = (e,{content}) => {
        setCurrFile(content);
    }

    const renderMarkupFromString = (source) => {
        const parsed = reader.parse(source);
        const output = writer.render(parsed);
        return {__html: output};
    }

    return e(
        Container,null,e(
            Grid,null,e(
                Grid.Column,{width:4},e(
                    Menu,{fluid:true,vertical:true,tabular:true},e(
                        Menu.Item,{content:"Posts",header:true}
                    )
                    ,fileList.map((fileName) => {
                        return e(
                            Menu.Item,{key:fileName,content:fileName,active:fileName===currFile,onClick:handleItemClick}
                        )
                    })
                )
            ),e(
                Grid.Column,{width:12,stretched:true},currFile ? e(
                    Segment,{dangerouslySetInnerHTML:renderMarkupFromString(markdown)}
                ) : null
            )
        )
    );
}