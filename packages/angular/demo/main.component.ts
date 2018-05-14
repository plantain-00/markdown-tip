import { Component } from '@angular/core'

@Component({
  selector: 'app',
  template: `
    <div>
        <a href="https://github.com/plantain-00/markdown-tip/tree/master/packages/angular/demo" target="_blank">the source code of the demo</a>
        <markdown-tip [locale]="locale"></markdown-tip>
    </div>
    `
})
export class MainComponent {
  locale = null

  ngOnInit() {
    if (navigator.language === 'zh-CN') {
      import('../../core/dist/locales/' + navigator.language + '.js').then(module => {
        this.locale = module.locale
      })
    }
  }
}
