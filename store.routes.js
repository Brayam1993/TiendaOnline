const express = require('express');
const validations = require('./validations');
const isAdminMiddleware = require('./middleware/isAdmin');

const router = express.Router();
const storeController = require('./store.controller');

router.post('/',isAdminMiddleware,validations.validate(validations.createProductValidation),storeController.create);

router.get('/', storeController.findAll);

router.get('/:id', storeController.findById);

router.put('/:id', storeController.update); 

router.delete('/:id', storeController.delete);

module.exports = router;
