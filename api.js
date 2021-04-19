const express = require("express")
const router = express.Router();
const fs = require("fs")
const uuid = require("uuid")
router.get("/api/notes", (req,res) => {
    return res.json([]);
})

router.post("/api/notes", (req,res)=> {

        let newNote = req.body;
        //let savedNote = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
        //let noteLength = uuid.v4();
      
        //newNote.id = noteLength;
      
        //savedNote.push(newNote);
      
        //fs.writeFileSync("./db/db.json", JSON.stringify(savedNote));


    return res.json({"title":"title", "text":"title"});
})


module.exports = router;