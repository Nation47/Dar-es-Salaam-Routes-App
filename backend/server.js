require('dotenv').config()
const express = require('express');
const cityRoutes = require('./routes/routesRoutes');
const mongoose = require('mongoose');

const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next()
});


// API settings 
app.use('/api/routes', cityRoutes);

// connecting to DB
mongoose.connect(process.env.MONGO)
    .then(
            app.listen(process.env.PORT, () => {
            console.log('Connected to DB & Listening on port',process.env.PORT)
        })
    )
    .catch((error) => {
        console.log(error)
    })


