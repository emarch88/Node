/*
//Primer módulo importado de dos formas:
const something = require('./js-foundation/01-template'); 
const {emailTemplate} = require('./js-foundation/01-template'); //desestructuracion

console.log(something); //Imprime el objeto exportado por el módulo
console.log(something.emailTemplate); //Imprime la propiedad del objeto
console.log(emailTemplate); //También imprime la propiedad del objeto
*/








/*
//Segundo módulo importado:
const domain = require('./js-foundation/02-destructuring'); 
*/






//Tercer módulo importado: Uso de callbacks 
const {getUserById} = require('./js-foundation/03-callbacks'); 
const id = 1;
getUserById(id, function (error, user) { //lo que dice function es el callback
    if(error){throw new Error(error);}
    console.log(user);
    //si tuviera que colocar otro callback dentro de este callback, se haria aqui, pero esto se llama callback hell, y es algo que se debe evitar, por eso se utilizan las promesas o async/await para evitar esto
    getUserById(2, function (error, user) {
        if(error){throw new Error(error);}
        console.log(user);
    }) //cierra el callback de getUserById(2, function (error, user)
});


/*
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






















/*



const { getUUID, getAge } = require('./plugins/index.js'); //en app.js se importa el patrón adaptador. Es decir, se importan los adaptadores (getUUID y getAge) desde plugins/index.js
const {buildMakePerson} = require('./js-foundation/05.factory'); //desestructuracion y renombrado de la funcion buildMakePerson a buildMakePerson
const makePerson = buildMakePerson({getUUID, getAge}); //Esto es una función. se le pasan las dependencias a la funcion buildMakePerson, que devuelve la funcion buildPerson, y se le asigna a makePerson, que es la funcion que se va a utilizar para crear personas, y se le pasan las dependencias getUUID y getAge, que son las funciones que se utilizan para generar el id y calcular la edad respectivamente, y se le pasan como argumentos a buildMakePerson, que es la funcion que devuelve buildPerson, y se le asigna a makePerson, que es la funcion que se va a utilizar para crear personas, y se le pasan las dependencias getUUID y getAge, que son las funciones que se utilizan para generar el id y calcular la edad respectivamente, y se le pasan como argumentos a buildMakePerson, que es la funcion que devuelve buildPerson, y se le asigna a makePerson, que es la funcion que se va a utilizar para crear personas
const Estela = makePerson(obj); 
console.log({Estela});


//Promises
const { getPokemonById, getPokemonByIdNoCallback,getPokemonByIdAsync,getPokemon } = require('./js-foundation/06-promises'); 


//Promises with callbacks
console.log(getPokemonById(4, (pokemon) => {
    console.log({pokemon});
}));    


//Promises without callbacks
getPokemonByIdNoCallback(2)
.then(pokemon => {
    console.log({pokemon});
})
.catch(error => {
    console.error(error);
})
.finally(() => {
    console.log('Proceso terminado');
});

//Promises with Async/Await
getPokemonByIdAsync(1)
.then(pokemon =>{console.log({pokemon})})
.catch(error => {console.error(error)})
.finally(() => {console.log('Proceso terminado')});

getPokemon(50)
.then(pokemon =>{console.log({pokemon})})
.catch(error => {console.error(error)})
.finally(() => {console.log('Proceso terminado')});*/