const Product = require('../models/product.model');

// Export a function to create a Product
module.exports = {
    createAProduct: (req, res) => {
        Product.create(req.body)
            .then((newProductObj) => {
                res.json(newProductObj);
            })
            .catch((err) => {
                console.log("in product create");
                res.json({
                    theErrObj: err,
                    message: "There was an error"
                });
            });
    }
}