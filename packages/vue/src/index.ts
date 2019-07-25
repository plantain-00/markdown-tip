import Vue from 'vue'
import Component from 'vue-class-component'
import { indexTemplateHtml, indexTemplateHtmlStatic } from './variables'
import * as common from 'markdown-tip'
export * from 'markdown-tip'

@Component({
  render: indexTemplateHtml,
  staticRenderFns: indexTemplateHtmlStatic,
  props: ['locale']
})
export class MarkdownTip extends Vue {
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
}

Vue.component('markdown-tip', MarkdownTip)
