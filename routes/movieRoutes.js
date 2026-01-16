const express = require('express');
// crate express router
const router = express.Router();

// import controller functions
const controller = require("../controllers/movieController.js");

// set up routes with controller functions
router.get("/search")
router.get("/movies/:id")

module.exports = router;