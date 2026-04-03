const { getUUID } = require('../plugins/get-id.plugin');
const {getAge} = require('../plugins/get-age.plugin')


module.exports = {
    getUUID,
    getAge
} //seran importados por app.js, que es el archivo principal de la aplicación, y se ejecutará con npm start o node src/app.js y se ejecuta el codigo de app.js, y se importarán las funciones getUUID y getAge desde plugins/index.js, que es el archivo que exporta las funciones de los plugins, y se utilizarán en app.js para crear personas con el patrón factory, utilizando las funciones getUUID y getAge como dependencias para generar el id y calcular la edad respectivamente, y se le pasarán como argumentos a buildMakePerson, que es la función que devuelve buildPerson, y se le asignará a makePerson, que es la función que se va a utilizar para crear personas. Es decir, se utiliza el patrón adaptador para desacoplar la lógica de negocio de la lógica de los plugins, y se le pasan las dependencias a la función buildMakePerson, que devuelve buildPerson, y se le asigna a makePerson, que es la función que se va a utilizar para crear personas. Esto permite cambiar los plugins sin afectar la lógica de negocio, ya que las dependencias se pasan como argumentos a la función buildMakePerson, y no están acopladas directamente en el código de app.js. De esta manera, si se quiere cambiar el plugin de generación de id o cálculo de edad, solo se tiene que cambiar en plugins/index.js y no afecta el código de app.js. Esto es una buena práctica para mantener un código limpio y modular.
