import { Component, Input } from "@angular/core";
import { srcAngularTemplateHtml } from "./angular-variables";
import { getLocale, Data } from "./common";

@Component({
    selector: "markdown-tip",
    template: srcAngularTemplateHtml,
})
export class MarkdownTipComponent {
    @Input()
    locale?: string;

    datas: Data[];
    visibleText: string | null = null;

    ngOnInit() {
        this.datas = getLocale(this.locale);
    }

    mouseenter(data: Data) {
        this.visibleText = data.text;
    }
    mouseleave(data: Data) {
        this.visibleText = null;
    }
}
