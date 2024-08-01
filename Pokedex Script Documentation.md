## Overview

This script powers a web page that displays information about Pokémon. It enables users to search for Pokémon by name or number, view detailed information, and navigate through Pokémon using previous and next buttons.

### Purpose

The main functionalities of the script include:
- Searching for a Pokémon by name or number.
- Displaying the Pokémon's name, number, and image.
- Navigating between Pokémon using navigation buttons.

### Key Components

#### HTML Element Selection

The script uses `document.querySelector` to select HTML elements by their class names and assigns them to constants for easier manipulation:

- **`pokemonName`**: Element that displays the Pokémon's name.
- **`pokemonNumber`**: Element that displays the Pokémon's number.
- **`pokemonImage`**: Element that displays the Pokémon's image.
- **`form`**: The search form element.
- **`input`**: The search input field.
- **`buttonPrev`**: Button to navigate to the previous Pokémon.
- **`buttonNext`**: Button to navigate to the next Pokémon.

#### State Management

- **`searchPokemon`**: A variable used to keep track of the current Pokémon being displayed.

#### Fetching Data

- **`fetchPokemon`**: An asynchronous function that takes a Pokémon name or number as an argument, fetches data from the PokéAPI, and returns the data in JSON format if the request is successful.

#### Rendering Data

- **`renderPokemon`**: An asynchronous function that updates the HTML elements with the data fetched by `fetchPokemon`.
  - Displays "Loading..." while fetching data.
  - Updates the Pokémon's name, number, and image if the data is successfully fetched.
  - Displays an error message if the Pokémon is not found.

#### Event Listeners

- **`form.addEventListener('submit')`**: Handles form submission, prevents the default action, and calls `renderPokemon` with the input value.
- **`buttonPrev.addEventListener('click')`**: Decrements the `searchPokemon` variable and calls `renderPokemon` to display the previous Pokémon.
- **`buttonNext.addEventListener('click')`**: Increments the `searchPokemon` variable and calls `renderPokemon` to display the next Pokémon.

### Functions and Event Handlers

#### `fetchPokemon(pokemon)`

- Fetches Pokémon data from the PokéAPI.
- Returns the data in JSON format if the request is successful.

#### `renderPokemon(pokemon)`

- Updates HTML elements with Pokémon data.
- Displays a loading message while fetching data.
- Shows the Pokémon's name, number, and image if found.
- Displays an error message if the Pokémon is not found.

#### `form.addEventListener('submit', (event))`

- Prevents default form submission.
- Calls `renderPokemon` with the input value.

#### `buttonPrev.addEventListener('click')`

- Decrements the current Pokémon number.
- Calls `renderPokemon` to display the previous Pokémon.

#### `buttonNext.addEventListener('click')`

- Increments the current Pokémon number.
- Calls `renderPokemon` to display the next Pokémon.

### Detailed Declarations

#### General Usage

- **`document.querySelector('.html__class')`**:
  - **`document`**: The root node representing the entire HTML document, serving as the entry point for interacting with the DOM (Document Object Model).
  - **`querySelector`**: A method used to find the first element that matches the specified CSS selector, allowing selection of elements using the same syntax as CSS selectors.
  - **`.html__class`**: The CSS class defined in the HTML document, indicated by a preceding dot (`.`) to denote a class selector.

---

This documentation provides a comprehensive understanding of the script's structure, functionality, and interactions. If you need further details or additional sections, feel free to ask!