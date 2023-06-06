const form = document.getElementById("search-form");
const input = document.getElementById("search-input");
const searchButton = document.querySelector("button");
const movieDetail = document.getElementById("movie-details");

const apiKey = "560465a9";

const movieSearch = async () => {
  try {
    const title = input.value;
    
    if (title.trim().length < 3) {
      movieDetail.innerHTML = "<p>Please enter at least 3 characters. 🙏</p>";
      movieDetail.style.backgroundColor = "#222";
      return; 
    }
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${apiKey}&t=${title}`
    );
    const data = await response.json();

    if (data.Response === "False") {
      movieDetail.innerHTML = "<p>This movie doesn't exist. 😭</p>";
      movieDetail.style.backgroundColor = "#222";
    } else {
      movieDetail.style.backgroundColor = "#222";
      movieDetail.innerHTML = `<h2>Movie: ${data.Title}</h2>
        <h3>Country: ${data.Country}</h3>
        <p>Released: ${data.Year}</p>
        <p>Genre: ${data.Genre}</p>
        <p>Director: ${data.Director}</p>
        <p>Plot: ${data.Plot}</p>
        <span>IMDB: ${data.imdbRating}</span>`;
    }
  } catch (err) {
    console.log(err);
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  movieSearch();
});

searchButton.addEventListener("click", () => {
  movieSearch();
});
