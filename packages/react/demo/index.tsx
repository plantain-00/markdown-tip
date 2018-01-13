import * as React from "react";
import * as ReactDOM from "react-dom";

import { MarkdownTip } from "../dist/";

class Main extends React.Component<{}, {}> {
    private locale = null;

    componentWillMount() {
        if (navigator.language === "zh-CN") {
            import("../../core/dist/locales/" + navigator.language + ".js").then(module => {
                this.locale = module.locale;
                this.setState({ locale: this.locale });
            });
        }
    }

    render() {
        return (
            <div>
                <a href="https://github.com/plantain-00/markdown-tip/tree/master/packages/react/demo" target="_blank">the source code of the demo</a>
                <MarkdownTip locale={this.locale}>
                </MarkdownTip>
            </div>
        );
    }
}

ReactDOM.render(<Main />, document.getElementById("container"));
