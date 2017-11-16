import { Component } from "@angular/core";
import { Locale } from "../../dist/angular";

let locale: Locale | null = null;

export function setLocale(newLocale: Locale) {
    locale = newLocale;
}

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
    locale = locale;
}
