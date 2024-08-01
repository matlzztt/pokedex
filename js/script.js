// Select the HTML elements by their class names for easier manipulation.
const pokemonName = document.querySelector('.pokemon__name'); // Element to display the Pokémon's name.
const pokemonNumber = document.querySelector('.pokemon__number'); // Element to display the Pokémon's number.
const pokemonImage = document.querySelector('.pokemon__image'); // Element to display the Pokémon's image.

const form = document.querySelector('.form'); // The search form element.
const input = document.querySelector('.input__search'); // The search input field.
const buttonPrev = document.querySelector('.btn-prev'); // Button to navigate to the previous Pokémon.
const buttonNext = document.querySelector('.btn-next'); // Button to navigate to the next Pokémon.

// Initialize the search with the first Pokémon.
let searchPokemon = 1;

// Asynchronous function to fetch Pokémon data from the PokéAPI.
const fetchPokemon = async (pokemon) => {
  // Fetch the Pokémon data from the API using the provided name or number.
  const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

  // If the request is successful, parse the JSON data and return it.
  if (APIResponse.status === 200) {
    const data = await APIResponse.json();
    return data;
  }
}

// Asynchronous function to render the Pokémon data in the HTML elements.
const renderPokemon = async (pokemon) => {

  // Display a loading message while fetching data.
  pokemonName.innerHTML = 'Loading...';
  pokemonNumber.innerHTML = '';

  // Fetch the Pokémon data.
  const data = await fetchPokemon(pokemon);

  // If the data is successfully fetched, update the HTML elements with the Pokémon's details.
  if (data) {
    pokemonImage.style.display = 'block'; // Show the Pokémon image.
    pokemonName.innerHTML = data.name; // Set the Pokémon's name.
    pokemonNumber.innerHTML = data.id; // Set the Pokémon's number.
    pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']; // Set the Pokémon's image source.
    input.value = ''; // Clear the input field.
    searchPokemon = data.id; // Update the current Pokémon number.
  } else {
    // If the Pokémon is not found, display an error message and hide the image.
    pokemonImage.style.display = 'none';
    pokemonName.innerHTML = 'Not found :c';
    pokemonNumber.innerHTML = '';
  }
}

// Event listener for form submission to handle Pokémon search.
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the default form submission behavior.
  renderPokemon(input.value.toLowerCase()); // Render the Pokémon based on the input value.
});

// Event listener for the previous button to navigate to the previous Pokémon.
buttonPrev.addEventListener('click', () => {
  if (searchPokemon > 1) { // Ensure the current Pokémon number is greater than 1.
    searchPokemon -= 1; // Decrement the current Pokémon number.
    renderPokemon(searchPokemon); // Render the previous Pokémon.
  }
});

// Event listener for the next button to navigate to the next Pokémon.
buttonNext.addEventListener('click', () => {
  searchPokemon += 1; // Increment the current Pokémon number.
  renderPokemon(searchPokemon); // Render the next Pokémon.
});

// Initial render of the first Pokémon when the page loads.
renderPokemon(searchPokemon);
