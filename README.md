# REST API - Movie Finder

### A RESTful backend API that communicates with the OMDb movie database. This server allows users to search for movies by title and fetch detailed information about specific movies by their IMDB ID.

## Tech Stack
### Backend
- Node.js
- Express.js

### Dependencies
- Axios: making HTTP requests
- Dotenv: managing environment variables

### External API
- OMDB API (Open Movie Database): https://www.omdbapi.com/ 

## How to Run
1. Clone the repository
2. Install dependencies with `npm install`
3. Create a `.env` file and add your free OMDb API key: `OMDB_API_KEY=your_key_here`
4. Run the server with `npm start` or `npx nodemon`
5. Test API endpoints:
    * Search for movies by title: http://localhost:4000/api/search/?title=the+little+mermaid
    * Get Movie details by ID: http://localhost:4000/api/movies/tt27834173 

## Features
- Search endpoint (`GET /api/search?title=...`) - search for movies by title and get a list of results
- Details endpoint (`GET /api/movies/:id`) - fetch details about one movie by its IMDb ID
- Error handling for missing parameter or failed requests
- Secure API management with `.env` file for API keys
- Clean RESTful route structure with separated controllers and routes

## Learnings
- I learned how to make a scalable, organized backend structure by separating routes and controllers in an Express app, and was able to write clean code using axios to fetch data from external APIs, using parameters from the OMDb API to make proper requests
- Understanding the difference between `req.params` and `req.query` was challenging at first, but when testing the endpoints in Postman it was clear how they can be used for different use cases in this movie finder API, especially with how I set up the routes