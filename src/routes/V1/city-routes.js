const express = require('express');

const {CityController} = require('../../controllers');
const {CityMiddlwares} = require('../../middlewares');

const router = express.Router();

// /api/v1/cities GET - Get all cities
router
    .get('/',
    CityController.getCities);

// /api/v1/cities POST - Create city
router
    .post('/', 
    CityMiddlwares.validateCreateRequest,
    CityController.createCity);

// /api/v1/cities/:id GET - Get city by ID
router
    .get('/:id',
    CityController.getCity);

// /api/v1/cities/:id DELETE - Delete city
router
    .delete('/:id', 
    CityController.destroyCity);

// /api/v1/cities/:id PATCH - Update city
router
    .patch('/:id', 
    CityController.updateCity);



module.exports = router; 