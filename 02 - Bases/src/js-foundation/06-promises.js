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


//Función que usa patrón adaptador en fetch y devuelve promesa:
const {http} = require('../plugins/index.js'); 
const getPokemon = async (id)=>{
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const pokemon = await http.get(url); //reemplaza las líneas 32 y 33. http es el wrapper que hace la función de adaptador, y get es la función que hace la petición http y devuelve la respuesta en formato json, y se le pasa como argumento la url, y devuelve el pokemon, y se le asigna a pokemon, y se devuelve pokemon.name. Esto es una buena práctica para desacoplar la lógica de negocio de la lógica de los plugins, ya que si se quiere cambiar el plugin de http, solo se tiene que cambiar en plugins/index.js y no afecta el código de app.js. Esto es una buena práctica para mantener un código limpio y modular.
    return pokemon.name;
}

module.exports = {
    getPokemonById, 
    getPokemonByIdNoCallback,
    getPokemonByIdAsync,
    getPokemon
};
