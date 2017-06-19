import Vue from "vue";
import Component from "vue-class-component";
import "../../dist/vue";

@Component({
    template: `
    <div>
        <a href="https://github.com/plantain-00/markdown-tip/tree/master/demo/vue/index.ts" target="_blank">the source code of the demo</a>
        <markdown-tip :locale="locale"></markdown-tip>
    </div>
    `,
})
class App extends Vue {
    locale = navigator.language;
}

// tslint:disable-next-line:no-unused-expression
new App({ el: "#container" });
