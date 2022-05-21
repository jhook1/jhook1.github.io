"use strict";

import Navbar from "./Navbar.js";
import Content from "./Content.js";
import Footer from "./Footer.js";

const e = React.createElement;
const {Container,Segment} = semanticUIReact;

const App = (props) => {
    return e(
        React.StrictMode,null,e(
            Container,{className:"react-container"},e(
                Segment,{className:"react-container",inverted:false,raised:true},
                e(Navbar,{page:"Home"}),
                e(Content),
                e(Footer)
            )
        )
    );
}

const domContainer = document.querySelector(".react-container");
const root = ReactDOM.createRoot(domContainer);
root.render(App());
