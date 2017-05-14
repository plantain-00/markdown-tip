import * as React from "react";
import * as ReactDOM from "react-dom";
import { MarkdownTip } from "../../dist/react";

class Main extends React.Component<{}, {}> {
    locale = navigator.language;
    render() {
        return (
            <div>
                <MarkdownTip locale={this.locale}>
                </MarkdownTip>
            </div>
        );
    }
}

ReactDOM.render(<Main />, document.getElementById("container"));
