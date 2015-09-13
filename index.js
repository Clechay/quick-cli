var chalk = require('chalk');
var inquirer = require("inquirer");

var core={
  c_devOut:false,
  c_colors:{
    info:function (text) {return chalk.blue(text);},
    form:function (text) {return chalk.magenta(text);},
    success:function (text) {return chalk.green(text);},
    warning:function (text) {return chalk.red(text);},
    error:function (text) {return chalk.white.bgRed(text);}
  },
  c_apply_color:function(text,color) {
    return this.c_colors[color](text);
  },
  c_add_color:function(id,gen) {
    c_colors[id]=gen;
  },
  c_out:function(text,color) {
    console.log(chalk.bold(this.c_apply_color(text,color)));
  },
  c_dev:function(text,color) {
    if(this.c_devOut) this.c_out(text,color);
  }
}
module.exports={
  setDevMode:function(remote_devMode_val){
  	c_devOut=remote_devMode_val;
  	return c_devOut;
  },
  devOut:{
    err:function (text,color){
        if(typeof color==="undefined") color='error';
        core.c_dev(text,color);
    },
    warn:function (text,color){
        if(typeof color==="undefined") color='warning';
        core.c_dev(text,color);
    },
    info:function (text,color){
        if(typeof color==="undefined") color='info';
        core.c_dev(text,color);
    },
    log:function (text,color){
        if(typeof color==="undefined") color='info';
        core.c_dev(text,color);
    },
    success:function (text,color){
        if(typeof color==="undefined") color='success';
        core.c_dev(text,color);
    },
    form:function (text,color){
        if(typeof color==="undefined") color='form';
        core.c_dev(text,color);
    }
  },
  out:{
    err:function (text,color){
        if(typeof color==="undefined") color='error';
        core.c_out(text,color);
    },
    warn:function (text,color){
        if(typeof color==="undefined") color='warning';
        core.c_out(text,color);
    },
    info:function (text,color){
        if(typeof color==="undefined") color='info';
        core.c_out(text,color);
    },
    log:function (text,color){
        if(typeof color==="undefined") color='info';
        core.c_out(text,color);
    },
    success:function (text,color){
        if(typeof color==="undefined") color='success';
        core.c_out(text,color);
    },
    form:function (text,color){
        if(typeof color==="undefined") color='form';
        core.c_out(text,color);
    }
  },
  in:{
    text:function (rem_question,rem_default,rem_validate) {
      var questions = [
        {
          type: "input",
          name: "inp",
          message: rem_question
        }
      ];
      if (typeof rem_default!=="undefined") {
        if (typeof rem_default==="function") {
          questions[0].default=rem_def;
        }
        else if (typeof rem_default==="string") {
          questions[0].default=function () { return rem_def; };
        }
      }
      if (typeof rem_validate!=="undefined") {
        if (typeof rem_validate==="function") {
          questions[0].validate=rem_validate;
        }
        // else if (typeof rem_validate==="string") {
        //
        // }
      }
      var response;
      inquirer.prompt( questions, function( answers ) {
        response=answers;
      });
      require('deasync').loopWhile(function(){return !response;});
      return response.inp;
    },
    list:function (rem_question,rem_choices) {
      var questions = [
        {
          type: "list",
          name: "inp",
          choices: rem_choices,
          message: rem_question
        }
      ];
      var response;
      inquirer.prompt( questions, function( answers ) {
        response=answers;
      });
      require('deasync').loopWhile(function(){return !response;});
      return response.inp;
    },
    checkbox:function (rem_question,rem_choices) {
      var questions = [
        {
          type: "checkbox",
          name: "inp",
          choices: rem_choices,
          message: rem_question
        }
      ];
      var response;
      inquirer.prompt( questions, function( answers ) {
        response=answers;
      });
      require('deasync').loopWhile(function(){return !response;});
      return response.inp;
    },
    confirm:function (rem_question) {
      var questions = [
        {
          type: "confirm",
          name: "inp",
          message: rem_question
        }
      ];
      var response;
      inquirer.prompt( questions, function( answers ) {
        response=answers;
      });
      require('deasync').loopWhile(function(){return !response;});
      return response.inp;
    },
    pass:function (rem_question,rem_validate) {
      var questions = [
        {
          type: "password",
          name: "inp",
          message: rem_question
        }
      ];
      if (typeof rem_validate!=="undefined") {
        if (typeof rem_validate==="function") {
          questions[0].validate=rem_validate;
        }
      }
      var response;
      inquirer.prompt( questions, function( answers ) {
        response=answers;
      });
      require('deasync').loopWhile(function(){return !response;});
      return response.inp;
    }
  },
  utils:{
    apply_color:function(text,color) {
      return c_apply_color(text,color);
    }
  }
}
