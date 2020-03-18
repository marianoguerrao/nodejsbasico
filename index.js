const greet = require ('./src/greet')

/*.emit invoca a la función 'clap' del archivo greet declarada con myEmmiter.on */
greet.emit('clap')

greet.emit('greet', 'Mariano')

greet.emit('shout', 'NO ENTIENDO NI MADRES')

greet.emit('call', 'Mariano', (name)=>{
  console.log(`Estamos llamando a: `, name)
})