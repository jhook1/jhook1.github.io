const e = React.createElement;
const {useState} = React;
const {Segment,Menu} = semanticUIReact;

export default function Navbar(props) {    
    const pageList = ["Home","About","Contact","Posts","Test"];

    const handleItemClick = (e,{content}) => {
        props.setPage(content);
    }

    return e(
        Segment,{inverted:true,as:"header",className:"page-header"},e(
            Menu,{fluid:true,inverted:true,color:"blue",as:"nav"}
            ,pageList.map((pageName) => {
                return e(
                    Menu.Item,{key:pageName,content:pageName,active:pageName===props.page,onClick:handleItemClick}
                )
            })
        )
    ); 
}