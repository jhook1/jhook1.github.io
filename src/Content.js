const e = React.createElement;

class Content extends React.Component {
    render() {
        return e(
            "main",null,e(
                "p",null,"Hello World!"
            )
        );
    }
}

export default Content;
