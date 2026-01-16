// DEPENDENCIES
// configure the dotenv file
const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
// instance of express
const app = express();
const axios = require("axios");
const port = 4000;

// import routes from movieRoutes files
const movieRoutes = require("./routes/movieRoutes.js");

// mount all the routes
app.use("/api", movieRoutes);

// LISTENER PORT
app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`)
});