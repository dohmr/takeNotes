const express = require("express");
const fs = require("fs");
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3060;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));

//post a note.
//save the note
//edit a note
//delete a note
//write files
//read file
//send file
//create routes
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"));
  });

  app.get("/notes.html", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
  });





app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});  