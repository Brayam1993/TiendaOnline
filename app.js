
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
const Product = require('./store.models');

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

function start() {
  return fetchData();
}

 (async() => {
  console.log('before start');

  let dataOne = await start();
  
  var doneTheStuff;

function whathever(){
    if (!doneTheStuff) {
        doneTheStuff = true;
    try {  
        createApi = function (res) {
            const newProduct = new Product(dataOne);
            if (dataOne === Object && Object.keys(dataOne).length === 0) {
               res.status(400).send({ error: true, message: 'Please provide all required field'}); 
            } else {
                Product.create(newProduct, (err, product) => {
                    if (err) console.log(err);
                    //res.json({ error: false, message: 'Product added successfully!', data: product });
                });
            }
        };
        createApi()                  
        } catch (ex) {
            console.log('exception handle ++++', ex);
        }
    }
}

whathever();

})();

/* TEST INSERT DATA TO DB FROM OBJECT*/

// const dataOne = {
//   id: 1,
//   title: 'Francon - Foldsack No. 1 Backpack, Fits 15 Laptops',
//   price: 108.95,
//   description: 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
//   category: "men's clothing",
//   image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
//   rating: { rate: 3.9, count: 120 }
// }



