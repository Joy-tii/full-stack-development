let userInput = document.querySelector(".container .search-box input");
let infoBox = document.querySelector(".container .info-box");

userInput.addEventListener("keyup", (e) => {
    if (userInput.value.trim() !== '' && e.key === "Enter") {
        getData(userInput.value);
    }
});

let getData = (username) => {
    let url = `https://api.github.com/users/${username}`;
    
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            if (!data.message) {  // If user exists
                const dateData = data.created_at.slice(0, 10);

                const twitter = data.twitter_username ? data.twitter_username : "No X";
                const website = data.blog ? `<a href="${data.blog}" target="_blank">${data.blog}</a>` : "No Website";
                const company = data.company ? data.company : "No Company";
                const location = data.location ? data.location : "No Location";
                const bio = data.bio ? data.bio : "No bio";

                infoBox.innerHTML = `<div class="user-details">
                    <div class="img-box">
                        <img src="${data.avatar_url}" alt="GitHub User Avatar">
                    </div>
                    <div class="details">
                        <h3 class="name">${data.name ? data.name : "No Name"}</h3>
                        <h3 class="username">@${data.login}</h3>
                        <span class="join-date">Joined: ${dateData}</span>
                    </div>

                    <p class="bio">${bio}</p>
                    <div class="user-profile">
                        <div class="repos">
                            <h2>${data.public_repos}</h2>
                            <span>Repos</span>
                        </div>
                        <div class="followers">
                            <h2>${data.followers}</h2>
                            <span>Followers</span>
                        </div>
                        <div class="following">
                            <h2>${data.following}</h2>
                            <span>Following</span>
                        </div>
                    </div>

                    <div class="user-other-details">
                        <p><i class="fa-solid fa-building"></i> ${company}</p>
                        <p><i class="fa-solid fa-location-pin"></i> ${location}</p>
                        <p><i class="fa-solid fa-link"></i> ${website}</p>
                        <p><i class="fa-brands fa-x-twitter"></i> ${twitter}</p>
                    </div>
                </div>`;
            } else {
                infoBox.innerHTML = `<p style="color: red; text-align: center;">User not found!</p>`;
            }
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
};

// Test with a default username
getData("github");
