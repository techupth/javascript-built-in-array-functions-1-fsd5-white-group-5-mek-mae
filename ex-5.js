const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

const getAverageStudentScore = students.reduce((acc, student) => acc + student.score, 0);
const averageScore = getAverageStudentScore / students.length;


console.log(averageScore);   // Output: 87.5