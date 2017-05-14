export type Data = {
    text: string;
    title: string;
    visible?: boolean;
};

export const datas: Data[] = [
    {
        text: "Heading",
        title: `# h1 Heading
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading`,
    },
    {
        text: "Horizontal Rules",
        title: `___
---
***`,
    },
    {
        text: "Bold",
        title: `**This is bold text**
__This is bold text__`,
    },
    {
        text: "Italic",
        title: `*This is italic text*
_This is italic text_`,
    },
    {
        text: "Strikethrough",
        title: `~~Strikethrough~~`,
    },
    {
        text: "Blockquote",
        title: `> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.`,
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
    },
    {
        text: "Ordered List",
        title: `1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa`,
    },
    {
        text: "Inline Code",
        title: "Inline \`code\`",
    },
    {
        text: "Indented Code",
        title: `
    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code
`,
    },
    {
        text: "Block Code",
        title: `\`\`\`js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
\`\`\``,
    },
    {
        text: "Table",
        title: `| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |`,
    },
    {
        text: "Link",
        title: `[link text](http://example.com)
[link with title](http://example.com 'title text!')`,
    },
    {
        text: "Image",
        title: `![Minion](https://example.com/images/minion.png)
![Stormtroopocat](https://example.com/images/stormtroopocat.jpg 'The Stormtroopocat')`,
    },
];

for (const data of datas) {
    data.visible = false;
}
