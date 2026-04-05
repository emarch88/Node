//petición https para traer informacion

const getPokemonById = (id, callback) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    //fetch() no devuelve los datos directamente, devuelve una Promesa
    fetch(url).then( (response) => {
        response.json().then( (pokemon) => {
            callback(pokemon.name);
        }) //cierra el then de response.json()
    })

} 

//si una funcion no tiene un return explicito devuelve undefined
module.exports = getPokemonById;