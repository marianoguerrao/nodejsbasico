const express = require ('express')// se importa express a este documento
const app = express()// se crea una instacia del servicio de express
const port = 3000

app.get('/', (req, res) => {
  res.send('Bienvenido al home!')
})

app.get('/info', (req, res) => {
  res.send('Información de la app')
})

app.get('*', (req, res) => {
  res.send('No se donde estoy')
})
/* la ruta * indica que esta respuesta se va a mostrar en cualquier otra opción que no esté especificada con otro '/'
Esta ruta de asterisco se debe poner SIMEPRE al final de las demás rutas */



app.listen(port, ()=>{
  console.log(`El servidor de express está funcionando en el puerto ${port}`)
})