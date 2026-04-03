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



const {getUserById} = require('./js-foundation/03-callbacks'); 

const id = 1;

getUserById(id, function (error, user) { //lo que dice function es el callback, que se le pasa error y user, lo que devuelve la función
    if(error){
       throw new Error(error);
    }
    console.log(user);
    //si tuviera que colocar otro callback dentro de este callback, se haria aqui, pero esto se llama callback hell, y es algo que se debe evitar, por eso se utilizan las promesas o async/await para evitar esto
    getUserById(2, function (error, user) {
        if(error){
            throw new Error(error);
        }
        console.log(user);
    }) //cierra el callback de getUserById(2, function (error, user)
});

const {getUserByIdArrow} = require('./js-foundation/04-arrow'); //desestructuracion y renombrado de la funcion getUserById a getUserByIdArrow

getUserByIdArrow(id, (error, user) => { 
    if(error){
       throw new Error(error);
    }
    console.log(user);
});


//Factory Function fuertemente acoplada:
const obj = {
    name: 'Estela',
    birthdate: '10/10/1990',
}
/* const {buildPerson} = require('./js-foundation/05.factory'); //desestructuracion y renombrado de la funcion buildPerson a buildPerson   

console.log(buildPerson(obj)); */

const { getUUID, getAge } = require('./plugins/index.js'); //en app.js se importa el patrón adaptador. Es decir, se importan los adaptadores (getUUID y getAge) desde plugins/index.js
const {buildMakePerson} = require('./js-foundation/05.factory'); //desestructuracion y renombrado de la funcion buildMakePerson a buildMakePerson
const makePerson = buildMakePerson({getUUID, getAge}); //Esto es una función. se le pasan las dependencias a la funcion buildMakePerson, que devuelve la funcion buildPerson, y se le asigna a makePerson, que es la funcion que se va a utilizar para crear personas, y se le pasan las dependencias getUUID y getAge, que son las funciones que se utilizan para generar el id y calcular la edad respectivamente, y se le pasan como argumentos a buildMakePerson, que es la funcion que devuelve buildPerson, y se le asigna a makePerson, que es la funcion que se va a utilizar para crear personas, y se le pasan las dependencias getUUID y getAge, que son las funciones que se utilizan para generar el id y calcular la edad respectivamente, y se le pasan como argumentos a buildMakePerson, que es la funcion que devuelve buildPerson, y se le asigna a makePerson, que es la funcion que se va a utilizar para crear personas
const Estela = makePerson(obj); 

console.log({Estela});