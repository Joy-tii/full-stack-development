// const movieList = [];
// let totalRating = 0;
// const movieName = prompt("Enter Movie Name:");

// for (let i=0; i<5; i++){
//     let movieRating = parseFloat(prompt(`Enter movie rating(0-5) ${i + 1}:`));
//     if(movieRating === "done"){
//         break;
//     }
//     if(movieName && !isNaN(movieRating) && movieRating >= 0 && movieRating <= 5) {
//         movieList.push({name: movieName, rating: movieRating});
//     totalRating += movieRating
      
//     } else {
//         alert("invaid");
//         i--;
//     }
// }

// const averageRating = (totalRating / movieList.length);
// console.log('Movie List', movieList);
// alert(`Movie: ${movieName} with average rating : ${averageRating}`);


// let movieName = prompt("Enter your favorite Movie Name:");
// document.getElementById('movieName').value = movieName;
// let rating = [];

// while(true){
//     let ratingInput = prompt("Enter the Rating for the" + movieName);
//     if(ratingInput === "done"){
//         break;
//     }

//     var ratingValue = parseInt(ratingInput);
//     if(ratingValue >= 1 && ratingValue <= 10){
//         rating.push(ratingValue);
//         document.getElementById('ratings-list').innerHTML += `<li>${ratingValue}</li>`;
//         addRating(); // Recursively prompt for next rating
//     }else {
//         alert("please Enter the Rating between 1 to 10");
//         addRating();
//     }
     
// }

// console.log('============================');
// console.log(rating);
// console.log('============================');
// let totalRating = 0;

// for(let i = 0; i<rating.length; i++){
//     totalRating += rating[i];
// }
// let averageRating = totalRating / rating.length;
// document.getElementById('average-rating').innerText = `The Average Rating for "${movieName}" is: ${averageRating}`;

// alert("The Average Rating for the" + movieName + "is" + averageRating);


// let movieName = prompt("Enter your favorite Movie Name:");
// document.getElementById('movieName').value = movieName;
// let ratings = [];

// function addRating() {
//     let ratingInput = prompt("Enter the Rating for " + movieName);
//     if (ratingInput.toLowerCase() === "done") {
//         updateAverage();
//         return;
//     }
    
//     let ratingValue = parseInt(ratingInput);
//     if (ratingValue >= 1 && ratingValue <= 10) {
//         ratings.push(ratingValue);
//         document.getElementById('ratings-list').innerHTML += `<li>${ratingValue}</li>`;
//         addRating(); // Recursively prompt for next rating
//     } else {
//         alert("Please enter a rating between 1 and 10.");
//         addRating();
//     }
// }

// function updateAverage() {
//     let totalRating = ratings.reduce((sum, num) => sum + num, 0);
//     let averageRating = (totalRating / ratings.length).toFixed(1);
//     document.getElementById('average-rating').innerText = `The Average Rating for "${movieName}" is: ${averageRating}`;
// }

// addRating();

// let movieName = prompt("Enter your favorite Movie Name:");
// document.getElementById('movieName').value = movieName;
// let ratings = [];
// let totalRating = 0;

// while (true) {
//     let ratingInput = prompt("Enter the Rating for " + movieName);
//     if (ratingInput.toLowerCase() === "done") {
//         break;
//     }
    
//     var ratingValue = parseInt(ratingInput);
//     if (ratingValue >= 1 && ratingValue <= 10) {
//         ratings.push(ratingValue);
//         document.getElementById('ratings-list').innerHTML += `<li>${ratingValue}</li>`;
//     } else {
//         alert("Please enter a rating between 1 and 10.");
//     }
// }

// for (var i = 0; i < ratings.length; i++) {
//     totalRating += ratings[i];
// }

// var averageRating = (totalRating / ratings.length).toFixed(1);
// document.getElementById('average-rating').innerText = `The Average Rating for "${movieName}" is: ${averageRating}`;






// let ratings = [];
// let totalRating = 0;
// let movieName = "";

// document.getElementById("movieName").addEventListener("input", function() {
//     movieName = this.value;
// });

// document.getElementById("submitRating").addEventListener("click", function() {
//     let ratingInput = document.getElementById("ratingInput").value;
//     var ratingValue = parseInt(ratingInput);
    
//     if (ratingValue >= 1 && ratingValue <= 10) {
//         ratings.push(ratingValue);
//         document.getElementById('ratings-list').innerHTML += `<li>${ratingValue}</li>`;
//         totalRating += ratingValue;
//         let averageRating = (totalRating / ratings.length).toFixed(1);
//         document.getElementById('average-rating').innerText = `The Average Rating for "${movieName}" is: ${averageRating}`;
//     } else {
//         alert("Please enter a rating between 1 and 10.");
//     }
    
//     document.getElementById("ratingInput").value = "";
// });

let ratings = [];
let totalRating = 0;
let movieName = "";

document.getElementById("movieName").addEventListener("input", function() {
    movieName = this.value;
});

document.getElementById("submitRating").addEventListener("click", function() {
    let ratingInput = document.getElementById("ratingInput").value;
    var ratingValue = parseInt(ratingInput);
    
    if (ratingValue >= 1 && ratingValue <= 10) {
        ratings.push(ratingValue);
        totalRating += ratingValue;
        
        let ratingsWrapper = document.getElementById('ratings-wrapper');
        ratingsWrapper.innerHTML = "";
        ratings.forEach(rating => {
            let ratingBox = document.createElement("div");
            ratingBox.classList.add("rating-box");
            ratingBox.innerText = rating;
            ratingsWrapper.appendChild(ratingBox);
        });
        
        let averageRating = (totalRating / ratings.length).toFixed(1);
        document.getElementById('average-rating').innerText = `The Average Rating for "${movieName}" is: ${averageRating}`;
    } else {
        alert("Please enter a rating between 1 and 10.");
    }
    
    document.getElementById("ratingInput").value = "";
});