console.log(`Esta linea se ejecuta cuando se ejecuta este archivo app.js desde package.json haciendo npm start o en terminal con  
    node src/app.js y se ejecuta el codigo de app.js'`);

const templateExports = require('./js-foundation/01-template'); //se ejecuta con npm start o node src/app.js y se ejecuta el codigo de 01-template.js
//ejecuta el module.exports
//forma 1 de imprimir
console.log(templateExports); //imprime el valor de todo el archivo 01-template.js
//forma 2 de imprimir
console.log(templateExports.emailTemplate); //imprime el valor de emailTemplate que se exporta desde 01-template.js 


const {emailTemplate} = require('./js-foundation/01-template'); //desestructuracion
//forma 3 de imprimir
console.log(emailTemplate); //imprime el valor de emailTemplate que se exporta desde 01-template.js
 require('./js-foundation/02-destructuring'); //se ejecuta con npm start o node src/app.js y se ejecuta el codigo de 02-destructuring.js