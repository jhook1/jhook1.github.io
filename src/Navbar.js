const e = React.createElement;
const {useState} = React;
const {Segment,Menu,Divider} = semanticUIReact;

export default function Navbar(props) {
    const [activeItem,setActiveItem] = useState(props.page);
    
    const navLinks = ["Home","About","Contact"]

    const handleItemClick = (e,{name}) => {
        setActiveItem(name);
    }

    return e(
        "header",{className:"root-header"},e(
            Segment,null,e(
                Menu,{fluid:true,inverted:true,color:"blue"},navLinks.map((link) => {
                    return e(
                        Menu.Item,{key:link,name:link,active:activeItem === link,onClick:handleItemClick}
                    )
                })
            )
        ),e(Divider)
    ); 
}