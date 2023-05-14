const express = require("express");

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello");
});

app.get('/about', (req, res) => {
    res.send("About");
});

module.exports = app;
