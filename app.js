
// const express = require ('express');

// const bodyParser = require('body-parser')

// const app = express();

// const storeRoutes = require('./store.routes')

// app.use(bodyParser.urlencoded({ extended: true}));

// app.use(bodyParser.json());

// app.get('/', (req, res) => {
//     res.send('Hello World');
// });

// app.use('/store', storeRoutes);

// app.listen(3000, () => {
//     console.log('Server runs on port 3000');
// });

/* FETCH */

const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));

const url = 'https://fakestoreapi.com/products/1'

async function fetchData() {
    let response = await fetch(url);
    let data = await response.json();
    data = JSON.stringify(data);
    data = JSON.parse(data);
    return data;
}

let abc = await fetchData();
console.log(abc,"afuera");

/* TEST INSERT DATA TO DB FROM OBJECT*/

// const dataOne = {
//     "pname": "aguacate"
// }

// const Product = require('./store.models');

// var doneTheStuff;

// function whathever(){
//     if (!doneTheStuff) {
//         doneTheStuff = true;
//     try {  
//         createApi = function (res) {
//             const newProduct = new Product(dataOne);
//             if (dataOne === Object && Object.keys(dataOne).length === 0) {
//                res.status(400).send({ error: true, message: 'Please provide all required field'}); 
//             } else {
//                 Product.create(newProduct, (err, product) => {
//                     if (err) res.send(err);
//                     //res.json({ error: false, message: 'Product added successfully!', data: product });
//                 });
//             }
//         };
//         createApi()                  
//         } catch (ex) {
//             console.log('exception handle ++++', ex);
//         }
//     }
// }

// whathever();
