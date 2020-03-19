const http = require ('http') // recurso local
const fs = require ('fs')// recurso local
const port = 3000

const server = http.createServer((req, res) =>{
  fs.readFile('./resources/my_page.html', (err, data)=>{
    if (err) { 
      console.error(err)
      return 
    }
    res.end(data)
  })
})

console.log(`Servidor iniciado en el puerto ${port}`)
server.listen(port)