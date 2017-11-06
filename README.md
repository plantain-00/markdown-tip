[![Dependency Status](https://david-dm.org/plantain-00/markdown-tip.svg)](https://david-dm.org/plantain-00/markdown-tip)
[![devDependency Status](https://david-dm.org/plantain-00/markdown-tip/dev-status.svg)](https://david-dm.org/plantain-00/markdown-tip#info=devDependencies)
[![Build Status: Linux](https://travis-ci.org/plantain-00/markdown-tip.svg?branch=master)](https://travis-ci.org/plantain-00/markdown-tip)
[![Build Status: Windows](https://ci.appveyor.com/api/projects/status/github/plantain-00/markdown-tip?branch=master&svg=true)](https://ci.appveyor.com/project/plantain-00/markdown-tip/branch/master)
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
<link rel="stylesheet" href="./node_modules/markdown-tip/markdown-tip.css" />
```

#### vuejs component demo

`npm i vue vue-class-component`

```ts
import "markdown-tip/vue";
```

```html
<markdown-tip></markdown-tip>
```

the online demo: https://plantain-00.github.io/markdown-tip/demo/vue/index.html

#### reactjs component demo

```ts
import { MarkdownTip } from "markdown-tip/react";
```

```html
<MarkdownTip>
</MarkdownTip>
```

the online demo: https://plantain-00.github.io/markdown-tip/demo/react/index.html

#### angular component demo

```ts
import { MarkdownTipModule } from "markdown-tip/angular";

// for angular AOT:
// import { MarkdownTipModule } from "markdown-tip/aot/angular";

@NgModule({
    imports: [BrowserModule, FormsModule, MarkdownTipModule],
    declarations: [MainComponent],
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
