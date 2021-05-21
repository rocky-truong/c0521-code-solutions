var books = [
  {
    isbn: '978-1250178602',
    title: 'The Four Winds: A Novel',
    author: 'Kristin Hannah'
  },
  {
    isbn: '978-0735211292',
    title: 'Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones',
    author: 'James Clear'
  },
  {
    isbn: '978-0062976581',
    title: 'The Boy, the Mole, the Fox and the Horse',
    author: 'Charlie Mackesy'
  }
];

console.log('books: ', books);

var booksInJSON = JSON.stringify(books);
console.log('books stringify: ', booksInJSON);
console.log('booksInJSON typeof: ', typeof booksInJSON);

var studentInJSON = '[{"id":525737,"name":"Rocky Truong"}]';
console.log('studentInJSON: ', studentInJSON);
console.log('typeof studentInJSON: ', typeof studentInJSON);

var student = JSON.parse(studentInJSON);
console.log('student: ', student);
console.log('typeof student: ', typeof student);
