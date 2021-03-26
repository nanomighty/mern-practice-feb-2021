const ProductController = require('../controllers/product.controller');

module.exports = (app) => {
    app.post("/api/products", ProductController.createAProduct);
    app.get("/api/products", ProductController.getAllProduct);
    app.get("/api/products/:_id", ProductController.getAProduct);
}