const express = require('express');
// crate express router
const router = express.Router();

// import controller functions
const movieController = require("../controllers/movieController.js");

// set up routes with controller functions
router.get("/search", movieController.searchMovies)
router.get("/movies/:id", movieController.getMovieDetails)
// test the id with this: tt27834173 - the little mermaid 2023

module.exports = router;