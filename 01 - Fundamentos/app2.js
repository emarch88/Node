//read a README.md file and print its content to the console

const fs = require('fs');
//require: Es una función de Node.js que sirve para importar módulos (archivos o librerías).

//'fs' es un módulo o librería nativo de Node (file system)
//fs pasa a ser un objeto con funciones para trabajar con archivos

const data = fs.readFileSync('README.md', 'utf-8');
//readFileSync: Es una función del módulo fs que sirve para leer un archivo de forma sincrónica.
//data contiene el contenido del archivo como texto (string).
//utf-8: Es un formato de codificación de caracteres que permite representar texto en la mayoría de los idiomas del mundo. Al especificar 'utf-8', se indica que el contenido del archivo se debe interpretar como texto en lugar de datos binarios.

const newData = data.replace(/React/ig, 'Angular'); 

fs.writeFileSync('README-Angular.md', newData) //cuando ejecute este archivo en node, se crea el archivo README-Angular.md con el contenido del README.md pero con la palabra React reemplazada por Angular
//'README-Angular.md' → nombre del archivo a crear (o modificar)
//newData → el contenido que va a escribir dentro
console.log(data); //sin el console log no sale nada en terminal. //data tiene el contenido original, sin reemplazo. 