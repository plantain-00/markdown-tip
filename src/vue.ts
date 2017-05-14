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

    mouseenter(data: Data) {
        data.visible = true;
    }
    mouseleave(data: Data) {
        data.visible = false;
    }
}

Vue.component("markdown-tip", MarkdownTip);
