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

    const [currDraftState,setCurrDraftState] = useState(false);
    const handleNewBtnClick = (e) => {
        setCurrDraftState(true);
    }
    useEffect(()=>{
        setCurrFile("");
        setMarkdown("");
    },[currDraftState]);

    return e(
        Segment,{className:"inner-container"},e(
            Grid,null,e(
                Grid.Row,null,!currDraftState ? e(
                    Grid.Column,{width:2,className:"fit-width"},e(
                        PostMenu,{file:currFile,setFile:setCurrFile}
                    ),e(
                        Button,{positive:true,content:"New",icon:"edit",labelPosition:"right",onClick:handleNewBtnClick}
                    )
                ) : null,e(
                    Grid.Column,{className:"flex-one scroll-container tight-inline-inner relaxed-inline-outer",stretched:true},e(
                        MarkdownDisplay,{file:currFile,markdown:markdown,}
                    )
                )
            ),currDraftState ? e(Divider) : null,currDraftState ? e(
                Grid.Row,{columns:1,stretched:true},e(
                    Grid.Column,null, e(
                        MarkdownDraft,{setDraftState:setCurrDraftState,setMarkdown:setMarkdown}
                    )
                )
            ) : null
        )
    );
}