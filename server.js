const express = require("express");

const app = express(); //express as

const PORT = process.env.PORT || 3000; //USAR PUERTO ENCONTRADO, O SINO EL PUERTO 3000

app.listen(PORT, console.log("server online"));
