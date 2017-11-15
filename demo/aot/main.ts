import { Component } from "@angular/core";

@Component({
    selector: "app",
    template: `
    <div>
        <a href="https://github.com/plantain-00/markdown-tip/tree/master/demo/aot/index.ts" target="_blank">the source code of the demo</a>
        <markdown-tip [locale]="locale"></markdown-tip>
    </div>
    `,
})
export class MainComponent {
    locale = null;
}
