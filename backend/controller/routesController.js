const Route = require('../Models/routeModel');
const mongoose = require('mongoose')

// to create route
const createRoute = async (req, res) => {
    const {from, to, stops, fare, distance,estimated_time_min} = req.body

    try{
        const route = await Route.create({from, to, stops, fare, distance,estimated_time_min})
        res.status(200).json(route)
    } catch(error){
        res.status(400).json({error: error.message})
    }
}

// to get get all routes
const getRoutes = async (req, res) => {
    const routes = await Route.find({})
    res.status(200).json(routes)
}

// to get single route
const getRoute = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such Route'})
    }

    const route = await Route.findById(id);

    if(!route) {
        return res.status(404).json({error: 'No such Route'})
    }

    res.status(200).json(route);
}

// to delete route
const deleteRoute = async (req, res) => {
    const {id} = req.params

    // to validate id 
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Invalid Email'})
    }

    const route = await Route.findByIdAndDelete({_id: id})

    if(!route) {
        return res.status(404).json({error: 'No such Route'})
    }

    res.status(200).json(route);
}

// to update routes
const updateRoute = async (req, res) => {
    const {id} = req.params

    // to validate id 
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Invalid Email'})
    }

    const route = await Route.findByIdAndUpdate({_id: id}, {
        ...req.body
    });

    if(!route) {
        return res.status(404).json({error: 'No such Route'})
    }

    res.status(200).json(route);
}
module.exports = {createRoute, getRoute, getRoutes, updateRoute, deleteRoute} 