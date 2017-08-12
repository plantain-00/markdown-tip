import { Component, Input, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { angularTemplateHtml } from "./angular-variables";
import * as common from "./common";
export * from "./common";

/**
 * @public
 */
@Component({
    selector: "markdown-tip",
    template: angularTemplateHtml,
})
export class MarkdownTipComponent {
    @Input()
    locale?: common.Locale;

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

/**
 * @public
 */
@NgModule({
    declarations: [
        MarkdownTipComponent,
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        MarkdownTipComponent,
    ],
})
export class MarkdownTipModule { }
