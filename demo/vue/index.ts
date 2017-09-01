import Vue from "vue";
import Component from "vue-class-component";
// tslint:disable-next-line:no-duplicate-imports
import "../../dist/vue";
import { Locale } from "../../dist/vue";

let locale: Locale | null = null;

@Component({
    template: `
    <div>
        <a href="https://github.com/plantain-00/markdown-tip/tree/master/demo/vue/index.ts" target="_blank">the source code of the demo</a>
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
    import ("../../dist/locales/" + navigator.language + ".js").then(module => {
        locale = module.locale;
        start();
    }, error => {
        start();
    });
} else {
    start();
}
