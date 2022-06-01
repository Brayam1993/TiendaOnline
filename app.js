
const express = require ('express');

const bodyParser = require('body-parser')

const app = express();

const storeRoutes = require('./store.routes')

app.use(bodyParser.urlencoded({ extended: true}));

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/store', storeRoutes);

app.listen(3000, () => {
    console.log('Server runs on port 3000');
});

/* FETCH */
const Product = require('./store.models');

const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));

const url = 'https://fakestoreapi.com/products'

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

        for (var i = 0; i < dataOne.length; i++) {

    try {  
        createApi = function (res) {
            const newProduct = new Product(dataOne[i]);
            if (dataOne === Object && Object.keys(dataOne).length === 0) {
               res.status(400).send({ error: true, message: 'Please provide all required field'}); 
            } else {
                Product.create(newProduct, (err, product) => {
                    if (err) console.log(err);
                });
            }
        };
        createApi()                  
        } catch (ex) {
            console.log('exception handle ++++', ex);
        }
    }    
    }
}

whathever();
console.log('after start');
})();
