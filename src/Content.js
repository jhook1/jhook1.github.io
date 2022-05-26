import PostControl from "./PostControl.js";

const e = React.createElement;
const {useState} = React;
const {Container} = semanticUIReact;

export default function Content(props) {
    return e(
        Container,{as:"main"}
        ,(()=>{
            switch (props.page) {
                case "Posts":
                    return e(PostControl);
                default:
                    return null;
            }
        })()
    );
}
