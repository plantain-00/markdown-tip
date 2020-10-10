# markdown-tip

[![Dependency Status](https://david-dm.org/plantain-00/markdown-tip.svg)](https://david-dm.org/plantain-00/markdown-tip)
[![devDependency Status](https://david-dm.org/plantain-00/markdown-tip/dev-status.svg)](https://david-dm.org/plantain-00/markdown-tip#info=devDependencies)
[![Build Status: Linux](https://travis-ci.org/plantain-00/markdown-tip.svg?branch=master)](https://travis-ci.org/plantain-00/markdown-tip)
[![Build Status: Windows](https://ci.appveyor.com/api/projects/status/github/plantain-00/markdown-tip?branch=master&svg=true)](https://ci.appveyor.com/project/plantain-00/markdown-tip/branch/master)
![Github CI](https://github.com/plantain-00/markdown-tip/workflows/Github%20CI/badge.svg)
[![npm version](https://badge.fury.io/js/markdown-tip.svg)](https://badge.fury.io/js/markdown-tip)
[![Downloads](https://img.shields.io/npm/dm/markdown-tip.svg)](https://www.npmjs.com/package/markdown-tip)
[![type-coverage](https://img.shields.io/badge/dynamic/json.svg?label=type-coverage&prefix=%E2%89%A5&suffix=%&query=$.typeCoverage.atLeast&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fplantain-00%2Fmarkdown-tip%2Fmaster%2Fpackage.json)](https://github.com/plantain-00/markdown-tip)

A markdown tip component.

## features

+ vuejs component
+ reactjs component
+ multiple-language

## link css

```html
<link rel="stylesheet" href="./node_modules/markdown-tip/dist/markdown-tip.css" />
```

## vuejs component

[![gzip size](https://img.badgesize.io/https://unpkg.com/markdown-tip-vue?compression=gzip)](https://unpkg.com/markdown-tip-vue)

`npm i markdown-tip-vue`

```ts
import { MarkdownTip } from "markdown-tip-vue"
app.component('markdown-tip', MarkdownTip)
```

or

```html
<script src="./node_modules/vue/dist/vue.min.js"></script>
<script src="./node_modules/markdown-tip-vue/dist/markdown-tip-vue.min.js"></script>
```

```html
<markdown-tip></markdown-tip>
```

the online demo: <https://plantain-00.github.io/markdown-tip/packages/vue/demo>

## reactjs component

[![gzip size](https://img.badgesize.io/https://unpkg.com/markdown-tip-react?compression=gzip)](https://unpkg.com/markdown-tip-react)

```ts
import { MarkdownTip } from "markdown-tip-react";
```

or

```html
<script src="./node_modules/react/umd/react.production.min.js"></script>
<script src="./node_modules/react-dom/umd/react-dom.production.min.js"></script>
<script src="./node_modules/markdown-tip-react/dist/markdown-tip-react.min.js"></script>
```

```html
<MarkdownTip>
</MarkdownTip>
```

the online demo: <https://plantain-00.github.io/markdown-tip/packages/react/demo>

## properties and events of the component

name | type | description
--- | --- | ---
locale | Locale? | locale object

## change logs

```ts
# v6
// vue 2
import 'markdown-tip-vue'
# v7
// vue 3
import { MarkdownTip } from "markdown-tip-vue"
app.component('markdown-tip', MarkdownTip)
```

```bash
# v5
npm i markdown-tip

# v6
npm i markdown-tip-vue
npm i markdown-tip-react
npm i markdown-tip-angular
```

```ts
// v5
import "markdown-tip/vue";
import { MarkdownTip } from "markdown-tip/react";
import { MarkdownTipModule } from "markdown-tip/angular";

// v6
import "markdown-tip-vue";
import { MarkdownTip } from "markdown-tip-react";
import { MarkdownTipModule } from "markdown-tip-angular";
```

```html
// v5
<link rel="stylesheet" href="./node_modules/markdown-tip/markdown-tip.css" />

// v6
<link rel="stylesheet" href="./node_modules/markdown-tip/dist/markdown-tip.css" />
```

```ts
// v4 angular AOT:
import { MarkdownTipModule } from "markdown-tip/angular";

// v5 angular AOT:
import { MarkdownTipModule } from "markdown-tip/aot/angular";
```

```ts
// v4
import "markdown-tip/vue";
import { MarkdownTip } from "markdown-tip/react";
import { MarkdownTipComponent } from "markdown-tip/angular";

// v3
import "markdown-tip/dist/vue";
import { MarkdownTip } from "markdown-tip/dist/react";
import { MarkdownTipComponent } from "markdown-tip/dist/angular";
```

```bash
// v3
locale is an object that can be imported dynamicly

// v2
locale is a string
```

```bash
// v1
<link rel="stylesheet" href="./node_modules/markdown-tip/dist/index.css" />

// v2
<link rel="stylesheet" href="./node_modules/markdown-tip/dist/markdown-tip.css" />
```
