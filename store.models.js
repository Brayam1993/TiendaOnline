const dbConn = require('./mysql_config');

const Product = function (product) {
    this.pname = product.pname;
    this.created_at = new Date();
    this.updated_at = new Date();
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

module.exports = Product;
