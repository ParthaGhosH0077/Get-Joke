# Joke Generator

This is a simple Joke Generator application built with React. It fetches programming jokes from the JokeAPI and displays them on the screen. Users can fetch new jokes by clicking the "New Joke" button.

## Features

- Fetches a random programming joke from the JokeAPI
- Displays loading text while fetching data
- Displays an error message if the API request fails
- Allows users to fetch a new joke by clicking the "New Joke" button

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v12 or higher)
- npm (v6 or higher)

### Installing

1. Clone the repository

   ```sh
   git clone https://github.com/yourusername/joke-generator.git
Change to the project directory

sh
Copy code
cd joke-generator
Install the dependencies

sh
Copy code
npm install --force
Running the Application
Start the development server

sh
Copy code
npm start
Open your browser and navigate to http://localhost:3000

Running Tests
Run the test suite

sh
Copy code
npm test
Project Structure
App.js: The main component that renders the joke and the "New Joke" button.
useFetch.js: Custom hook for fetching jokes from the API.
