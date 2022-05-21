const e = React.createElement;
const {Button} = semanticUIReact;

export default function Content(props) {
    const handleBtnClick = (e) => {
        let newEl = document.createElement("p");
        newEl.innerText = "Random Conent";
        document.getElementById("contentList").append(newEl);
    }

    return e(
        "main",null,e(
            "p",null,"Hello World!"
        ),e(
            Button,{positive:true,label:"Add Content",onClick:handleBtnClick}
        ),e(
            "ul",{id:"contentList"}
        )
    );
}
