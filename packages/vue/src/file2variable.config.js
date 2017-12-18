module.exports = {
  base: 'packages/vue/src/',
  files: [
    'packages/vue/src/*.template.html'
  ],
  /**
   * @argument {string} file
   */
  handler: file => {
    if (file.endsWith('index.template.html')) {
      return {
        type: 'vue',
        name: 'MarkdownTip',
        path: './index'
      }
    }
    return { type: 'text' }
  },
  out: 'packages/vue/src/variables.ts'
}
