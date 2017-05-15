import * as React from "react";
import { getLocale, Data } from "./common";

export class MarkdownTip extends React.PureComponent<{ locale?: string }, {}> {
    visibleText: string | null = null;

    mouseenter(data: Data) {
        this.visibleText = data.text;
        this.setState({ visibleText: this.visibleText });
    }
    mouseleave(data: Data) {
        this.visibleText = null;
        this.setState({ visibleText: this.visibleText });
    }

    render() {
        const datas = getLocale(this.props.locale);

        const items = datas.map(data => {
            const title = data.text === this.visibleText ? <pre className="markdown-tip-item-title">{data.title}</pre> : null;
            return (
                <div className="markdown-tip-item" onMouseEnter={e => this.mouseenter(data)} onMouseLeave={e => this.mouseleave(data)}>
                    <span className="markdown-tip-item-text">{data.text}</span>
                    {title}
                </div>
            );
        });

        return (
            <div className="markdown-tip">
                {items}
            </div>
        );
    }
}
