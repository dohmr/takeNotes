const express = require("express");
const fs = require("fs");
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3060;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
//create initial routes
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
});
//write files//send file//save the note//api route
app.get("/api/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./db/db.json"))
});

app.get("/api/notes/:id", (req, res) => {
    const savedNotes = json.parse(fs.readFileSync("./db/db.json", "utf8"));
    res.json(savedNotes[Number(req.params.id)]);
});
//important last route?
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});
//send body to api json . with id
app.post("/api/notes", (req, res) => {
    const savedNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    const id = (savedNotes.length).toString();
    const addNote = req.body;
    addNote.id = id;
    savedNotes.push(addNote);
    //write file to api
    fs.writeFileSync("./db/db.json", JSON.stringify(savedNotes));
    // console.log("File written");
    res.json(savedNotes);
});
//use param id. use let to allow variable to change.
app.delete("/api/notes/:id", function(req, res) {
    let savedNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    const id = req.params.id;
    let newID = 0;
    // console.log(`Deleting ${id}`);
    savedNotes = savedNotes.filter(notes => {
        return notes.id != id;
    })    
    for (notes of savedNotes) {
        notes.id = newID.toString();
        newID++;
    }
    fs.writeFileSync("./db/db.json", JSON.stringify(savedNotes));
    res.json(savedNotes);
});


app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});  