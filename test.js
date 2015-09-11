var cli = require('./index.js'); out=cli.out;input=cli.in;

var question = "abc",
    choices = ["x","y","z"];
input.text(question)
input.pass(question)
input.confirm(question)
input.list(question,choices)
input.checkbox(question,choices)
