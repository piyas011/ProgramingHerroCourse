// getStudentResult

// Example
// getStudentResult({
// name: "Rafi",
// marks: [80, 75, 90, 85]
// });

// Expected output:
// { name: "Rafi", average: 82.5, result: "Passed" }

// another example:
// getStudentResult({
// name: "Nabil",
// marks: [30, 35, 40, 25]
// });

// Expected output:
// { name: "Nabil", average: 32.5, result: "Failed" }
``;

// Task
// Create a function named getStudentResult. The function should receive a student object, calculate the average of all marks, determine whether the student passed, and return a new object containing name, average, and result.

const student1 = {
  name: "Rafi",
  marks: [80, 75, 90, 85],
};

const student2 = {
  name: "Nabil",
  marks: [30, 35, 40, 25],
};

interface StudentType {
  name: string;
  marks: number[];
}

interface ReturnType {
  name: string;
  average: number;
  result: string;
}

const getStudentResult = (studentsObj: StudentType): ReturnType => {
  const totalMark: number = studentsObj.marks.reduce(
    (acc, mark) => acc + mark,
    0,
  );
  const averageMark: number = totalMark / studentsObj.marks.length;
  const studentResult: string = averageMark >= 40 ? "Passed" : "Failed";

  return {
    name: studentsObj.name,
    average: averageMark,
    result: studentResult,
  };
};

console.log(getStudentResult(student1));
console.log(getStudentResult(student2));
