import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { MarkdownTipModule } from "../../dist/angular";
import { MainComponent } from "./main";

@NgModule({
    imports: [BrowserModule, FormsModule, MarkdownTipModule],
    declarations: [MainComponent],
    bootstrap: [MainComponent],
})
export class MainModule { }
