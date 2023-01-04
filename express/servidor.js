var express = require("express");
var aplicacion = express();

aplicacion.get("/", inicio);

function inicio(peticion, resultado)
{
    resultado.send("Hola, perra")    
}

aplicacion.listen(8989);

