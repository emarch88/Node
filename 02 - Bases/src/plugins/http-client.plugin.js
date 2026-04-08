//Por acá pasan todas las peticiones http:

//If Axios is installed with npm i axios, we can use it as follows:
//const axios = require('axios'); // legacy way

const httpClientPlugin ={
    get: async (url) => {
        const resp = await fetch(url);
        return await resp.json();
    },
    //const {data} = await axios.get(url); //If Axios is installed
    //console.log(data); //If Axios is installed
    //return data; //If Axios is installed
    
    post: async (url, body) => {},
    put: async (url, body) => {},
    delete: async (url) => {},
};

module.exports = {
    http: httpClientPlugin,
};