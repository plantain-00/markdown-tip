export const srcAngularHtml = `<div class="markdown-tip"><div class="markdown-tip-item" *ngFor="let data of datas" (mouseenter)="mouseenter(data)" (mouseleave)="mouseleave(data)"><span class="markdown-tip-item-text">{{data.text}}</span><pre class="markdown-tip-item-title" *ngIf="data.visible">{{data.title}}</pre></div></div>`;
