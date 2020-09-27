import { defineComponent, PropType } from 'vue'
import { indexTemplateHtml } from './variables'
import * as common from 'markdown-tip'
export * from 'markdown-tip'

/**
 * @public
 */
export const MarkdownTip = defineComponent({
  props: {
    locale: Object as PropType<common.Locale>
  },
  data: () => {
    return {
      visibleText: null as string | null,
      titleClass: common.defaultTitleClass,
    }
  },
  computed: {
    datas(): common.Locale {
      return common.getLocale(this.locale)
    }
  },
  methods: {
    mouseenter(data: common.Data, event: MouseEvent) {
      this.visibleText = data.text
      this.titleClass = common.getTitleClass(event.target as HTMLElement)
    },
    mouseleave(data: common.Data) {
      this.visibleText = null
    },
  },
  render: indexTemplateHtml,
})
