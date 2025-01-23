var a = 50;
var b = 70;
//Arithmatic Operator
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);

//camparision Operator

//== :- Equal to(likely check)

var a = 50;
var b =' 50';
console.log(a==b);
console.log(a!=b);

//=== :-equal value and equal type(strictly check)
console.log(a===b);
console.log(a!==b);


//Greator than(>,<,<=,>=)

let x = 18;
let y = 56;
console.log(x>y);
console.log(x<y);
console.log(x>=y);
console.log(x<=y);

//logical operators

console.log(10>5 && 10>20);

console.log(10>5 && 10<20);
console.log(10>5 && 30>20);

console.log(10>5 || 10>20);
console.log(10<5 || 10>20);


console.log(!(10<5) );

//if statement

let manishMarks = 40;
let cutOfMarks = 32;
if( manishMarks=  cutOfMarks){
console.log('your Are passed');
}

//if-else statement
if( manishMarks=  cutOfMarks){
    console.log('your Are passed');
    }else{
        console.log('your Are fail'); 
    }

//else-if statement

if(false){
    console.log("Aalu le aana");
}
else if(false){
    console.log("soya le aana");
}
else if(true){
    console.log("panner le aana");
}
else if(true){
    console.log("macchli le aana");
}
else{
    console.log("non-veg or milk le aana")
}

    //finding largest of two number
    
function largestInt(a,b){
if(a>b){
console.log("a is largest than b");
}
else{
    console.log("b is largest number than a");
}
}

largestInt(80,60);



