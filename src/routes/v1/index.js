const express = require('express');

const { FlightMiddlewares } =require('../../middlewares/index')

const CityController = require('../../controllers/city-controller');
const FlightController = require('../../controllers/flight-controller');
const AirportController = require('../../controllers/airport-controller');
 const router = express.Router();

router.post('/city', CityController.create);
router.post('/cities', CityController.createAll);
router.delete('/city/:id', CityController.distroy);
router.get('/city/:id', CityController.get);
router.get('/cities', CityController.getAll);
router.patch('/city/:id', CityController.update);

// flight
router.post('/flights',
                FlightMiddlewares.validateCreateFlight ,
                FlightController.create
            );
router.get('/flights', FlightController.getAll);

//Airport

router.post('/airports' , AirportController.create);



module.exports =router;
 