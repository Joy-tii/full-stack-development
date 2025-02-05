//Part-1: CREATE AND MANUPULATE AN OBJECT

//1. Create an object called 'student' with following properties:

student = {
    name: "Rahul",
    age: 20,
    course: "B.Tech",
    marks: { math:85, science:90, english:78}
}

//2. Perform the following operations:

student.city ="Delhi";
student.age = 21;
student.marks.math = 95;
delete student.course;

console.log("Updated student object" , student);

//part-2: OBJECT METHODS

//3. Add a method 'getDetails()' inside the 'student' that returns a string:

student.getDetails = function(){

    return `${this.name} is ${this.age} years old and lives in ${this.city}`;

};

console.log(student.getDetails());

//4. Create a method 'calculateAverage' that returns the average of all subject marks inside 'marks'.

student.calculateAverage = function(){
    let sum = 0;
    let noOfSubject = 0;

    for(let subject in this.marks) {
        sum += this.marks[subject];
        noOfSubject++;
    }

    return sum / noOfSubject;
};

console.log("Average marks:", student.calculateAverage());


//part:3 ITERATING OVER AN OBJECT

//5. Print all properties and values of the 'student' object using:

console.log("\nIterating with for...in:");

for(let key in student){
    console.log(key+ ":" + student[key]);
}

//-----------------------------------------------------------------------------------------------

console.log("\nIterating with object.keys():");

Object.keys(student).forEach(key => {
    console.log(key + ":" +student[key]);
});

//-----------------------------------------------------------------------------------------------

console.log("\nIterating with Object.values():");

Object.values(student).forEach(value => {
    console.log(value);
})

//-----------------------------------------------------------------------------------------------

console.log("\nIterating with Object.entries():");

Object.entries(student).forEach(([key, value]) => {
    console.log(key + ":" + value);
}) ;


//Part 4: OBJECT REFERANCES AND CLONING

//6. Consider the following COde:

let obj1 = { a:10, b: { c:20 }};
let obj2 = obj1;  //this is a reference not a new object
obj2.b.c = 50;

console.log("\n Part 4: Answer");
console.log(obj1.b.c);   //Output : 50 because obj1 and obj2 point to the same object


//7. Clone the 'student' object:

//Using the spread operator('...').

let obj3 = { a : 10, b : { c : 20} };
let obj4 = {...obj3}; //Shallow copy using Spread operator('...').

obj4.a = 15;  //Modifies obj4's 'a' but obj3's 'a' remain 10.

obj4.b.c = 70;  //Modifies obj4's 'b.c' but also obj3's 'b.c' because 'b' is still a reference!

console.log(obj3.a); //output: 10

console.log(obj3.b.c); //output: 70

console.log(obj4.a); //output: 15

console.log(obj4.b.c); //output: 70


//Using 'Object.assign()'.

let obj5 = { a : 10, b : { c : 20} };
let obj6 = Object.assign({}, obj5);  //Shallow copy Using 'Object.assign()'.

obj6.a = 20;  //Modifies obj6's 'a' but obj5's 'a' remain 10.

obj6.b.c = 80;  //Modifies obj6's 'b.c' but also obj5's 'b.c' because 'b' is still a reference!

console.log(obj5.a); //output: 10

console.log(obj5.b.c); //output: 80

console.log(obj6.a); //output: 20

console.log(obj6.b.c); //output: 80


//Using JSON.parse(JSON.stringify()).

let obj7 = { a : 10, b : { c : 20} };
let obj8 = JSON.parse(JSON.stringify(obj7));

obj8.b.c = 60;

console.log(obj7.b.c); //output: 20 unchanged
console.log(obj8.b.c); //output: 60 



//part 5: ADVANCED OBJECT CONCEPTS

//8. Destructuring

const { name : studentName, city : studentCity } = student ;

console.log("\n8. Destructuring");

console.log("Name:" ,studentName);
console.log("City:", studentCity);

//9. Spread Operator

const newDetails = {hobby: "Reading" , age : 22 };

const mergedObject = {...student, ...newDetails};

console.log("\n 9. Spread Operator - Merged Object:");

console.log(mergedObject);

//10. Constructor Function 

function Person (name, age , city){
    this.name = name;
    this.age = age;
    this.city = city;
}

const person1 = new Person("Amit", 25, "Mumbai");
console.log("\n10 Constructor Function - person:");

console.log(person1);


//BONUS QUESTION

//11. Array of objects and finding Highest Marks 

const students = [
    {name: "Sita" , age : 20, marks: { math : 90, science : 85, english : 78}},
    {name: "gita" , age : 21, marks: { math : 80, science : 92, english : 88}},
    {name: "Rita" , age : 19, marks: { math : 95, science : 80, english : 90}},
];

function calculateTotalMarks(student) {
    let sum = 0;
    for (let subject in student.marks) {
        sum += student.marks[subject];
    }
    return sum;
}

let highestMarks = 0;
let studentWithHighestMarks;

for(const student of students) {
    const totalMarks = calculateTotalMarks(student);
    if (totalMarks > highestMarks) {
        highestMarks = totalMarks;
        studentWithHighestMarks = student;
    }
}

console.log("\n11. Highest marks:");
console.log("Student with highest mmarks:", studentWithHighestMarks);

//12. Check if Object is empty

function isObjectEmpty(obj){
    return Object.keys(obj).length === 0;
}

const emptyObject = {};
const nonEmptyObject = { a:1 };

console.log("\n12. Is Object Empty");
console.log("Empty Object:", isObjectEmpty(emptyObject));  // Output: true
console.log("Non-empty object:" , isObjectEmpty(nonEmptyObject)); //Output: false







