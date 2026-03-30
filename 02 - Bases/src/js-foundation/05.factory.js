
//Factory Function fuertemente acoplada: 
const buildPerson = ({name, birthdate}) => {
    console.log(`
Objeto construido con la función buildPerson: 
        `);
    return {
        id: new Date().getTime(), 
        name: name,
        birthdate: birthdate,
        age: new Date().getFullYear() - new Date(birthdate).getFullYear()
    }
}

const obj = {
    name: 'Estela',
    birthdate: '10/10/1990',
}

module.exports = {
    buildPerson
}
