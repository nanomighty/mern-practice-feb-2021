const Joke = require('../models/jokes.model');

// Export a function to get all jokes
module.exports = { 
    getAllJokes: (req, res) => {
    Joke.find({})
        .then((allJokeArray) => {
            console.log(allJokeArray);
            res.json(allJokeArray);
        })
        .catch((err) => res.json(err));
    },

// Export a function to get a single joke
    getAJoke : (req, res) => {
    Joke.findOne({_id: req.params._id})
        .then((singleJoke) => {
            console.log(singleJoke);
            res.json(singleJoke);
        })
        .catch((err) => res.json(err));
    },

// Export a function to create a joke
    createAJoke : (req, res) => {
    console.log(req.body);
    Joke.create(req.body)
        .then((newJokeObj) => {
            console.log(newJokeObj);
            res.json(newJokeObj);
        })
        .catch((err) => {
            console.log("in joke create");
            console.log(err);
            res.json({
                theErrObj: err,
                message: "There was an error"
            });
        });
    },

// Export a function to update a joke
    updateAJoke : (req, res) => {
        Joke.findOneAndUpdate({ _id: req.params._id }, req.body, { new: true, runValidators: true })
        .then((revisedJokeObj) => {
            res.json({joke : revisedJokeObj});
        })
        .catch((err) => res.json({
            message: 'Something went wrong',
            error: err
        }));
    },
// Export a function to delete a joke
    deleteAJoke: (req, res) => {
        Joke.deleteOne({ _id: req.params._id })
            .then(result => res.json({result: result}))
            .catch(err => res.json({
                message: 'something went wrong',
                error: err
            }));
    },
}

