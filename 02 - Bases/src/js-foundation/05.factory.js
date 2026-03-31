const { v4: uuidv4 } = require('uuid');
const getAge = require('get-age')

//Factory Function fuertemente acoplada: 
const buildPerson = ({name, birthdate}) => {
    console.log(`
Objeto construido con la función buildPerson: 
        `);
    return {
        id: uuidv4(),
        //id: new Date().getTime(), 
        name: name,
        birthdate: birthdate,
        agre:getAge(birthdate) //otra forma de calcular la edad, utilizando la libreria get-age, que se instala con npm install get-age, y se importa al inicio del archivo, y se le pasa el birthdate para que calcule la edad, y se devuelve el resultado de getAge(birthdate) como el valor de age, en lugar de calcularlo manualmente con new Date().getFullYear() - new Date(birthdate).getFullYear()
        //age: new Date().getFullYear() - new Date(birthdate).getFullYear()
    }
}

const obj = {
    name: 'Estela',
    birthdate: '10/10/1990',
}

module.exports = {
    buildPerson
}
