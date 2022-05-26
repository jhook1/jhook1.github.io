const e = React.createElement;
const {Segment,Loader} = semanticUIReact;

export default function MarkdownDisplay(props) {
    const reader = new commonmark.Parser();
    const writer = new commonmark.HtmlRenderer();
    const renderMarkupFromString = (source) => {
        const parsed = reader.parse(source);
        const output = writer.render(parsed);
        return {__html: output};
    }

    return e(
        Segment,props.markdown ? {
            dangerouslySetInnerHTML:renderMarkupFromString(props.markdown),inverted:true,className:"fit-width"
        } : null
        ,props.file && !props.markdown ? e(
            Loader,{active:true}
        ): null
    )
}
