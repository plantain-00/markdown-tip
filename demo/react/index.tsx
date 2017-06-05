import * as React from "react";
import * as ReactDOM from "react-dom";
import { MarkdownTip } from "../../dist/react";

class Main extends React.Component<{}, {}> {
    locale = navigator.language;
    render() {
        return (
            <div>
                <a href="https://github.com/plantain-00/markdown-tip/tree/master/demo/react/index.tsx" target="_blank">the source code of the demo</a>
                <MarkdownTip locale={this.locale}>
                </MarkdownTip>
            </div>
        );
    }
}

ReactDOM.render(<Main />, document.getElementById("container"));
