const e = React.createElement;
const {Segment,Divider,Icon} = semanticUIReact;

export default function Footer(props) {
    return e(
        "footer",{className:"root-footer"},e(Divider),e(
            Segment,{className:"footer-sectioning"},e(
                "span",null,"Hosted on Github Pages",e(
                    Icon,{name:"github",size:"large",className:"icon-spacing"}
                )
            ),e(
                "span",{className:"footer-text"},e(
                    "p",{className:"left-text"},"Source: ",e(
                        "a",{href:"https:github.com/jhook1/jhook1.github.io"},"jhook1.github.io"
                    ),e(
                        Icon,{name:"github",size:"large",className:"icon-spacing"}
                    )
                ),e("hr"),e(
                    "p",{className:"right-text"},"Other Work: ",e(
                        "a",{href:"https:github.com/jhook1/"},"jhook1"
                    ),e(
                        Icon,{name:"github",size:"large",className:"icon-spacing"}
                    )
                )
            ),e(
                "span",null,"Built with React",e(
                    Icon,{name:"react",size:"large",className:"icon-spacing",color:"blue"}
                )
            )
        )
    );
}