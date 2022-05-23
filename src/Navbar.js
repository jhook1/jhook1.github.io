const e = React.createElement;
const {useState} = React;
const {Segment,Menu} = semanticUIReact;

export default function Navbar(props) {
    const [activePage,setActivePage] = useState(props.page);
    
    const navLinks = ["Home","About","Contact","Posts","Test"]

    const handleItemClick = (e,{content}) => {
        setActivePage(content);
        props.setPage(content);
    }

    return e(
        Segment,{inverted:true,as:"header",className:"root-header"},e(
            Menu,{fluid:true,inverted:true,color:"blue",as:"nav"}
            ,navLinks.map((navLink) => {
                return e(
                    Menu.Item,{key:navLink,content:navLink,active:activePage===navLink,onClick:handleItemClick}
                )
            })
        )
    ); 
}