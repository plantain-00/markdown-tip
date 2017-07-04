import Vue from "vue";
import Component from "vue-class-component";
import { vueTemplateHtml } from "./vue-variables";
import * as common from "./common";
export * from "./common";

@Component({
    template: vueTemplateHtml,
    props: ["locale"],
})
class MarkdownTip extends Vue {
    locale: common.Locale | undefined;

    datas = common.getLocale(this.locale);
    visibleText: string | null = null;
    titleClass = common.defaultTitleClass;

    mouseenter(data: common.Data, event: MouseEvent) {
        this.visibleText = data.text;
        this.titleClass = common.getTitleClass(event.target as HTMLElement);
    }
    mouseleave(data: common.Data) {
        this.visibleText = null;
    }
}

Vue.component("markdown-tip", MarkdownTip);
