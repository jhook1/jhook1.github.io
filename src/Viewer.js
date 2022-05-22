const e = React.createElement;
const {useState} = React;

const reader = new commonmark.Parser();
const writer = new commonmark.HtmlRenderer();

export default function Viewer(props) {
    var parsed = reader.parse("# Hello **world**");
    var output = writer.render(parsed);
    const createMarkupFromString = (str) => {
        return {__html: str};
    }

    return e("div",{dangerouslySetInnerHTML:createMarkupFromString(output)});
}