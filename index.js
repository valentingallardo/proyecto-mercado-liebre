const express = require("express");
const path = require("path");
const app = express();

app.listen(process.env.PORT || 300, () => {
    console.log("Servidor corriendo en el puerto 3000");
})

app.use(express.static('public'));

app.get("/", function(req, res){
    let htmlPath = path.join(__dirname, "/views/home.html");
    res.sendFile(htmlPath);
})

app.get("/crear-tu-cuenta", function(req, res){
    let htmlPath = path.join(__dirname, "/views/register.html");
    res.sendFile(htmlPath);
})