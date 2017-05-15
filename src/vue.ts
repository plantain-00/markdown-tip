import * as Vue from "vue";
import Component from "vue-class-component";
import { srcVueTemplateHtml } from "./vue-variables";
import { getLocale, Data } from "./common";

@Component({
    template: srcVueTemplateHtml,
    props: ["locale"],
})
class MarkdownTip extends Vue {
    locale?: string;

    datas = getLocale(this.locale);
    visibleText: string | null = null;

    mouseenter(data: Data) {
        this.visibleText = data.text;
    }
    mouseleave(data: Data) {
        this.visibleText = null;
    }
}

Vue.component("markdown-tip", MarkdownTip);
