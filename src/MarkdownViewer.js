const e = React.createElement;
const {useState,useEffect} = React;
const {Container,Menu,Segment} = semanticUIReact;

export default function MarkdownViewer(props) {
    const reader = new commonmark.Parser();
    const writer = new commonmark.HtmlRenderer();
    const parser = new DOMParser();

    const [currFile,setCurrFile] = useState("");

    const [fileList,setFileList] = useState([]);
    const fetchFileList = async () => {
        const res = await fetch("/Content/");
        const txt = await res.text();
        const doc = parser.parseFromString(txt,"text/html");
        const contents = Array.from(doc.querySelectorAll("td a[href*='.md']")).map(a => a.href);
        setFileList(contents);
    }
    useEffect(()=>{fetchFileList()},[]);

    const [viewText,setViewText] = useState("");
    const fetchMarkdownText = async (file) => {
        if(!file) return;
        const res = await fetch(file);
        const markdown = await res.text();
        setViewText(markdown);
    }
    useEffect(()=>{fetchMarkdownText(currFile)},[currFile]);

    const handleItemClick = (e,{content}) => {
        setCurrFile(content);
    }

    const renderMarkupFromString = (str) => {
        const parsed = reader.parse(str);
        const output = writer.render(parsed);
        return {__html: output};
    }

    return e(
        Container,null,e(
            Menu,{fluid:false,vertical:true}
            ,fileList.map((fileName) => {
                return e(
                    Menu.Item,{key:fileName,content:fileName,active:fileName===currFile,onClick:handleItemClick}
                )
            })
        ),currFile ? e(
            Segment,{dangerouslySetInnerHTML:renderMarkupFromString(viewText)}
        ) : null
    );
}