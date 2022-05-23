import MarkdownViewer from "./MarkdownViewer.js";

const e = React.createElement;
const {useState} = React;

export default function Content(props) {
    return e(
        "main",null,props.page === "Posts" ? e(MarkdownViewer) : null
    );
}
