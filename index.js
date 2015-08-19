var chalk = require('chalk');

module.exports={
  devOut:false,
  colors:{
    info:function (text) {return chalk.blue(text);},
    form:function (text) {return chalk.magenta(text);},
    success:function (text) {return chalk.green(text);},
    warning:function (text) {return chalk.red(text);},
    error:function (text) {return chalk.white.bgRed(text);}
  },
  apply_color:function(text,color) {
    return this.colors[color](text);
  },
  out:function(text,color) {
    console.log(chalk.bold(this.apply_color(text,color)));
  },
  dev:function(text,color) {
    if(this.devOut) console.log(this.apply_color(text,color));
  }
}
