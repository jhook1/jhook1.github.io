const e = React.createElement;

class Footer extends React.Component {
    render() {
        return e(
            "footer",{className:"root-footer"},e(
                "p",null,"View Source: ",e(
                    "a",{href:"https:github.com/jhook1/jhook1.github.io"},"jhook1.github.io"
                )," - ","Check out my other work: ",e(
                    "a",{href:"https:github.com/jhook1/"},"jhook1"
                )
            )
        );
    }
}

export default Footer;