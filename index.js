const fs = require('fs')// filesystem(fs) es un modulo incorporado a node por lo que se importa de esta manera sin generar otro archivo
const fileOps = require('./src/fileops')
let incValues 
let newNames

/* fs.readFile va a poder leer un documento de text. Al no ser un archivo js o JSON entonces sí se especifica la extensión (.txt)
utf-8 especifíca que el archivo retornado sea de texto también
el comando throw detiene automaticamente el proceso en la consola
el metodo .split separa los elementos de un documento, en este caso number.txt esperando un parametro de como dividir esos elementos
(\n) es el parámetro que indica que se va a separar los elementos por cada salto de linea que haya y los devuelve en un array
 map(n=>Number(n)) va a iterar en los elementos de ese arreglo y los va a regresar en formato de número y no como texto*/
fs.readFile('./resources/number.txt', 'utf-8', (err, text) => {
  if(err) throw err
  const numbers = text.split('\n').map(n=>Number(n))
  console.log(numbers)
  console.log(fileOps.incrementValues(numbers))
  incValues = fileOps.incrementValues(numbers)
  fs.writeFile('./resources/numbernew.txt',incValues.join('\n'), (err, result) =>{
    if (err) throw err
  })
})

/* fs.writeFile va a crear un nuevo archivo de texto a partir de información que reciba y como procesa
esa información.
.join es un metodo que va a juntar esa información
El resultado de esta función es la creación del documento 'numbernew.txt'*/ 

fs.readFile('./resources/name.txt','utf-8', (err, newText)=>{
  if (err) throw err
  const names = newText.split('\n').map(n=> String(n))
  console.log(fileOps.callNames(names))
  newNames = fileOps.callNames(names)
  fs.writeFile('./resources/namenew.txt', newNames.join('\n'), (err, data) =>{
    if (err) throw err
  })
})


