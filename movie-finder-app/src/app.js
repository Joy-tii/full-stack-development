let index = 0;
function slideMovies() {
    const slides = document.querySelector('.hero-container');
    index = (index + 1) % 3; // We have 3 slides
    slides.style.transform = `translateX(-${index * 100}vw)`;
}
setInterval(slideMovies, 3000);

// Search & Fetch Movie
document.getElementById("search-button").addEventListener("click", function () {
    const query = document.getElementById("search-input").value.trim();
    if (query) {
        fetchMovie(query);
    }
});

async function fetchMovie(query) {
    const apiKey = "a9cc420b"; // Your OMDB API Key
    const url = `https://www.omdbapi.com/?t=${encodeURIComponent(query)}&apikey=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.Response === "True") {
            displayMovie(data);
            fetchSimilarMovies(data.Genre.split(",")[0].trim());
        } else {
            document.getElementById("movie-section").innerHTML = "<p>❌ Movie not found. Try again!</p>";
        }
    } catch (error) {
        console.error("❌ Error fetching movie:", error);
    }
}

function displayMovie(movie) {
    document.getElementById("searched-movie").innerHTML = `
        <div class="movie-card">
            <h3>${movie.Title} (${movie.Year})</h3>
            <img src="${movie.Poster}" alt="${movie.Title} Poster">
            <p><strong>Genre:</strong> ${movie.Genre}</p>
            <p><strong>Plot:</strong> ${movie.Plot}</p>
        </div>
    `;
}

// Fetch Similar Movies
async function fetchSimilarMovies(genre) {
    const apiKey = "a9cc420b"; // Your OMDB API Key
    const url = `https://www.omdbapi.com/?s=${encodeURIComponent(genre)}&apikey=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.Response === "True") {
            displaySimilarMovies(data.Search.slice(0, 4)); // Show first 4
        } else {
            document.querySelector("#similar-movies .movies-list").innerHTML = "<p>No similar movies found.</p>";
        }
    } catch (error) {
        console.error("❌ Error fetching similar movies:", error);
    }
}

function displaySimilarMovies(movies) {
    const similarContainer = document.querySelector("#similar-movies .movies-list");
    similarContainer.innerHTML = movies
        .map(movie => `
            <div class="movie-card">
                <img src="${movie.Poster}" alt="${movie.Title} Poster">
                <h3>${movie.Title} <br> (${movie.Year})</h3>
            </div>
        `)
        .join("");
}


document.addEventListener("DOMContentLoaded", function () {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    updateCartCount();

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function () {
            let product = this.closest(".product");
            let item = {
                id: product.dataset.id,
                name: product.dataset.name,
                price: parseInt(product.dataset.price)
            };
            cart.push(item);
            localStorage.setItem("cart", JSON.stringify(cart));

            showPopup("Item added to cart!");
            updateCartCount();
        });
    });

    function updateCartCount() {
        document.getElementById("cart-count").textContent = cart.length;
    }

    function showPopup(message) {
        let popup = document.getElementById("popup");
        popup.textContent = message;
        popup.style.display = "block";
        setTimeout(() => popup.style.display = "none", 2000);
    }

    if (document.getElementById("cart-items")) {
        let cartItems = document.getElementById("cart-items");
        let subtotal = 0;

        cart.forEach((item, index) => {
            let div = document.createElement("div");
            div.innerHTML = `${item.name} - ₹${item.price} <button onclick="removeItem(${index})">Remove</button>`;
            cartItems.appendChild(div);
            subtotal += item.price;
        });

        let tax = subtotal * 0.05;
        let discount = subtotal * 0.1;
        let total = subtotal + tax + 50 - discount;

        document.getElementById("subtotal").textContent = subtotal;
        document.getElementById("tax").textContent = tax.toFixed(2);
        document.getElementById("discount").textContent = discount.toFixed(2);
        document.getElementById("total").textContent = total.toFixed(2);
    }
});

function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload();
}
