const e = React.createElement;
const {useState} = React;

export default function Header(props) {
    const [title,setTitle] = useState(props.title)

    return e(
        "header",{className:"root-header"},e(
            "h1",null,title
        ),e(
            "nav",null,e(
                "ul",null,e(
                    "li",null,e(
                        "a",{href:"/index.html",link:"Home"},"Home"
                    )
                )
            )
        )
    ); 
}