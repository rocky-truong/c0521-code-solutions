/* exported getStudentNames */
function getStudentNames(students) {
  var arrStudents = [];
  for (var i = 0; i < students.length; i++) {
    arrStudents.push(students[i].name);
  }
  return arrStudents;
}
