const express = require('express');

const router = express.Router();
const storeController = require('./store.controller');

router.post('/', storeController.create);

router.get('/', storeController.findAll);

router.get('/:id', storeController.findById);

router.put('/:id', storeController.update); 

router.delete('/:id', storeController.delete);

module.exports = router;
