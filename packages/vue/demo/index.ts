import { createApp, defineComponent } from 'vue'
import { MarkdownTip } from '../dist/'

const App = defineComponent({
  data: () => {
    return {
      locale: null,
    }
  },
  beforeCreate() {
    if (navigator.language === 'zh-CN') {
      import('../../core/dist/locales/' + navigator.language + '.js').then(module => {
        this.locale = module.locale
      })
    }
  },
  template: `
    <div>
        <a href="https://github.com/plantain-00/markdown-tip/tree/master/packages/vue/demo" target="_blank">the source code of the demo</a>
        <markdown-tip :locale="locale"></markdown-tip>
    </div>`
})

const app = createApp(App)
app.component('markdown-tip', MarkdownTip)
app.mount('#container')
