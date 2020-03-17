const errors = require ('./src/errors')
const handling = require ('./src/handling')

try {
  errors.standardErr.range()

} catch(err){
  console.log(`Error: ${err}`)
}

try{
  handling.sync ()

} catch(error){
  console.log(`Ha ocurrido un error: ${error} `)
}

handling.errorFirstCallbackWrong()