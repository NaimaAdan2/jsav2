const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Set up express server
const app = express();
// Use middleware to allow for json + form requests
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));

// Set static folder
app.use(express.static('public'))
app.use(express.static('src'))
app.use(express.static('build'))
app.use(express.static('lib'))


const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));