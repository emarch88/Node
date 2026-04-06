//Fetch: realiza una petición https para traer informacion de una API. 


//Función que no devuelve promesas y usa callbacks:
const getPokemonById = (id, callback) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    //fetch() no devuelve los datos directamente, devuelve una Promesa
    fetch(url).then( (response) => {
        response.json().then((pokemon) => {
            callback(pokemon.name);
        }) //cierra el then de response.json()
    })

} 

//Función que devuelve promesa:
const getPokemonByIdNoCallback = (id)=>{
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    return fetch(url)
    .then(response => response.json())
    .then(pokemon => pokemon.name);
}

//si una funcion no tiene un return explicito devuelve undefined

module.exports = {
    getPokemonById, 
    getPokemonByIdNoCallback
};
