import * as React from "react";
import { getLocale, Data } from "./common";

export type Props = {
    locale?: string;
};

export class MarkdownTip extends React.PureComponent<Props, {}> {
    mouseenter(data: Data) {
        data.visible = true;
        this.forceUpdate();
    }
    mouseleave(data: Data) {
        data.visible = false;
        this.forceUpdate();
    }

    render() {
        const datas = getLocale(this.props.locale);

        const items = datas.map(data => {
            const title = data.visible ? <pre className="markdown-tip-item-title">{data.title}</pre> : null;
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
