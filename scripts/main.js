// Global variable to store characters
let globalCharacters = [];

// Code to call API
const url = "https://game-of-thrones1.p.rapidapi.com/Characters";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "bda6b00338msh94eabb671a68c73p1986a2jsn219bc3f4f88a",
    "X-RapidAPI-Host": "game-of-thrones1.p.rapidapi.com",
  },
};

async function fetchCharacters() {
  try {
    const response = await fetch(url, options);
    globalCharacters = await response.json();
    populateDropdown(globalCharacters);
  } catch (error) {
    console.error(error);
  }
}

function populateDropdown(characters) {
  const dropdown = document.getElementById("characterDropdown");
  characters.forEach((character) => {
    const option = document.createElement("option");
    option.value = character.id;
    option.textContent = character.fullName;
    dropdown.appendChild(option);
  });
}

function displayCharacterDetails(characterId) {
  const detailsDiv = document.getElementById("characterDetails");
  // Use the global variable globalCharacters
  const character = globalCharacters.find((c) => c.id == characterId);

  if (character) {
    detailsDiv.innerHTML = `
          <h3>${character.fullName}</h3>
          <p>Title: ${character.title}</p>
          <p>Family: ${character.family}</p>
          <img src="${character.imageUrl}" alt="${character.fullName}" style="width: 200px; height: auto;">
      `;
  } else {
    detailsDiv.innerHTML = "Character details not found.";
  }
}

document
  .getElementById("characterDropdown")
  .addEventListener("change", function () {
    displayCharacterDetails(this.value);
  });

window.onload = fetchCharacters;

window.onload = function () {
  if (typeof fetchCharacters === "function") {
    fetchCharacters();
  }

  document
    .getElementById("showStudentInfo")
    .addEventListener("click", function () {
      displayStudentInfo();
    });
};

function displayStudentInfo() {
  const studentInfoElement = document.getElementById("studentinfo");
  studentInfoElement.textContent = "Student ID: 200327450, Name: John Gu";
}
