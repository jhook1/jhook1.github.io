import MarkdownDraft from "./MarkdownDraft.js";
import MarkdownDisplay from "./MarkdownDisplay.js";
import PostMenu from "./PostMenu.js";

const e = React.createElement;
const {useState,useEffect} = React;
const {Segment,Grid,Button,Divider} = semanticUIReact;

export default function PostControl() {
    const [currFile,setCurrFile] = useState("");

    const [markdown,setMarkdown] = useState("");
    const fetchMarkdownText = async (file) => {
        if(!file) {
            setMarkdown("");
            return;
        }
        const res = await fetch("/Content/" + file);
        const txt = await res.text();
        setMarkdown(txt);
    }
    useEffect(()=>{fetchMarkdownText(currFile)},[currFile]);

    const [newDraft,setNewDraft] = useState(false);
    const handleNewBtnClick = (e) => {
        setNewDraft(true);
        setCurrFile("");
        setMarkdown("");
    }

    return e(
        Segment,{className:"inner-container"},e(
            Grid,null,e(
                Grid.Row,null,!newDraft ? e(
                    Grid.Column,{width:2,className:"post-side-menu"},e(
                        PostMenu,{currFile:currFile,setCurrFile:setCurrFile}
                    ),e(
                        Button,{positive:true,content:"New",icon:"edit",labelPosition:"right",onClick:handleNewBtnClick}
                    )
                ) : null,e(
                    Grid.Column,{className:"flex-one",stretched:true},e(
                        MarkdownDisplay,{currFile:currFile,markdown:markdown,}
                    )
                )
            ),newDraft ? e(Divider) : null,newDraft ? e(
                Grid.Row,{columns:1,stretched:true},e(
                    Grid.Column,null, e(
                        MarkdownDraft,{setCurrFile:setCurrFile,setMarkdown:setMarkdown,setNewDraft:setNewDraft}
                    )
                )
            ) : null
        )
    );
}