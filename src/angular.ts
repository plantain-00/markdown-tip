import { Component, Input } from "@angular/core";
import { srcAngularHtml } from "./angular-variables";
import { getLocale, Data } from "./common";

@Component({
    selector: "markdown-tip",
    template: srcAngularHtml,
})
export class MarkdownTipComponent {
    @Input()
    locale?: string;

    datas: Data[];

    ngOnInit() {
        this.datas = getLocale(this.locale);
    }

    mouseenter(data: Data) {
        data.visible = true;
    }
    mouseleave(data: Data) {
        data.visible = false;
    }
}
