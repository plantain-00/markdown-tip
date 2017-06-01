import * as Vue from "vue";
import Component from "vue-class-component";
import "../../dist/vue";

@Component({
    template: `<markdown-tip :locale="locale"></markdown-tip>`,
})
class App extends Vue {
    locale = navigator.language;
}

// tslint:disable-next-line:no-unused-expression
new App({ el: "#container" });
