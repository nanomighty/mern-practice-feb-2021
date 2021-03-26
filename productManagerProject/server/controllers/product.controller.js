const Product = require('../models/product.model');

// Export a function to create a Product
module.exports = {
    createAProduct: (req, res) => {
        const {title, price, description} = req.body;
        Product.create({
            title,
            price,
            description
        })
            .then((newProduct) => {
                res.json(newProduct);
            })
            .catch((err) => {
                    res.json(err);
                });
    },

    getAllProduct: (req, res) => {
        Product.find({})
            .sort({title: "ascending"})
            .then(products => res.json(products))
            .catch(err => res.json(err))
    },

    getAProduct: (req, res) => {
        Product.findOne({_id: req.params._id})
            .then(product => res.json(product))
            .catch(err => res.json(err))
    }

}
