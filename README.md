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

// output:
// λ node test.js        
// ? abc foo             
// ? abc ***             
// ? abc Yes             
// ? abc (Use arrow keys)
// > x                   
//   y                   
//   z    
// ? abc (Press <space> to select)
// >( ) x
//  ( ) y
//  ( ) z
```
