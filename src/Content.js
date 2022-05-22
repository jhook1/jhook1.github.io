import MarkdownViewer from "./MarkdownViewer.js";

const e = React.createElement;
const {useState} = React;
const {Button} = semanticUIReact; // Causes findDOMNode warning due to ref issues

export default function Content(props) {
    return e(
        "main",null,props.page === "Posts" ? e(MarkdownViewer) : null
    );
}
