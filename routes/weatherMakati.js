const express = require('express');
const routes = express.Router();
const makatiData = require('../json/makati.json');

routes.get('/makati', (req, res) => {
    res.send('Welcome to the Makati Weather App!');
});

routes.get('/makati/weather', (req, res) => {
    res.status(200)
    res.end(JSON.stringify(makatiData,null,3))
});

routes.get('/makati/weather/:location', (req, res) => {
    const location = req.params.location;
    const weather = makatiData.find(item => item.location === location);

    if (!weather) {
        res.status(404).json({ message: "Data not found" });
    } else {
        res.status(200);
        res.end(JSON.stringify(weather,null,3)) 
    }
});

module.exports = routes;
