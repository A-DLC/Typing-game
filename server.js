const express = require("express");

const app = express(); //express as

const PORT = process.env.PORT || 3000; //USAR PUERTO ENCONTRADO, O SINO EL PUERTO 3000

app.set("view engine", "ejs");

//home route
app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, console.log("server online"));
