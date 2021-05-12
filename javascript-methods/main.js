var testScore1 = 90;
var testScore2 = 77;
var testScore3 = 25;
var maximumValue = Math.max(testScore1, testScore2, testScore3);

console.log('maxiumumValue:', maximumValue);

var heroes = ['batman', 'superman', 'green lantern', 'captain america'];
var randomNumber = Math.random();
randomNumber *= heroes.length;
var randomIndex = Math.floor(randomNumber);

console.log('randomIndex:', randomIndex);

var randomHero = heroes[randomIndex];

console.log('randomHero:', randomHero);

var library = [
  {
    title: 'The Cat in the Hat',
    author: 'Dr. Seuss'
  },
  {
    title: 'Green Eggs and Ham',
    author: 'Dr. Seuss'
  },
  {
    title: 'If I Ran the Zoo',
    author: 'Dr. Seuss'
  }
];

var lastBook = library.pop();

console.log('lastBook:', lastBook);

var firstBook = library.shift();

console.log('firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};

var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('library:', library);

var fullName = 'Rocky Truong';
var firstAndLastName = fullName.split(' ');

console.log('firstAndLastName:', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();

console.log('sayMyName:', sayMyName);
