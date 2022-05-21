const e = React.createElement;
const {Segment} = semanticUIReact;

export default function Footer(props) {
    return e(
        "footer",{className:"root-footer"},e(
            Segment,null,e(
                "p",null,"View Source: ",e(
                    "a",{href:"https:github.com/jhook1/jhook1.github.io"},"jhook1.github.io"
                )," - ","Check out my other work: ",e(
                    "a",{href:"https:github.com/jhook1/"},"jhook1"
                )
            )
        )
    );
}