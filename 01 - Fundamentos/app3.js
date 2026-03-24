const fs = require('fs');

const content = fs.readFileSync('README.md', 'utf-8');

const wordCount = content.split(' '); //split(' ') → divide el contenido en palabras usando el espacio como separador. .split() se aplica a un string y devuelve un array.

const reactWordCount = wordCount.filter(

    //(word)=> word.toLowerCase() === 'react'
    (word)=> word.toLowerCase().includes('react') //condicion de V o F

).length; //filter devuelve un array con los elementos que cumplen la condición dada. En este caso, se filtran las palabras que son iguales a 'react' (ignorando mayúsculas y minúsculas) y luego se obtiene la longitud del array resultante para contar cuántas veces aparece la palabra 'react'.



console.log('Palabras: ', wordCount.length); 
console.log('Palabras "React": ', reactWordCount); 
