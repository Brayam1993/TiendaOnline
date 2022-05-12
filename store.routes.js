const express = require('express');

const router = express.Router();
const storeController = require('./store.controller');

router.post('/', storeController.create);

module.exports = router;