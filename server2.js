const express = require('express');
const uuid = require("uuid");
const app = express();
const PORT = process.env.PORT || 3000;
const path = require("path");

const public = __dirname + "/public";
console.log(public)
app.use(express.static(public));

app.use(express.json())

app.use(express.urlencoded({extended:true}))



app.use("/", require("./htmlRoutes.js"))


app.listen(PORT, () => console.log("HELLO?"))