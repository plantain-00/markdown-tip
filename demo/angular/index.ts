import "core-js/es6";
import "core-js/es7/reflect";
import "zone.js/dist/zone";
import "tslib";

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { enableProdMode, Component, NgModule } from "@angular/core";

enableProdMode();

let locale: Locale | null = null;

@Component({
    selector: "app",
    template: `
    <div>
        <a href="https://github.com/plantain-00/markdown-tip/tree/master/demo/angular/index.ts" target="_blank">the source code of the demo</a>
        <markdown-tip [locale]="locale"></markdown-tip>
    </div>
    `,
})
class MainComponent {
    locale = locale;
}

import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { MarkdownTipModule, Locale } from "../../dist/angular";

@NgModule({
    imports: [BrowserModule, FormsModule, MarkdownTipModule],
    declarations: [MainComponent],
    bootstrap: [MainComponent],
})
class MainModule { }

function start() {
    platformBrowserDynamic().bootstrapModule(MainModule);
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
