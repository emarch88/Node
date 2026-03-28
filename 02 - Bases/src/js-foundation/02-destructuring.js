//console.log( process.env.PORT ?? 3000); 
//process imprime el objeto global process que contiene informacion sobre el proceso de ejecucion de node, como variables de entorno, argumentos de linea de comandos, etc.

console.log( process.env);

const {SHELL, USERDOMAIN} = process.env; //desestructuracion, se extrae la variable de entorno SHELL y USERDOMAIN del objeto process.env

console.log({SHELL, USERDOMAIN}); //imprime el valor de la variable de entorno SHELL, que es el shell que se esta utilizando en el sistema operativo


console.table({SHELL, USERDOMAIN});