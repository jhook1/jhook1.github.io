"use strict";

const LayoutSep = React.createElement("hr",null,null);

const RootHeader = React.createElement(
    "header",{className:"root-header"},React.createElement(
        "h1",null,"Home"
    ),React.createElement(
        "nav",null,React.createElement(
            "ul",null,React.createElement(
                "li",null,React.createElement(
                    "a",{href:"/index.html"},"Home"
                )
            )
        )
    )
);

const MainContent = React.createElement(
    "main",null,React.createElement(
        "p",null,"Hello World!"
    )
);

const RootFooter = React.createElement(
    "footer",{className:"root-footer"},React.createElement(
        "p",null,"View Source: ",React.createElement(
            "a",{href:"https:github.com/jhook1/jhook1.github.io"},"jhook1.github.io"
        )," - ","Check out my other work: ",React.createElement(
            "a",{href:"https:github.com/jhook1/"},"jhook1"
        )
    )
);

const Doc = React.createElement(
    "div",{className:"react-container"},
    RootHeader,LayoutSep,MainContent,LayoutSep,RootFooter
);

const domContainer = document.getElementById("react-container");
const root = ReactDOM.createRoot(domContainer);
root.render(Doc);