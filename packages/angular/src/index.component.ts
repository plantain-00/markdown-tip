import { Component, Input } from '@angular/core'

import { indexTemplateHtml } from './variables'
// tslint:disable-next-line:no-duplicate-string
import * as common from 'markdown-tip'
export * from 'markdown-tip'

/**
 * @public
 */
@Component({
  selector: 'markdown-tip',
  template: indexTemplateHtml
})
export class MarkdownTipComponent {
  @Input()
  locale?: common.Locale

  get datas() {
    return common.getLocale(this.locale)
  }
  visibleText: string | null = null
  titleClass = common.defaultTitleClass

  mouseenter(data: common.Data, event: MouseEvent) {
    this.visibleText = data.text
    this.titleClass = common.getTitleClass(event.target as HTMLElement)
  }
  mouseleave(data: common.Data) {
    this.visibleText = null
  }
  trackBy(data: common.Data) {
    return data.text
  }
}
