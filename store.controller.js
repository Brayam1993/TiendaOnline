const Product = require('./store.models');

exports.create = function (req, res) {
    const newProduct = new Product(req.body);

    try {

    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
       res.status(400).send({ error: true, message: 'Please provide all required field'}); 
    } else {
        Product.create(newProduct, (err, product) => {
            if (err) res.send(err);
            res.json({ error: false, message: 'Product added successfully!', data: product });
        });
    }

     } catch (ex) {
        console.log('exception handle ++++', ex);
     }
};

exports.findAll = function (req, res) {
    Product.findAll((err, product) => {
        console.log('controller');
        try {
            if (err) res.send(err);
        console.log('res', product);
        res.send(product);
        } catch (ex) {
            console.log('exception handle ++++', ex);
        }
        
    });
};

exports.findById = function (req, res) {
    Product.findById(req.params.id, (err, product) => {
        try {
            if (err) res.send(err);
        res.json(product);
        } catch (ex) {
            console.log('exception handle ++++', ex);
        }
    });
};

exports.update = function (req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Agrega un pruducto nuevo'});
    } else {
        Product.update(req.params.id, new Product(req.body), (err) => {
            if (err) res.send(err);
            res.json({ error: false, message: 'Producto agregado'});
        });
    }
};

exports.delete = function (req, res) {
    Product.delete(req.params.id, (err) => {
        try {
            if (err) res.send(err);
        res.json({ error: false, message: 'Producto borrado'});
        } catch (ex) {
          console.log('exception handle ++++', ex);
        }
    });
};
