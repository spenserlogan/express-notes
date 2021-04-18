const fs = require('fs');
const express = require('express');
const path = require('path');
const uuid = require("uuid");
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


app.use(express.static(path.join(__dirname, 'public')));

app.get("/notes", (req, res) => res.sendFile(path.join(__dirname, "./public/notes.html")));

app.get("*", (req, res) => {return res.sendFile(path.join(__dirname, "./public/index.html"))});

//JSON.parse() Object.method() //JSON is a object library to handle json data
//res.json() is part of node meaning to send a response back to the client (or server) that is in format json (this doesn't convert, it only tags it as we need to send it as json)
// app.get("/api/notes", (req, res) => {
//   let savedNote = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
//   console.log(savedNote)
//   return res.json(savedNote)
// })


app.post("/api/notes", (req, res) => {
  let newNote = req.body;
  let savedNote = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
  let noteLength = uuid.v4();

  newNote.id = noteLength;

  savedNote.push(newNote);

  fs.writeFileSync("./db/db.json", JSON.stringify(savedNote));
  return res.json(savedNote);
})

app.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});