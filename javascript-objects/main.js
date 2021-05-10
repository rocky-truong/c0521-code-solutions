var student = {
  firstName: 'Rocky',
  lastName: 'Truong',
  age: 26
};

var fullName = student.firstName + ' ' + student.lastName;

console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Order Management Coordinator';

console.log('value of student:', student);

var vehicle = {
  make: 'Hyundai',
  model: 'Ioniq',
  year: '2018'
};

vehicle['color'] = 'white';
vehicle['isConvertible'] = false;

console.log('value of vehicle["color"]:', vehicle['color']);
console.log('value of vehicle["isConvertible"]:', vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

var pet = {
  name: 'Bingo',
  type: 'dog'
};

delete pet.name;
delete pet.type;

console.log('value of pet:', pet);
