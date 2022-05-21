const e = React.createElement;

class Header extends React.Component {
    render() {
        return e(
            "header",{className:"root-header"},e(
                "h1",null,this.props.title
            ),e(
                "nav",null,e(
                    "ul",null,e(
                        "li",null,e(
                            "a",{href:"/index.html"},"Home"
                        )
                    )
                )
            )
        ); 
    } 
}

export default Header;