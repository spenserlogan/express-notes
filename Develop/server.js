const fs = require('fs');
const express = require('express');
const http = reqiore('http');
const path = ('path');
const db = require('./db/db.json');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, './public/index.html')));
app.get('/notes', (req, res) => res.sendFile(path.join(_dirname, './public/notes.html')));

app.post('/api.notes', function (req, res) {
    fs.readFile('/db/db.json', 'utf8', function (error, notes) {
        if (error) {
          return console.log(error)
        }
        notes = JSON.parse(notes)

        var id = notes[notes.length - 1].id + 1
    var newNote = { title: req.body.title, text: req.body.text, id: id }
    var activeNote = notes.concat(newNote)

    fs.writeFile('/db/db.json', JSON.stringify(activeNote), function (error, data) {
      if (error) {
        return error
      }
      console.log(activeNote)
      res.json(activeNote);
    })
  })
})

app.get("/api/notes", function (req, res) {
    fs.readFile('/db/db.json', 'utf8', function (error, data) {
      if (error) {
        return console.log(error)
      }
      console.log("These are notes", data)
      res.json(JSON.parse(data))
    })
});


server.listen(PORT, () => {
    console.log(`Server listening on: http://localhost:${PORT}`);
  });