"use strict";

import Navbar from "./Navbar.js";
import Content from "./Content.js";
import Footer from "./Footer.js";

const e = React.createElement;
const {Container,Divider} = semanticUIReact;

//const LayoutSep = e("hr");

const App = () => {
    return e(
        Container,{className:"react-container"},
        e(Navbar,{page:"Home"}),
        e(Divider),e(Content),e(Divider),
        e(Footer)
    );
}

const domContainer = document.getElementById("react-container");
const root = ReactDOM.createRoot(domContainer);
root.render(App());
