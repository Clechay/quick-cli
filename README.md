# Installation

```bash
npm i quick-cli --save
```

# Usage

```js
var cli = require('quick-cli');


// choose meaning of your out text, quick-cli will apply colors
cli.out('lorem ipsum', 'info');
cli.out('lorem ipsum', 'form');
cli.out('lorem ipsum', 'success');
cli.out('lorem ipsum', 'warning');
cli.out('lorem ipsum', 'error');


// to display something only in dev/debug mode, use .dev instead of .out
cli.out('lorem ipsum', 'info');
cli.dev('lorem ipsum', 'info');


// activate/deactivate dev, .dev content is being display only if devOut===true

cli.devOut=true;
// --OR--
cli.devOut=false;


// to apply color to string and display it later with other cli lib use this:
cli.apply_color('lorem ipsum', 'info');

var raw_text="lorem ipsum";
var colorful_text=cli.apply_color(raw_text, 'info');

console.log(colorful_text); // both will display same
cli.out(raw_text, 'info');  // way formatted text
```
