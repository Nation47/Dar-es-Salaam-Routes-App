const express = require('express');
const router = express.Router();
const {createRoute, updateRoute, deleteRoute, getRoute, getRoutes} = require('../controller/routesController');


// get all routes
router.get('/', getRoutes);

// get a single Route
router.get('/:id', getRoute);

// create new route
router.post('/', createRoute);

// delete route
router.delete('/:id', deleteRoute);

// upadate a route
router.patch('/:id', updateRoute);

module.exports = router;