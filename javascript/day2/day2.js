// var X = 45;
//   console.log("I am Outside X" , X);
//    var X = 78;
//  console.log("I am Outside X" , X);

//  let demoFunction = function(){
//     console.log("I am Inside X",X);
// }

//  demoFunction();


// let x = 45;
// console.log("I am outside X", x);
// // let x = 30;//Uncaught SyntaxError: Identifier 'x' has already been declared (at day2.js:15:5)
// let demoFunction = function(){
//          console.log("I am Inside X",x);
//      }


//      demoFunction();

const x = 45;
console.log("I am outside X", x);
 //const x = 30;//Uncaught SyntaxError: Identifier 'x' has already been declared (at day2.js:25:8)

 //x=30;//day2.js:27 Uncaught TypeError: Assignment to constant variable.
let demoFunction = function(){
         console.log("I am Inside X",x);
     }


     demoFunction();

