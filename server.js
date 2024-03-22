const express = require('express');
const weatherRoutesM = require('./routes/weatherMakati'); 
const weatherRoutesT = require('./routes/weatherTaguig');
const port = 6969;
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Mounting the weather routes for Makati and Taguig
app.use('/', weatherRoutesM);
app.use('/', weatherRoutesT);

// Start server
app.listen(port, () => {
    console.log(`The server is available at http://localhost:${port}`);
});
