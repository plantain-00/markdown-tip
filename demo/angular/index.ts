import "core-js/es6";
import "core-js/es7/reflect";
import "zone.js/dist/zone";
import "tslib";

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { enableProdMode } from "@angular/core";

enableProdMode();

import { Component } from "@angular/core";

@Component({
    selector: "app",
    template: `
    <div>
        <a href="https://github.com/plantain-00/markdown-tip/tree/master/demo/angular/index.ts" target="_blank">the source code of the demo</a>
        <markdown-tip [locale]="locale"></markdown-tip>
    </div>
    `,
})
export class MainComponent {
    locale = navigator.language;
}

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { MarkdownTipComponent } from "../../dist/angular";

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [MainComponent, MarkdownTipComponent],
    bootstrap: [MainComponent],
})
class MainModule { }

platformBrowserDynamic().bootstrapModule(MainModule);
