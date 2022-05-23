"use strict";

import Navbar from "./Navbar.js";
import Content from "./Content.js";
import Footer from "./Footer.js";

const e = React.createElement;
const {useState} = React;
const {Container,Segment,Divider} = semanticUIReact;

const App = () => {
    const [currPage,setCurrPage] = useState("Home");

    return e(
        React.StrictMode,null,e(
            Container,null,e(
                Segment,{className:"react-content",inverted:false,raised:true},
                e(Navbar,{page:currPage,setPage:setCurrPage}),
                e(Divider),e(Content,{page:currPage,setPage:setCurrPage}),e(Divider),
                e(Footer)
            )
        )
    );
}

const root = ReactDOM.createRoot(document.getElementById("react-container"));
root.render(e(App));
