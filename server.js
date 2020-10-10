const express = require("express");
const fs = require("fs");
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3060;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});  