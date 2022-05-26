const e = React.createElement;
const {useState,useEffect} = React;
const {Menu} = semanticUIReact;

const dirListEnabled = false;

export default function PostMenu(props) {
    const [fileList,setFileList] = useState(["Test.md","Test2.md","Test3.md","draft.md"]);
    const parser = new DOMParser();
    const fetchFileList = async () => {
        if(fileList?.length > 0) return;
        const res = await fetch("/Content/");
        const txt = await res.text();
        const doc = parser.parseFromString(txt,"text/html");
        const files = Array.from(doc.querySelectorAll("td a[href*='.md']")).map(a => a.innerText);
        setFileList(files);
    }
    dirListEnabled && useEffect(()=>{fetchFileList()},[]);

    const handleItemClick = (e,{content}) => {
        props.setCurrFile(content);
    }

    return e(
        Menu,{fluid:true,vertical:true,tabular:true,pointing:true},e(
            Menu.Item,{content:"Posts",header:true}
        ),fileList.map((fileName) => {
            return e(
                Menu.Item,{key:fileName,content:fileName,active:fileName===props.currFile,onClick:handleItemClick}
            )
        })
    );
}