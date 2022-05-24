const e = React.createElement;
const {useState,useEffect} = React;
const {Segment,Menu,Dropdown} = semanticUIReact;

export default function Navbar(props) {
    const [mobile,setMobile] = useState(false);
    const handleWindowResize = () => {
        setMobile(
            window.getComputedStyle(document.querySelector("nav.stackable"))
            .getPropertyValue("flex-direction") === "vertical"
        )
    }
    useEffect(()=>{
        window.addEventListener("resize",handleWindowResize);
        return ()=>{
            handleWindowResize();
            window.removeEventListener("resize",handleWindowResize);
        }
    },[]);

    const handleItemClick = (e,{content}) => {
        props.setPage(content);
    }

    const renderItem = (pageName) => {
        return e(
            mobile ? Dropdown.Item : Menu.Item,{key:pageName,content:pageName,active:pageName===props.page,onClick:handleItemClick}
        );
    }

    return e(
        Segment,{inverted:true,as:"header",className:"page-header"},e(
            Menu,{as:"nav",fluid:true,inverted:true,color:"blue",stackable:true},e(
                Menu.Item,{header:true,content:mobile ? "mobile" : "desktop"}
            )
            ,mobile ? e(
                Dropdown,null,e(
                    Dropdown.Menu,null,props.pages.map((pageName) => {
                    return e(
                        mobile ? Dropdown.Item : Menu.Item,{key:pageName,content:pageName,active:pageName===props.page,onClick:handleItemClick}
                    );
                })
            )) : props.pages.map(renderItem)
        )
    ); 
}