const chalk = require('chalk');
const inquirer = require("inquirer");
const deasync = require("deasync")

const getGlobal = () => {
  if(typeof gloabal !== "undefined") return gloabal;
  return window;
}
const callbackify = (promiseFactory) => {
  return (...args) => {
    const cb = args[args.length-1];
    args.pop();
    return promiseFactory(...args)
      .then( result => cb(undefined,result) )
      .catch( e => cb(e,undefined) )
  }
}

let display_development_output = false;
const colors = {
}
const defaultColors = {
  log: (...input) => input.join(""),
  info: (...input) => chalk.blue(...input),
  form: (...input) => chalk.magenta(...input),
  success: (...input) => chalk.green(...input),
  warning: (...input) => chalk.red(...input),
  warn: (...input) => chalk.red(...input),
  error: (...input) => chalk.white.bgRed(...input),
  err: (...input) => chalk.white.bgRed(...input),
}
const apply_color = (colorId, ...input) => {
  const brush = colors[colorId] || console.log;
  return brush(...input);
}
const output = (colorId, ...input) => {
  console.log(apply_color(colorId, ...input));
}
const devOutput = (...args) => {
  if (display_development_output) output(...args);
}

const setColor = (colorId, brush) => {
  colors[colorId] = brush;
  output[colorId] = (...input) => output(colorId, ...input)
  devOutput[colorId] = (...input) => devOutput(colorId, ...input)
}

for (const colorId in defaultColors) {
  if (defaultColors.hasOwnProperty(colorId)) {
    setColor(colorId, defaultColors[colorId])
  }
}

const input = {
  text: async (questionText, defaultValue, validator) => {
    const question = {
      type: "input",
      name: "inp",
      message: questionText
    };
    if (["string", "number", "boolean", "array", "function"].includes(defaultValue))
      question.default = defaultValue;

    if (typeof validator === "function") {
      question.validate = validator;
    }
    try {
      const response = await inquirer.prompt([question]);
      return response.inp;
    }
    catch (e) {
      output.error("unable to querry", e)
    }
  },
  list: async (questionText, choices) => {
    const question = {
      type: "list",
      name: "inp",
      choices,
      message: questionText
    };
    try {
      const response = await inquirer.prompt([question]);
      return response.inp;
    }
    catch (e) {
      output.error("unable to querry", e)
    }
  },
  checkbox: async (questionText, choices) => {
    const question = {
      type: "checkbox",
      name: "inp",
      choices,
      message: questionText
    };
    try {
      const response = await inquirer.prompt([question]);
      return response.inp;
    }
    catch (e) {
      output.error("unable to querry", e)
    }
  },
  confirm: async (questionText) => {
    const question = {
      type: "confirm",
      name: "inp",
      message: questionText
    };
    try {
      const response = await inquirer.prompt([question]);
      return response.inp;
    }
    catch (e) {
      output.error("unable to querry", e)
    }
  },
  pass: async (questionText, validator) => {
    const question = {
      type: "password",
      name: "inp",
      message: questionText
    }
    if (typeof validator === "function") {
      question.validate = validator;
    }
    try {
      const response = await inquirer.prompt([question]);
      return response.inp;
    }
    catch (e) {
      output.error("unable to querry", e)
    }
  }
}

const syncInput = {
  text: (...args) => {
    return deasync(
      callbackify(input.text)
    )(...args);
  }
}

for (const inputType in input) {
  if (input.hasOwnProperty(inputType)) {
    syncInput[inputType] = (...args) => {
      return deasync(
        callbackify(input[inputType])
      )(...args);
    }
  }
}

module.exports = {
  setDevelopmentMode: (active) => {
    display_development_output = active;
    return active;
  },

  output,
  out:output,

  devOutput,
  dev:devOutput,

  apply_color,
  setColor,

  input,
  syncInput,
}
