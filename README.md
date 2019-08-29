# Installation

```bash
npm i quick-cli --save
#or
yarn add quick-cli
```

# Usage

### This doc is for version 2.x.x, there are multiple breaking changes since 1.0.x

### init

```js
var cli = require('quick-cli'),
```

### out

```js
const {out,dev} = cli;

// choose meaning of your out text, quick-cli will apply colors
out.err('terrible error');
out.warn('bad warning');
out.info('some info');
out.log('important log');
out.success('success msg');
out.form('question');

// you can use multiple strings at once
out.log('some','text','split','into','multiple','strings')

// to display something only in dev/debug mode, use dev instead of out
out.info('lorem ipsum');
dev.info('lorem ipsum');


// activate/deactivate dev, .dev content is being display only if development mode is on

cli.setDevelopmentMode(true); 
// --OR--
cli.setDevelopmentMode(false);


// to apply color to string and display it later with another lib use applyColor:
cli.applyColor('lorem ipsum', 'info');

const raw_text="lorem ipsum";
const colorful_text=cli.applyColor(raw_text, 'info');

console.info(colorful_text); // both will display
cli.out(raw_text, 'info');  // formatted text

// you can add own colors with setColor
const chalk = require("chalk");
cli.addColor("cyantext", (...text)=>chalk.cyan(...text))
out.cyantext("it ","works!")
```

### input

There are to ways to request user input with quick-cli: async and sync

They are avaiable in cli.input and cli.syncInput.

- Synchronous methods will block your thread until user finishes entering input and return his input.
- Asynchronous methods will simply return a promise that resolves to user input.

In both cases, avaiable methods are:

* `text(questionText, defaultValue, validator)` - user will be presented with questionText and asked to type his anwser.
* `password(questionText, validator)` - similar to text but anwser won't be displayed and there can't be a default value.
* `list(questionText, choices)` - user will be presented with list of choices and asked to choose only one.
* `checkbox(questionText, choices)` - user will be presented with list of choices and asked to choose as many as he wants.
* `confirm(questionText)` - user will be presented with questionText and asked to anwser yes/no.
 
### input example

```js
inputSync.text("Enter some random text")
await inputAsync.text("Enter some random text")

inputSync.pass("And some secret password")
inputAsync.pass("And some secret password")

inputSync.confirm("Do you agree?")
await inputAsync.confirm("Do you agree?")

inputSync.list("You prefere ...",["cats","dogs","rabbits"])
await inputAsync.list("You prefere ...",["cats","dogs","rabbits"])

inputSync.checkbox("Multiselect",["a","b","c"])
await inputAsync.checkbox("Multiselect",["a","b","c"])
```

#### click to watch console screen cast for v1.0.5 (everything should look the same on v2.0.0)
http://www.youtube.com/watch?v=9-GJz1Nlb6I
