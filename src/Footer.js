const e = React.createElement;
const {Segment,Divider} = semanticUIReact;

export default function Footer(props) {
    return e(
        "footer",{className:"root-footer"},e(Divider),e(
            Segment,null,e(
                "p",{className:"footer-text"},e(
                    "span",{className:"left-text"},"View Source: ",e(
                        "a",{href:"https:github.com/jhook1/jhook1.github.io"},"jhook1.github.io"
                    )
                ),e(
                    "span",null,"-"
                ),e(
                    "span",{className:"right-text"},"Check out my other work: ",e(
                        "a",{href:"https:github.com/jhook1/"},"jhook1"
                    )
                )
            )
        )
    );
}