// Student Marks Analyzer

const marks = [75, 60, 45, 80, 55];

const totalMarks = marks.reduce((total, mark) => {
    return total + mark;
}, 0);

const average = totalMarks / marks.length;

const results = marks.map(mark => {
    return mark >= 50 ? "Pass" : "Fail";
});

const overallResult = average >= 50 ? "Passed" : "Failed";

console.log(`Student Marks: ${marks}`);
console.log(`Total Marks: ${totalMarks}`);
console.log(`Average Marks: ${average.toFixed(2)}`);
console.log(`Individual Results: ${results}`);
console.log(`Overall Result: ${overallResult}`);