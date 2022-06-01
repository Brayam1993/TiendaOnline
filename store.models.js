const dbConn = require('./mysql_config');

const Product = function (product) {
    this.id = product.id;
    this.title = product.title;
    this.price = product.price;
    this.description = product.description;
    this.category = product.category;
    this.image = product.image;
    this.rating = product.rating;
};

Product.create = function (newProduct, result) {
    dbConn.query('INSERT INTO products set ?', newProduct, (err, res) => {
        if (err) {
            console.log('error:', err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

Product.findAll = function (result) {
    dbConn.query('Select * from products', (err, res) => {
        if (err) {
            console.log('error:', err);
            result(null, err);
        } else {
            console.log('products :', res);
            result(null, res);
        }
    });
};

Product.findById = function (id, result) {
    dbConn.query('Select * from products where id = ?', id, (err, res) => {
        if (err) {
            console.log('error: ', err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};

Product.update = function (id, product, result) {
    dbConn.query('UPDATE products SET title=?,price=?,description=?,category=?,image=?,rating=? WHERE id = ?', [product.title,product.price,product.description,product.category,product.image,product.rating, id], (err, res) => {
        if (err) {
            console.log('error:', err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

Product.delete = function (id, result) {
    dbConn.query('DELETE FROM products WHERE id = ?', [id], (err, res) => {
        if (err) {
            console.log('error:', err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

module.exports = Product;
