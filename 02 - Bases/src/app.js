console.log(`Esta linea se ejecuta desde package.json haciendo npm start o en terminal con  
    node src/app.js y se ejecuta el codigo de app.js'`);

const templateExports = require('./js-foundation/01-template'); //se ejecuta con npm start o node src/app.js y se ejecuta el codigo de 01-template.js
//ejecuta el module.exports

console.log(templateExports); //imprime el valor de emailTemplate que se exporta desde 01-template.js 