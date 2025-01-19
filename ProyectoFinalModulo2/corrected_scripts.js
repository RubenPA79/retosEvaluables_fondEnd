
class Professional {
    constructor(name, age, weight, height, isRetired, nationality, oscarsNumber, profession, photoString = "default_photo.jpg") {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
        this.photoString = photoString;
        this.movies = [];
    }
}

class Movie {
    constructor(title, releaseYear, nationality, genre, actors, director, writer, language, platform, isMCU, mainCharacterName, producer, distributor, photoString = "default_poster.jpg") {
        this.title = title;
        this.releaseYear = releaseYear;
        this.nationality = nationality;
        this.genre = genre;
        this.actors = actors;
        this.director = director;
        this.writer = writer;
        this.language = language;
        this.platform = platform;
        this.isMCU = isMCU;
        this.mainCharacterName = mainCharacterName;
        this.producer = producer;
        this.distributor = distributor;
        this.photoString = photoString;
    }
}

// Initialize data storage
let professionals = JSON.parse(localStorage.getItem("professionals")) || [];
let movies = JSON.parse(localStorage.getItem("movies")) || [];

function saveDataToLocalStorage() {
    localStorage.setItem("professionals", JSON.stringify(professionals));
    localStorage.setItem("movies", JSON.stringify(movies));
}

// Populate dropdown with professionals
function populateProfessionalDropdown() {
    const professionalDropdown = document.getElementById("professional");
    professionalDropdown.innerHTML = "<option value='' disabled selected>Selecciona un profesional</option>";
    professionals.forEach((professional, index) => {
        const option = document.createElement("option");
        option.value = index;
        option.textContent = `${professional.name} - ${professional.profession}`;
        professionalDropdown.appendChild(option);
    });
    if (professionalDropdown) {
        professionalDropdown.innerHTML = "";
        professionals.forEach((professional, index) => {
            const option = document.createElement("option");
            option.value = index;
            option.textContent = professional.name;
            professionalDropdown.appendChild(option);
        });
    }
}

// Display movies on the main page
function displayMovies() {
    const movieSection = document.getElementById("movie-list");
    if (movieSection) {
        movieSection.innerHTML = "";
        movies.forEach((movie, index) => {
            const div = document.createElement("div");
            div.className = "movie-item";
            div.innerHTML = `
                <h3>${movie.title}</h3>
                <p><strong>Año:</strong> ${movie.releaseYear}</p>
                <p><strong>Género:</strong> ${movie.genre}</p>
                <img src="${movie.photoString}" alt="${movie.title}" style="max-width:100%; border-radius: 5px;">
                <button onclick="removeMovie(${index})" class="remove-button">Eliminar Película</button>
            `;
            movieSection.appendChild(div);
        });
    }
}

// Display professionals on the professional page
function displayProfessionals() {
    const professionalSection = document.getElementById("professional-list");
    if (professionalSection) {
        professionalSection.innerHTML = "";
        professionals.forEach((professional, index) => {
            const div = document.createElement("div");
            div.className = "professional-item";
            div.innerHTML = `
                <h3>${professional.name}</h3>
                <p><strong>Edad:</strong> ${professional.age}</p>
                <p><strong>Profesión:</strong> ${professional.profession}</p>
                <img src="${professional.photoString}" alt="${professional.name}" style="max-width:100%; border-radius: 5px;">
                <button onclick="removeProfessional(${index})" class="remove-button">Eliminar Profesional</button>
            `;
            professionalSection.appendChild(div);
        });
    }
}

// Add movie from form
function addMovieFromForm(event) {
    event.preventDefault();
    const title = document.getElementById("title").value.trim();
    const releaseYear = document.getElementById("releaseYear").value.trim();
    const genre = document.getElementById("genre").value.trim();
    const professionalIndex = parseInt(document.getElementById("professional").value, 10);

    if (!title || !releaseYear || !genre || isNaN(professionalIndex)) {
        alert("Completa todos los campos.");
        return;
    }

    const newMovie = new Movie(title, releaseYear, "N/A", genre, [], professionals[professionalIndex], null, "N/A", "N/A", false, "N/A", "N/A", "N/A");
    movies.push(newMovie);
    saveDataToLocalStorage();
    displayMovies();
    closeForm();
}

// Add professional from form
function addProfessionalFromForm(event) {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const age = parseInt(document.getElementById("age").value, 10);
    const profession = document.getElementById("profession").value.trim();

    if (!name || !age || !profession) {
        alert("Completa todos los campos.");
        return;
    }

    const newProfessional = new Professional(name, age, 0, 0, false, "N/A", 0, profession);
    professionals.push(newProfessional);
    saveDataToLocalStorage();
    populateProfessionalDropdown();
    displayProfessionals();
    document.getElementById("add-professional").reset();
}
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const age = parseInt(document.getElementById("age").value, 10);
    const profession = document.getElementById("profession").value.trim();

    if (!name || !age || !profession) {
        alert("Completa todos los campos.");
        return;
    }

    const newProfessional = new Professional(name, age, 0, 0, false, "N/A", 0, profession);
    professionals.push(newProfessional);
    saveDataToLocalStorage();
    populateProfessionalDropdown();
    displayProfessionals();
    closeProfessionalForm();
}

// Remove movie
function removeMovie(index) {
    movies.splice(index, 1);
    saveDataToLocalStorage();
    displayMovies();
}

// Remove professional and associated movies
function removeProfessional(index) {
    const professional = professionals[index];
    movies = movies.filter(movie => movie.director !== professional && movie.writer !== professional);
    professionals.splice(index, 1);
    saveDataToLocalStorage();
    displayMovies();
    displayProfessionals();
}

// Form handling functions
function openForm() {
    document.getElementById("movieForm").style.display = "flex";
}

function closeForm() {
    document.getElementById("movieForm").style.display = "none";
}

function openProfessionalForm() {
    document.getElementById("professionalForm").style.display = "flex";
}

function closeProfessionalForm() {
    document.getElementById("professionalForm").style.display = "none";
}

// Initialize data
populateProfessionalDropdown();
displayMovies();
displayProfessionals();
