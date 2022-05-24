import MarkdownViewer from "/src/MarkdownViewer.js";

const e = React.createElement;
const {useState} = React;
const {Container,Header,Button,List} = semanticUIReact;

export default function Content(props) {
    const [count,setCount] = useState(0);

    const handleBtnClick = (e) => {
        setCount(count + 5);
    }

    return e(
        Container,{as:"main"}
        ,(()=>{
            switch (props.page) {
                case "Posts":
                    return e(MarkdownViewer);
                case "Test":
                    return e(
                        Container,null,e(
                            Header,{content:"Hello World!"},
                        ),e(
                            Button,{positive:true,content:"Add",onClick:handleBtnClick}
                        ),e(
                            List,null,[...Array(count)].map((v,i)=>{
                                return e(List.Item,{key:i},"Test Text")
                            })
                        )
                    );
                default:
                    return null;
            }
        })()
    );
}
