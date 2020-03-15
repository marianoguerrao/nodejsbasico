const call = require('./src/call')

//call.greet('Mariano')

/*call.withPromise('Mariano', 'Guerra')
  .then(n => console.log(n))*/

async function callWithPromise(){ // con async y await se garantiza que se resuelvan las promesas antes de regresar el resultado
  const fullName = await call.withPromise('Mariano', 'Guerra')
  console.log(fullName)
} 

callWithPromise('Mariano', 'Guerra')