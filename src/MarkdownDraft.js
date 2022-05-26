const e = React.createElement;
const {Form,Button} = semanticUIReact;

export default function MarkdownDraft(props) {
    const handleDiscardBtnClick = (e) => {
        props.setDraftState(false);
    }

    const handleSaveBtnClick = (e) => {
        (function downloadMarkdown(){
            let text = markdown.replace(/\n/g, "\r\n"); // To retain line breaks.
            let blob = new Blob([text],{type: "text/plain"});
            let anchor = document.createElement("a");
            anchor.download = "draft.md";
            anchor.href = window.URL.createObjectURL(blob);
            anchor.target ="_blank";
            anchor.style.display = "none";
            document.body.appendChild(anchor);
            anchor.click();
            document.body.removeChild(anchor);
        })();
        handleDiscardBtnClick(e);
    }

    const handleMarkupInput = (e,{value}) => {
        e.target.style.height = e.target.scrollHeight + "px";
        props.setMarkdown(value);
    }

    return e(
        Form,null,e(
            Form.TextArea,{className:"static-area",onChange:handleMarkupInput}
        ),e(
            Button,{primary:true,icon:"save",content:"Save",onClick:handleSaveBtnClick}
        ),e(
            Button,{negative:true,icon:"trash alternate outline",content:"Discard",floated:"right",onClick:handleDiscardBtnClick}
        )
    );
}
