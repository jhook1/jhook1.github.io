"use strict";

import Navbar from "/src/Navbar.js";
import Content from "/src/Content.js";
import Footer from "/src/Footer.js";

const e = React.createElement;
const {useState} = React;
const {Container,Segment,Divider} = semanticUIReact;

const App = () => {
    const [currPage,setCurrPage] = useState("Home");
    const [pageList] = useState(["Home","About","Contact","Posts","Test"]);

    return e(
        React.StrictMode,null,e(
            Container,null,e(
                Segment,{className:"react-content",inverted:false,raised:true}
                ,e(Navbar,{page:currPage,setPage:setCurrPage,pages:pageList})
                ,e(Divider),e(Content,{page:currPage,setPage:setCurrPage}),e(Divider)
                ,e(Footer)
            )
        )
    );
}

const root = ReactDOM.createRoot(document.getElementById("react-container"));
root.render(e(App));
