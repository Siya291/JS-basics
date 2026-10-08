//Exercise 1 — Student Management System

let objStudents = [
    {stdName: "Siyabonga", stdAge: "26", stdMark: 94, stdCourse: "IT"},
    {stdName: "Elron", stdAge: "32", stdMark: 88, stdCourse: "LLB"},
    {stdName: "Aphelele", stdAge: "20", stdMark: 85, stdCourse: "Teaching"},
    {stdName: "Lindokuhle", stdAge: "22", stdMark: 40, stdCourse: "PR"},
    {stdName: "Sandra", stdAge: "23", stdMark: 90, stdCourse: "Safety"}
];

function displayStudents() {
    return objStudents.forEach((students) => {
        console.log(`Student Name: ${students.stdName}, Student Mark: ${students.stdMark}`);
    });
}

function calculateAverage(objStudents) {
    if (!objStudents) return 0;

    let totalMarks = objStudents.reduce((sum, students) => sum + students.stdMark, 0);
    return totalMarks / objStudents.length;
}


function findTopStudents(objStudents) {

    let highestMark = 0;

    objStudents.forEach((student) => {
        if (student.stdMark > highestMark) {
            highestMark = student.stdMark;
        }
    });

    let topStudent = [];
    objStudents.forEach((student) => {
        if (student.stdMark === highestMark) {
            topStudent.push(student);
        }
    });

    return topStudent;
}

function findPassedStudents() {
    if (!objStudents) return [];

    return objStudents.filter(student => student.stdMark >= 50);
}

console.log("")
console.log(displayStudents());

console.log("")
const average = calculateAverage(objStudents);
console.log(`Average Mark: ${average}`);

console.log("")
let topStudentsList = findTopStudents(objStudents);
console.log("Top Student(s):");
topStudentsList.forEach(student => {
    console.log(`- ${student.stdName} (${student.stdMark}%)`);
});

console.log("")
let passingStudents = findPassedStudents(objStudents);

console.log("Students who passed (50% or more):");
passingStudents.forEach(student => {
    console.log(`- ${student.stdName}: ${student.stdMark}%`);
});