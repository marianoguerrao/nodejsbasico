const server = require ('http').server()
const io= require ('socket.io')(server)
const port = require ('./config').SERVERPORT // datos localizados en config.json

const banner = `
******************************
  Basic Node JS Course
  Tic Tac Toe Project
******************************
Status: Online
Listening on port: ${port}
`

io.onconnection('connection', (socket) =>{
  socket.on('register', (user) =>{
    console.log(`El usuario ${user.name} ha sido registrado con éxito`)
  })
})

server.listen(port, ()=>{
  console.info(banner)
})