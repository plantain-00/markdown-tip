import * as React from "react";
import * as ReactDOM from "react-dom";

import { MarkdownTip, Locale } from "../dist/";

let locale: Locale | null = null;

class Main extends React.Component<{}, {}> {
    private locale = locale;

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

function start() {
    ReactDOM.render(<Main />, document.getElementById("container"));
}

if (navigator.language === "zh-CN") {
    import("../../core/dist/locales/" + navigator.language + ".js").then(module => {
        locale = module.locale;
        start();
    }, error => {
        start();
    });
} else {
    start();
}
