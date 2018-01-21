import Vue from 'vue'
import Component from 'vue-class-component'
import '../dist/'

@Component({
  template: `
    <div>
        <a href="https://github.com/plantain-00/markdown-tip/tree/master/packages/vue/demo" target="_blank">the source code of the demo</a>
        <markdown-tip :locale="locale"></markdown-tip>
    </div>
    `
})
class App extends Vue {
  locale = null

  beforeCreate () {
    if (navigator.language === 'zh-CN') {
      import('../../core/dist/locales/' + navigator.language + '.js').then(module => {
        this.locale = module.locale
      })
    }
  }
}

// tslint:disable-next-line:no-unused-expression
new App({ el: '#container' })
