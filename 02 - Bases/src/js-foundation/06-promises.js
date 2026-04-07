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
    .then(() => {throw new Error('Error al obtener el pokemon')})
    .then(pokemon => pokemon.name);
}

//si una funcion no tiene un return explicito devuelve undefined


//Función que devuelve promesa:
const getPokemonByIdAsync = async (id)=>{
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const response = await fetch(url);
    const pokemon = await response.json();
    return pokemon.name;
}

module.exports = {
    getPokemonById, 
    getPokemonByIdNoCallback,
    getPokemonByIdAsync,
};
