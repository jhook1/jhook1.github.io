const e = React.createElement;
const {Segment,Label,Icon} = semanticUIReact;

export default function Footer() {
    return e(
        Segment,{className:"page-footer",inverted:true,as:"footer"},e(
            Label,{className:"label-icon-spacing flex-one",as:"a",href:"https://pages.github.com/"}
            ,"Hosted on Github Pages",e(
                Icon,{name:"github",size:"large"}
            )
        ),e(
            Label,{className:"label-icon-spacing flex-one",as:"a",href:"https://github.com/jhook1/jhook1.github.io/"}
            ,"View Site Source",e(
                Icon,{name:"github",size:"large"}
            )
        ),e(
            Label,{className:"label-icon-spacing flex-one",as:"a",href:"https://reactjs.org/"}
            ,"Built with React",e(
                Icon,{name:"react",size:"large",color:"blue"}
            )
        )
    );
}