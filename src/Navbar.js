const e = React.createElement;
const {useState} = React;
const {Header,Menu,List} = semanticUIReact;

export default function Navbar(props) {
    const [activeItem,setActiveItem] = useState(props.page)

    const handleItemClick = (e,{name}) => {
        setActiveItem(name);
    }

    return e(
        "header",{className:"root-header"},e(
            Menu,{fluid:true},e(
                Menu.Item,{name:"Home",active:activeItem === "Home",onClick:handleItemClick}
            ),e(
                Menu.Item,{name:"About",active:activeItem === "About",onClick:handleItemClick}
            )
        )
    ); 
}