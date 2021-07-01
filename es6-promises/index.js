const takeAChance = require('./take-a-chance');
const chances = takeAChance('Rocky');
chances.then(value => {
  console.log(value);
}, reason => {
  console.log(reason.message);
});
