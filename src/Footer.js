const e = React.createElement;
const {Segment,Label,Icon} = semanticUIReact;

export default function Footer(props) {
    return e(
        Segment,{className:"root-footer footer-sectioning",inverted:true,as:"footer"},e(
            Label,{className:"label-icon-spacing"}
            ,"Hosted on Github Pages",e(
                Icon,{name:"github",size:"large"}
            )
        ),e(
            Label,{className:"label-icon-spacing",as:"a",href:"https://github.com/jhook1/jhook1.github.io"}
            ,"View Site Source",e(
                Icon,{name:"github",size:"large"}
            )
        ),e(
            Label,{className:"label-icon-spacing"}
            ,"Built with React",e(
                Icon,{name:"react",size:"large",color:"blue"}
            )
        )
    );
}