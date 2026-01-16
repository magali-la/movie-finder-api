// Dependencies
const axios = require("axios");

// set up callback functions to actually get the data

// callback to get the search term from the query parameter - async function since we're using axios await to fetch from the API
const searchMovies = async (req, res) => {
    // The user is going to submit a search term if they're searching for movie titles. In the OMDb the query is just ?t=the+movie+name / in this API, it will be fully spelled out. The search term from the user that shows up in the URL after the ? is going to be the query parameter 'title'. extract the user's search term taken from the URL into a variable
    const title = req.query.title;

    // Validate that there is a query parameter for title to handle the actual get request or throw an error if it's missing
    if (!title) {
        return res.status(400).json({ error: "Title query parameter is required to run this request" })
    } 

    // use axios to make a GET request to the OMDb API, make sure the request has the parameters from OMDb + the API key in the .env file - use a try catch for async/await functions
    try {
        // this is going to bte the base but define the parameters from OMDB for a search
        const response = await axios.get("http://www.omdbapi.com/", {
            params: {
                s: title,
                apikey: process.env.OMDB_API_KEY
            }
        })

        // take the response to the client as JSON data
        res.json(response.data);
    } catch (error) {
        // handle the errors by logging and give error code
        console.error("OMDb API error:", error.message);
        res.status(500).json({ error: "Error fetching movie from OMDb"});
    }
};

// export the functions for use in movieRoutes
module.exports = { searchMovies };