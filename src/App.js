"use strict";

import Navbar from "./Navbar.js";
import Content from "./Content.js";
import Footer from "./Footer.js";

const e = React.createElement;
const {useState} = React;
const {Container,Segment,Divider} = semanticUIReact;

const App = (props) => {
    const [currPage,setCurrPage] = useState("Home");

    return e(
        React.StrictMode,null,e(
            Container,{className:"react-container"},e(
                Segment,{className:"react-container",inverted:false,raised:true},
                e(Navbar,{page:currPage,setPage:setCurrPage}),
                e(Divider),e(Content,{page:currPage,setPage:setCurrPage}),e(Divider),
                e(Footer)
            )
        )
    );
}

const domContainer = document.querySelector(".react-container");
const root = ReactDOM.createRoot(domContainer);
root.render(e(App));
