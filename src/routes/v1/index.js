const express = require('express');

const CityController = require('../../controllers/city-controller');
 const router = express.Router();

router.post('/city', CityController.create);
router.post('/cities', CityController.createAll);
router.delete('/city/:id', CityController.distroy);
router.get('/city/:id', CityController.get);
router.get('/cities', CityController.getAll);
router.patch('/city/:id', CityController.update);


module.exports =router;
 