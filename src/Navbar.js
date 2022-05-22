const e = React.createElement;
const {useState} = React;
const {Segment,Menu} = semanticUIReact;

export default function Navbar(props) {
    const [activePage,setActivePage] = useState(props.page);
    
    const navLinks = ["Home","About","Contact","Posts"]

    const handleItemClick = (e,{content}) => {
        setActivePage(content);
        props.setPage(content);
    }

    return e(
        "header",{className:"root-header"},e(
            Segment,{inverted:true},e(
                Menu,{fluid:true,inverted:true,color:"blue"}
                ,navLinks.map((navLink) => {
                    return e(
                        Menu.Item,{key:navLink,content:navLink,active:activePage===navLink,onClick:handleItemClick}
                    )
                })
            )
        )
    ); 
}