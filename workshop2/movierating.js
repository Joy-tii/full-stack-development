const movieList = [];
let totalRating = 0;
const movieName = prompt("Enter Movie Name:");

for (let i=0; i<5; i++){
    let movieRating = parseFloat(prompt(`Enter movie rating(0-5) ${i + 1}:`));
    if(movieName && !isNaN(movieRating) && movieRating >= 0 && movieRating <= 5) {
        movieList.push({name: movieName, rating: movieRating});
    totalRating += movieRating
      
    } else {
        alert("invaid");
        i--;
    }
}

const averageRating = (totalRating / movieList.length);
console.log('Movie List', movieList);
alert(`Added: ${movieName} with average rating : ${averageRating}`);


