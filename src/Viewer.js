const e = React.createElement;
const {useState,useEffect} = React;

export default function Viewer(props) {
    const [viewText,setViewText] = useState("");
    const reader = new commonmark.Parser();
    const writer = new commonmark.HtmlRenderer();

    const fetchMarkdownText = async (file) => {
        const res = await fetch("/Content/" + file);
        const mdsrc = await res.text();
        console.log(mdsrc);
        setViewText(mdsrc);
    }

    useEffect(()=>{fetchMarkdownText(props.file)},[props.file])

    const renderMarkupFromString = (str) => {
        const parsed = reader.parse(str);
        const output = writer.render(parsed);
        return {__html: output};
    }

    return e("div",{dangerouslySetInnerHTML:renderMarkupFromString(viewText)});
}