type Gender = "Male" | "Female" | "Private";

type Student = {
  name: string;
  roll: number;
  major: string;
  gpa: number;
  gender?: Gender;
};

const robin: Student = {
  name: "Piyas Ahmed",
  roll: 2278,
  major: "Computer Science",
  gpa: 3.44,
  gender: "Male",
};
