
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
