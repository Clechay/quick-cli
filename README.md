# Installation

```bash
npm i quick-cli --save
```

# Usage

### init

```js
var cli = require('quick-cli'),     // needed
    out = cli.out,                  // optional, useful for output
    dev = cli.devOut,               // optional, useful for development output
    input = cli.out;                // optional, useful for input
```

### out

```js
// choose meaning of your out text, quick-cli will apply colors
out.err('lorem ipsum');
out.warn('lorem ipsum');
out.info('lorem ipsum');
out.log('lorem ipsum');
out.success('lorem ipsum');
out.form('lorem ipsum');

// to display something only in dev/debug mode, use dev instead of out
out.info('lorem ipsum');
dev.info('lorem ipsum');


// activate/deactivate dev, .dev content is being display only if dev mode is on

cli.setDevMode(true);
// --OR--
cli.setDevMode(false);


// to apply color to string and display it later with another lib use this:
cli.utils.apply_color('lorem ipsum', 'info');

var raw_text="lorem ipsum";
var colorful_text=cli.utils.apply_color(raw_text, 'info');

console.log(colorful_text); // both will display same
cli.out(raw_text, 'info');  // way formatted text
```

### input

```js
var question = "abc",
    choices = ["x","y","z"];
input.text(question)
input.pass(question)
input.confirm(question)
input.list(question,choices)
input.checkbox(question,choices)
```

### input example

```js
var cli = require('./index.js'); out=cli.out;input=cli.in;

var question = "abc",
    choices = ["x","y","z"];

out.info("text input:");
input.text(question)

out.info("\n\npassword input:");
input.pass(question)

out.info("\n\nconfirm input:");
input.confirm(question)

out.info("\n\nlist input:");
input.list(question,choices)

out.info("\n\ncheckbox input:");
input.checkbox(question,choices)
```

#### click to watch console screen cast
http://www.youtube.com/watch?v=9-GJz1Nlb6I

### If You want to sumbit Issue or Pull Request go to main repo: https://gitlab.com/Clechay/quick-cli
Github repo is only a clone.
