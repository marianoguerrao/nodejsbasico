const express = require("express");
const app = express();
const { PORT } = require("./config");

require("./routes/api")(app);
require("./routes/views")(app);
/* require...views deberá estar al final porque dentro del documento se encuentra
la ruta '*' que el explorador tiene que leer hasta el final. Si ponemos el require de /api después ya no se leeran las rutas
establecidas en ese documento */

function init(){
    console.log("Iniciando instancia de Express...");
    app.listen(PORT, ()=>{
        console.log("El servidor Express esta activo.");
    });
}

init();