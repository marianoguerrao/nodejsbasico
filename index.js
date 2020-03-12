const cowsay = require ('cowsay')
/* para referirnos a modulos externos sólo hay que hacer referencia del nombre del paquete. 
También se puede consultar en la documentacion del modulo o paquete*/

console.log(cowsay.say({
	text : "Mooooooo",
	e : "x X",
	T : " U "
}))

const yodasay = require ('yodasay')

console.log(yodasay.say({
  text : 'Muy chingón, eres tú.'
}));