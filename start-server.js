//Install express server

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const body_parser_1 = require("body-parser");

const cdb_1 = require("./server/routes/cdb");

var cors = require('cors');
const app = express();
const path = require('path');

app.use(cors());
app.use(body_parser_1.json());
app.use(body_parser_1.urlencoded({ extended: true }));

app.use("/api/cdb", public_1.cdbRouter);

app.use(express.static(__dirname + '/dist/heroku-app-angular'));
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/heroku-app-angular/index.html'));
});
app.get('/api', function (req, res) {
    res.send('Hello World, How are you!');
});


app.listen(process.env.PORT || 8081);
