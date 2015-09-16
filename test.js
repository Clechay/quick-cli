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
