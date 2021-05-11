function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}

function greet(name) {
  return 'Hey, ' + name;
}

function getArea(width, height) {
  return width * height;
}

function getFirstName(person) {
  return person.firstName;
}

function getLastElement(array) {
  var lastIndex = array.length - 1;
  return array[lastIndex];
}

convertMinutesToSeconds(5);
greet('Beavis');
getArea(17, 42);
getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });
getLastElement(['propane', 'and', 'propane', 'accessories']);
