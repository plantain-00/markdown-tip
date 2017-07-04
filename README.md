[![Dependency Status](https://david-dm.org/plantain-00/markdown-tip.svg)](https://david-dm.org/plantain-00/markdown-tip)
[![devDependency Status](https://david-dm.org/plantain-00/markdown-tip/dev-status.svg)](https://david-dm.org/plantain-00/markdown-tip#info=devDependencies)
[![Build Status](https://travis-ci.org/plantain-00/markdown-tip.svg?branch=master)](https://travis-ci.org/plantain-00/markdown-tip)
[![npm version](https://badge.fury.io/js/markdown-tip.svg)](https://badge.fury.io/js/markdown-tip)
[![Downloads](https://img.shields.io/npm/dm/markdown-tip.svg)](https://www.npmjs.com/package/markdown-tip)

# markdown-tip
A markdown tip component.

#### features

+ vuejs component
+ reactjs component
+ angular component
+ multiple-language

#### install

`npm i markdown-tip`

#### link css

```html
<link rel="stylesheet" href="./node_modules/markdown-tip/dist/markdown-tip.css" />
```

#### vuejs component demo

`npm i vue vue-class-component`

```ts
import "markdown-tip/dist/vue";
```

```html
<markdown-tip></markdown-tip>
```

the online demo: https://plantain-00.github.io/markdown-tip/demo/vue/index.html

#### reactjs component demo

```ts
import { MarkdownTip } from "markdown-tip/dist/react";
```

```html
<MarkdownTip>
</MarkdownTip>
```

the online demo: https://plantain-00.github.io/markdown-tip/demo/react/index.html

#### angular component demo

```ts
import { MarkdownTipComponent } from "markdown-tip/dist/angular";

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [MainComponent, MarkdownTipComponent],
    bootstrap: [MainComponent],
})
class MainModule { }
```

```html
<markdown-tip>
</markdown-tip>
```

the online demo: https://plantain-00.github.io/markdown-tip/demo/angular/index.html

#### properties and events of the component

name | type | description
--- | --- | ---
locale | Locale? | locale object

#### change logs

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
