import { Component, Input } from "@angular/core";
import { srcAngularTemplateHtml } from "./angular-variables";
import * as common from "./common";

@Component({
    selector: "markdown-tip",
    template: srcAngularTemplateHtml,
})
export class MarkdownTipComponent {
    @Input()
    locale?: string;

    datas: common.Data[];
    visibleText: string | null = null;
    titleClass = common.defaultTitleClass;

    ngOnInit() {
        this.datas = common.getLocale(this.locale);
    }

    mouseenter(data: common.Data, event: MouseEvent) {
        this.visibleText = data.text;
        this.titleClass = common.getTitleClass(event.target as HTMLElement);
    }
    mouseleave(data: common.Data) {
        this.visibleText = null;
    }
}
