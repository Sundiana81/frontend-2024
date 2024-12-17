// script.js
document.getElementById('fetch-button').addEventListener('click', fetchCharacter);

function fetchCharacter() {
  const characterId = document.getElementById('character-id').value;

  if (!characterId) {
    alert('Please enter a valid character ID!');
    return;
  }

  // Fetch data from Rick and Morty API
  const url = `https://rickandmortyapi.com/api/character/${characterId}`;
  
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Character not found');
      }
      return response.json();
    })
    .then(data => displayCharacter(data))
    .catch(error => {
      console.error(error);
      document.getElementById('character').innerHTML = '<p>Character not found!</p>';
    });
}

function displayCharacter(character) {
  const characterDiv = document.getElementById('character');
  characterDiv.innerHTML = `
    <img src="${character.image}" alt="${character.name}">
    <p><strong>Name:</strong> ${character.name}</p>
    <p><strong>Status:</strong> ${character.status}</p>
    <p><strong>Origin:</strong> ${character.origin.name}</p>
  `;
}
