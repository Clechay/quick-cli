const cli = require('./index.js');

const { out } = cli;

(async()=>{
   const inputAsync = cli.input;
   const inputSync  = cli.syncInput;
   const sync = await inputAsync.confirm("use sync?");

   out.info("text input:");
   if(sync) inputSync.text("Enter some random text")
   else await inputAsync.text("Enter some random text")

   out.info("\n\npassword input:");
   if(sync) inputSync.pass("And some secret password (do not enter any actual password!)")
   else await inputAsync.pass("And some secret password (do not enter any actual password!)")

   out.info("\n\nconfirm input:");
   if(sync) inputSync.confirm("Do you agree?")
   else await inputAsync.confirm("Do you agree?")

   out.info("\n\nlist input:");
   if(sync) inputSync.list("You prefere ...",["cats","dogs","rabbits"])
   else await inputAsync.list("You prefere ...",["cats","dogs","rabbits"])

   out.info("\n\ncheckbox input:");
   if(sync) inputSync.checkbox("Multiselect",["a","b","c"])
   else await inputAsync.checkbox("Multiselect",["a","b","c"])

   
   out.info("Some info"," quick-cli works with multiple strings")
   out.form("Some form"," quick-cli works with multiple strings")
   out.success("Some success"," quick-cli works with multiple strings")
   out.warning("Some warning"," quick-cli works with multiple strings")
   out.error("Some error"," quick-cli works with multiple strings")

   const chalk = require("chalk");
   cli.setColor("someCustomColor",(...text)=>chalk.white.bgGreen(...text))
   out.someCustomColor("Very special text")
})()