import Viewer from "./Viewer.js";

const e = React.createElement;
const {useState} = React;
const {Button} = semanticUIReact; // Causes findDOMNode warning due to ref issues

export default function Content(props) {
    const [sampleCt,setSampleCt] = useState(0);
    const [file,setFile] = useState("Test.md");

    const handleBtnClick = (e) => {
        setSampleCt(sampleCt + 5);
        setFile(file === "Test.md" ? "Test2.md" : "Test.md")
    }

    return e(
        "main",null,e(
            "p",null,"Hello World!"
        ),e(
            Button,{positive:true,onClick:handleBtnClick},"Add Content"
        ),e(
            "ul",null,[...Array(sampleCt)].map((_,i) => {return e("li",{key:i},"Sample Content")})
        ),e(Viewer,{file:file})
    );
}
