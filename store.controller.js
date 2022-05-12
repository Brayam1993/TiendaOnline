const Product = require('./store.models');

exports.create = function (req, res) {
    const newProduct = new Product(req.body);

    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
       res.status(400).send({ error: true, message: 'Please provide all required field'}); 
    } else {
        Product.create(newProduct, (err, product) => {
            if (err) res.send(err);
            res.json({ error: false, message: 'Product added successfully!', data: product });
        });
    }
};