//process imprime el objeto global process que contiene informacion sobre el proceso de ejecucion de node, como variables de entorno, argumentos de linea de comandos, etc.

const {USERDOMAIN} = process.env; 

console.log({USERDOMAIN}); //imprime la propiedad USERDOMAIN y su valor del objeto process.
console.table({USERDOMAIN}); //imprime la propiedad USERDOMAIN y su valor del objeto processes en formato de tabla.
console.log(USERDOMAIN); //imprime el valor de la propiedad USERDOMAIN del objeto process.