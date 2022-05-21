"use strict";

const e = React.createElement;

const LayoutSep = e("hr",null,null);

class RootHeader extends React.Component {
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

class MainContent extends React.Component {
    render() {
        return e(
            "main",null,e(
                "p",null,"Hello World!"
            )
        );
    }
}

class RootFooter extends React.Component {
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

class App extends React.Component {
    render() {
        return e(
            "div",{className:"react-container"},
            e(RootHeader,{title:"Home"},null),
            LayoutSep,e(MainContent,null,null),LayoutSep,
            e(RootFooter,null,null)
        );
    }
}

const domContainer = document.getElementById("react-container");
const root = ReactDOM.createRoot(domContainer);
root.render(e(App,null,null));