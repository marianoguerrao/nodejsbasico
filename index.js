const call = require ('./src/call')

//console.log(call.sync ('Mariano Guerra'))

//call.withCallback ('Mariano Guerra', call.sync)

/*en este caso se escribe primero el valor del nombre porque así lo pide la función de 'withCallback
después pide un callback que en este caso es 'call.sync'*/

call.withPromise('Mariano Guerra')
  .then(name => console.log(name)) // sin este .then la promesa se queda en pending esperando que hacer con el resultado devuelto de esa promesa