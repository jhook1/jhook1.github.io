"use strict";

import Header from "./Header.js"
import Content from "./Content.js";
import Footer from "./Footer.js";

const e = React.createElement;

const LayoutSep = e("hr");

class App extends React.Component {
    render() {
        return e(
            "div",{className:"react-container"},
            e(Header,{title:"Home"}),
            LayoutSep,e(Content),LayoutSep,
            e(Footer)
        );
    }
}

const domContainer = document.getElementById("react-container");
const root = ReactDOM.createRoot(domContainer);
root.render(e(App));
