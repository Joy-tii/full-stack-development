//While loop

// var a=1;
// while(a>4){
//     console.log("ram" , a)
//     a++;
// }
//do while loop

// do{
//     console.log("Ram" , a);
//     a++
// } while(a>4);

//for loop

// for(let i=1; i<=4; i++){
// console.log("Ram", i);
// }

//write a program to generate even no. from 1 to 100

// for(let i=1; i<=100; i++){
//     if (i % 2 === 0){
//         console.log(i);
//     }
// }


// i=1;
// while(i<=100){
//     if(i%2 === 0)
//     console.log(i)
//     i++;
// }
// var i=1;
// do{
    
  
//     console.log(i)
  
// } while(i<=100){
//     i%2===0;
//     i++;
// }

//Write a program for table of two.

// for( let i=1; i<=10; i++){
//     console.log(2*i)
// }

const randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log("Game Number (for testing):", randomNumber); // For debugging

    // Function to check the user's guess
    function checkGuess() {
      const userGuess = Number(document.getElementById("guessInput").value);
      const feedback = document.getElementById("feedback");

      if (!userGuess || userGuess < 1 || userGuess > 100) {
        feedback.textContent = "Please enter a valid number between 1 and 100.";
      } else if (userGuess < randomNumber) {
        feedback.textContent = "Too low! Try again.";
      } else if (userGuess > randomNumber) {
        feedback.textContent = "Too high! Try again.";
      } else {
        feedback.textContent = `Congratulations! You guessed the number: ${randomNumber}`;
      }
    }
