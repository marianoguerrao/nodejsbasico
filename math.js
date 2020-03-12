module.exports = {
    add: function(a,b) {
        return a + b;
    },
    substract: function(a,b) {
        return a - b;
    },
    multiply: function(a,b) {
        return a * b;
    },
    divide: function(a,b) {
        return a / b;
    }
}

/*module.exports permite exportar estas funciones para que puedan ser utilizadas o invocadas en otros documentos.
en este caso se importan en index.js*/