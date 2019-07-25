import { Locale } from '../'

/**
 * @public
 */
export const locale: Locale = [
  {
    text: '标题',
    title: `# h1 Heading
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading`
  },
  {
    text: '水平线',
    title: `___
---
***`
  },
  {
    text: '加粗',
    title: `**This is bold text**
__This is bold text__`
  },
  {
    text: '斜体',
    title: `*This is italic text*
_This is italic text_`
  },
  {
    text: '删除线',
    title: `~~Strikethrough~~`
  },
  {
    text: '引用',
    title: `> Blockquotes can also be nested
>> by using additional greater-than signs
> > > or with spaces between arrows.`
  },
  {
    text: '无序列表',
    title: `+ Create a list by starting a line
+ Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Very easy!`
  },
  {
    text: '有序列表',
    title: `1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa`
  },
  {
    text: '内联代码',
    title: 'Inline `code`'
  },
  {
    text: '缩进代码',
    title: `
    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code
`
  },
  {
    text: '块代码',
    title: `\`\`\`js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
\`\`\``
  },
  {
    text: '表格',
    title: `Option | Description
--- | ---
data | path
engine | engine
ext | extension`
  },
  {
    text: '链接',
    title: `[link text](http://example.com)
[link with title](http://example.com 'title text!')`
  },
  {
    text: '图片',
    title: `![bar](https://example.com/foo.png)
![foo](https://example.com/foo.jpg 'foo')`
  }
]
