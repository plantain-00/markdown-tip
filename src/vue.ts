import * as Vue from "vue";
import Component from "vue-class-component";
import { srcVueHtml } from "./vue-variables";
import { datas, Data } from "./common";

@Component({
    template: srcVueHtml,
    props: [],
})
class MarkdownTip extends Vue {
    datas = datas;

    mouseenter(data: Data) {
        data.visible = true;
    }
    mouseleave(data: Data) {
        data.visible = false;
    }
}

Vue.component("markdown-tip", MarkdownTip);
