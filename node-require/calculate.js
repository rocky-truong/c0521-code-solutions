const add = require('./add.js');
const subtract = require('./subtract.js');
const multiply = require('./multiply.js');
const divide = require('./divide.js');

if (process.argv[3] === 'plus') {
  const parameter1 = parseInt(process.argv[2]);
  const parameter2 = parseInt(process.argv[4]);
  const value = add(parameter1, parameter2);
  return console.log('result: ', value);
}

if (process.argv[3] === 'minus') {
  const parameter1 = parseInt(process.argv[2]);
  const parameter2 = parseInt(process.argv[4]);
  const value = subtract(parameter1, parameter2);
  return console.log('result: ', value);
}

if (process.argv[3] === 'times') {
  const parameter1 = parseInt(process.argv[2]);
  const parameter2 = parseInt(process.argv[4]);
  const value = multiply(parameter1, parameter2);
  return console.log('result: ', value);
}
if (process.argv[3] === 'over') {
  const parameter1 = parseInt(process.argv[2]);
  const parameter2 = parseInt(process.argv[4]);
  const value = divide(parameter1, parameter2);
  return console.log('result: ', value);
}
