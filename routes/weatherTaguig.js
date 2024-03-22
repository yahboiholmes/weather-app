const express = require('express');
const routesT = express.Router();
const taguigData = require('../json/taguig.json');

routesT.get('/taguig', (req, res) => {
    res.send('Welcome to the Taguig Weather App!');
});

routesT.get('/taguig/weather', (req, res) => {
    res.status(200)
    res.end(JSON.stringify(taguigData,null,3))
});

routesT.get('/taguig/weather/:location', (req, res) => {
    const location = req.params.location;
    const weather = taguigData.find(item => item.location === location);

    if (!weather) {
        res.status(404).json({ message: "Data not found" });
    } else {
        res.status(200)
        res.end(JSON.stringify(weather,null,3))
    }
});

module.exports = routesT;
