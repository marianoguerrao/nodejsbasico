const math = require ('./math') // en esta función 'require' se puede omitir la extension '.js' de la ruta de math en este caso
const greet = require ('./greetings') // si no se refiere a un documento específico. Node tratará de encontrar un archivo 'index.js'
const hello = require ('./greetings/hello')

console.log(math.add (4,5))
console.log(math.divide (4,5))
console.log(math.multiply (4,5))
console.log(math.substract (4,5))

console.log(greet.greet('Mariano'))
console.log(hello.sayHello('Mariano'))

// la función 'require' importa las funciones de otro documento