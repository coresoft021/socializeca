

const express = require('express');
const path = require('path');
const body_parser_1 = require("body-parser");
const public_1 = require("./routes/public");
var cors = require('cors');
const app = express();

app.use(cors());
app.use(body_parser_1.json());
app.use(body_parser_1.urlencoded({ extended: true }));

app.use("/api/public", public_1.publicRouter);


// Serve only the static files form the dist directory
app.use(express.static(__dirname , './dist/heroku-app-angular'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname,'./dist/heroku-app-angular/index.html'));
});

 app.get('/api', function (req, res) {
    res.send('Hello World, How are you!');
 });

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);


