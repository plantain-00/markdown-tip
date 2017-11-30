import Vue from "vue";
import Component from "vue-class-component";
// tslint:disable:no-duplicate-imports
import "../dist/";
import { Locale } from "../dist/";

let locale: Locale | null = null;

@Component({
    template: `
    <div>
        <a href="https://github.com/plantain-00/markdown-tip/tree/master/packages/vue/demo" target="_blank">the source code of the demo</a>
        <markdown-tip :locale="locale"></markdown-tip>
    </div>
    `,
})
class App extends Vue {
    locale = locale;
}

function start() {
    new App({ el: "#container" });
}

if (navigator.language === "zh-CN") {
    import("../../core/dist/locales/" + navigator.language + ".js").then(module => {
        locale = module.locale;
        start();
    }, error => {
        start();
    });
} else {
    start();
}
