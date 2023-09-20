const express = require('express');
const mongoose = require('mongoose');
const route = require("./routes/route");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();
const options = {
    origin: '*'
}
app.use(cors(options));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://biplove:btu7sOoK97G7afSt@cluster0.jrwufpc.mongodb.net/SPIRALE?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("MongoDb is connected")).catch((err) => console.log(err))


app.use("/src/routes", route);

app.listen(process.env.PORT || 3000, function () {
    console.log("Express app running on port " + (process.env.PORT || 3000));
});