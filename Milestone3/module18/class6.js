/**
 *  Problem 1 : Add Grade to each student (without chang Original)
 * you have an array of student objects, each with name and marks, Create a new array where every student also has a "grade" field, based of their marks, the original array must stay exactly the same
 *
 *
 * Grading rule :
 * marks >= 90 --> "A+"
 * marks >= 80 --> "A"
 * marks >= 60 --> "B"
 * below 60    --> "Fail"
 *
 *
 * Input :
 * [
 * {name : "Piyas Ahmed, mark : 99"},
 * {name : "Habib Ahmed, mark : 45}
 * ]
 *
 * Output :
 * [
 * {name : "Piyas Ahmed,mark : 99,grade : "A+"},
 * {name : "Habib Ahmed , mark : 45, grade: "Fail},
 * ]
 *
 */
const studentResult = [
  { name: "Piyas Ahmed ", mark: 99 },
  { name: "Habib Ahmed ", mark: 45 },
  { name: "Rohim Ahmed ", mark: 85 },
];

const addGrade = (students) => {
  // Convert Student marks to grade
  const getGrade = (mark) => {
    if (mark >= 90) {
      return "A+";
    } else if (mark >= 80) {
      return "A";
    } else if (mark >= 60) {
      return "B";
    } else {
      return "Fail";
    }
  };

  const modifiedStudentArray = students.map((student) => {
    // console.log(student);
    const { name, mark } = student;
    // console.log(name, mark);
    const newArray = { name, mark, grade: getGrade(mark) };
    return newArray;
  });
  return modifiedStudentArray;
};

console.log(addGrade(studentResult));
console.log("Main array", studentResult);
