const jokeController = require("../controllers/jokes.controller");

module.exports = (app) => {
    
    // Export a function to get a single joke
    app.get("/api/jokes/:_id", jokeController.getAJoke);
    
    // Export a function to create a joke
    app.post("/api/jokes", jokeController.createAJoke);
    
    // Export a function to update a joke
    app.put("/api/jokes/:_id", jokeController.updateAJoke);
    
    // Export a function to delete a joke
    app.delete("/api/jokes/:_id", jokeController.deleteAJoke);

    // Export a function to get all jokes
    app.get("/api/jokes", jokeController.getAllJokes);
}