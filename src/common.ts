export type Data = {
    text: string;
    title: string;
    visible: boolean;
};

const defaultDatas: Data[] = [
    {
        text: "Heading",
        title: `# h1 Heading
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading`,
        visible: false,
    },
    {
        text: "Horizontal Rules",
        title: `___
---
***`,
        visible: false,
    },
    {
        text: "Bold",
        title: `**This is bold text**
__This is bold text__`,
        visible: false,
    },
    {
        text: "Italic",
        title: `*This is italic text*
_This is italic text_`,
        visible: false,
    },
    {
        text: "Strikethrough",
        title: `~~Strikethrough~~`,
        visible: false,
    },
    {
        text: "Blockquote",
        title: `> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.`,
        visible: false,
    },
    {
        text: "Unordered List",
        title: `+ Create a list by starting a line with \`+\`, \`-\`, or \`*\`
+ Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Very easy!`,
        visible: false,
    },
    {
        text: "Ordered List",
        title: `1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa`,
        visible: false,
    },
    {
        text: "Inline Code",
        title: "Inline \`code\`",
        visible: false,
    },
    {
        text: "Indented Code",
        title: `
    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code
`,
        visible: false,
    },
    {
        text: "Block Code",
        title: `\`\`\`js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
\`\`\``,
        visible: false,
    },
    {
        text: "Table",
        title: `| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |`,
        visible: false,
    },
    {
        text: "Link",
        title: `[link text](http://example.com)
[link with title](http://example.com 'title text!')`,
        visible: false,
    },
    {
        text: "Image",
        title: `![Minion](https://example.com/images/minion.png)
![Stormtroopocat](https://example.com/images/stormtroopocat.jpg 'The Stormtroopocat')`,
        visible: false,
    },
];

export const locales: { [name: string]: Data[] } = {
    "zh-cn": [
        {
            text: "标题",
            title: `# h1 Heading
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading`,
            visible: false,
        },
        {
            text: "水平线",
            title: `___
---
***`,
            visible: false,
        },
        {
            text: "加粗",
            title: `**This is bold text**
__This is bold text__`,
            visible: false,
        },
        {
            text: "斜体",
            title: `*This is italic text*
_This is italic text_`,
            visible: false,
        },
        {
            text: "删除线",
            title: `~~Strikethrough~~`,
            visible: false,
        },
        {
            text: "引用",
            title: `> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.`,
            visible: false,
        },
        {
            text: "无序列表",
            title: `+ Create a list by starting a line with \`+\`, \`-\`, or \`*\`
+ Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Very easy!`,
            visible: false,
        },
        {
            text: "有序列表",
            title: `1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa`,
            visible: false,
        },
        {
            text: "内联代码",
            title: "Inline \`code\`",
            visible: false,
        },
        {
            text: "缩进代码",
            title: `
    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code
`,
            visible: false,
        },
        {
            text: "块代码",
            title: `\`\`\`js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
\`\`\``,
            visible: false,
        },
        {
            text: "表格",
            title: `| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |`,
            visible: false,
        },
        {
            text: "链接",
            title: `[link text](http://example.com)
[link with title](http://example.com 'title text!')`,
            visible: false,
        },
        {
            text: "图片",
            title: `![Minion](https://example.com/images/minion.png)
![Stormtroopocat](https://example.com/images/stormtroopocat.jpg 'The Stormtroopocat')`,
            visible: false,
        },
    ],
};

export function getLocale(name: string | undefined | Data[]): Data[] {
    if (name === undefined) {
        return defaultDatas;
    }
    if (typeof name === "string") {
        return locales[name.toLowerCase()] || defaultDatas;
    }
    return name;
}
