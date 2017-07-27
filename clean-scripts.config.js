module.exports = {
  build: [
    `rimraf dist/`,
    `rimraf demo/**/*.bundle-*.js`,
    `cpy src/markdown-tip.css dist/`,
    `file2variable-cli src/vue.template.html -o src/vue-variables.ts --html-minify --base src`,
    `file2variable-cli src/angular.template.html -o src/angular-variables.ts --html-minify --base src`,
    `tsc -p src`,
    `tsc -p demo`,
    `webpack --config demo/webpack.config.js`,
    `cleancss -o dist/markdown-tip.min.css dist/markdown-tip.css`,
    `cleancss -o demo/index.bundle.css dist/markdown-tip.min.css ./node_modules/github-fork-ribbon-css/gh-fork-ribbon.css`,
    `rev-static --config demo/rev-static.config.js`
  ],
  lint: [
    `tslint "src/**/*.ts" "src/**/*.tsx" "demo/**/*.ts" "demo/**/*.tsx"`,
    `standard "**/*.config.js"`
  ],
  test: [
    'tsc -p spec',
    'karma start spec/karma.config.js'
  ],
  fix: [
    `standard --fix "**/*.config.js"`
  ],
  release: [
    `clean-release`
  ]
}
