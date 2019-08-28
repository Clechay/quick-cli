const chalk = require('chalk');
const inquirer = require("inquirer");

let display_development_output = false;
const colors = {
}
const defaultColors = {
  info:    (...input) => chalk.blue(...input),
  form:    (...input) => chalk.magenta(...input),
  success: (...input) => chalk.green(...input),
  warning: (...input) => chalk.red(...input),
  error:   (...input) => chalk.white.bgRed(...input),
}
const apply_color = (colorId, ...input) => {
  const brush = colors[colorId] || console.log;
  return brush(...input);
}
const out = (colorId, ...input) => {
  console.log(apply_color(colorId, ...input));
}
const dev = (...args) => {
  if(display_development_output) out(...args);
}

const set_color = (colorId,brush) => {
  colors[colorId]=brush;
  out[colorId] = (...input)=>out(colorId, ...input)
  dev[colorId] = (...input)=>dev(colorId, ...input)
}

for (const colorId in defaultColors) {
  if (defaultColors.hasOwnProperty(colorId)) {
    set_color(colorId,defaultColors[colorId])    
  }
}

const input = {
  text:(questionText,defaultValue,validator) => {
      const question = {
        type: "input",
        name: "inp",
        message: questionText
      };

      if (["string","number","boolean","array","function"].includes(defaultValue))
        question.default=defaultValue;
        
      if (typeof validator==="function") {
        question.validate=validator;
      }

      let response;
      inquirer.prompt( [question], function( answers ) {
        response=answers;
      });
      require('deasync').loopWhile(function(){return !response;});
      return response.inp;
    },
    list:function (questionText,choices) {
      const question =
        {
          type: "list",
          name: "inp",
          choices,
          message: questionText
        }
      ;
      let response;
      inquirer.prompt( [question], function( answers ) {
        response=answers;
      });
      require('deasync').loopWhile(function(){return !response;});
      return response.inp;
    },
    checkbox:function (questionText,choices) {
      const question = {
        type: "checkbox",
        name: "inp",
        choices,
        message: questionText
      };
      let response;
      inquirer.prompt( [question], function( answers ) {
        response=answers;
      });
      require('deasync').loopWhile(function(){return !response;});
      return response.inp;
    },
    confirm:function (questionText) {
      const question = {
        type: "confirm",
        name: "inp",
        message: questionText
      };
      let response;
      inquirer.prompt( [question], function( answers ) {
        response=answers;
      });
      require('deasync').loopWhile(function(){return !response;});
      return response.inp;
    },
    pass:function (questionText,validator) {
      const questions = {
        type: "password",
        name: "inp",
        message: questionText
      }
      if (typeof validator==="function") {
        question.validate=validator;
      }
      let response;
      inquirer.prompt( questions, function( answers ) {
        response=answers;
      });
      require('deasync').loopWhile(function(){return !response;});
      return response.inp;
    }
}

module.exports={
  setDevelopmentMode:(active)=>{
    display_development_output = active;
    return active;
  },
  out,
  dev,
  apply_color,
  in:input
}
