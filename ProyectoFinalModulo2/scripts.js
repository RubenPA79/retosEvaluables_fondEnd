const movies = [];
const professionals = [];

function openForm() {
  document.getElementById('movieForm').style.display = 'flex';
}

function closeForm() {
  document.getElementById('movieForm').style.display = 'none';
}

function displayMovies() {
  const movieSection = document.getElementById("movie-list");
  if (movieSection) {
    movieSection.innerHTML = "";
    movies.forEach((movie) => {
      const div = document.createElement("div");
      div.className = "movie-item";
      div.innerHTML = `
        <h3>${movie.title}</h3>
        <p><strong>Año:</strong> ${movie.releaseYear}</p>
        <p><strong>Género:</strong> ${movie.genre}</p>
        ${movie.image ? `<img src="${movie.image}" alt="Póster de ${movie.title}" style="max-width:100%; border-radius: 5px;">` : ""}
      `;
      movieSection.appendChild(div);
    });
  }
}

function addMovieFromForm(event) {
  event.preventDefault();

  const title = document.getElementById("title").value;
  const releaseYear = document.getElementById("releaseYear").value;
  const genre = document.getElementById("genre").value;
  const imageInput = document.getElementById("poster");

  let image = "";
  if (imageInput.files && imageInput.files[0]) {
    const reader = new FileReader();
    reader.onload = function(e) {
      image = e.target.result;
      const newMovie = { title, releaseYear, genre, image };
      movies.push(newMovie);
      displayMovies();
      closeForm();
    };
    reader.readAsDataURL(imageInput.files[0]);
  } else {
    const newMovie = { title, releaseYear, genre, image };
    movies.push(newMovie);
    displayMovies();
    closeForm();
  }
}