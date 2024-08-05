/*Elaborado por Zaira Cortés */
/* 
*User profile
Write a program that prompts a user for their data: username, age, and a list of their favorite movies. Store the information and then showcase it in the console. Take note that the output for the films should add a small message like: 'The film {film} is one of my favorites'. 


let userName = prompt("Ingresa tu username: ");
let age = prompt("Edad: ");
console.log(`Username: ${userName} \nEdad: ${age}`);
let favoriteMovies=[];
for (let i = 0; i <3; i++) {
    let movies = prompt("Ingresa tus 3 peliculas favoritas: ");
    favoriteMovies[i] = movies;
    console.log(`The film ${favoriteMovies[i]} is one of my favorites`);
}

*/
/*
*Highest number
Write a program that asks for 10 numbers. Using logical operators and any other javascript functions/structures you've seen before, determine and output the highest of those numbers.

let numbers=[];
for (let i = 0; i <3; i++) {
    let num = prompt("Ingresa 10 números: ");
    numbers[i] = num; 
    
}
let highest = numbers[0]; //se toma el primer valor como el más alto

for (let j = 1; j < numbers.length; j++){ //se recorre el arreglo
        if(numbers[j]>highest){ //se comparan los elementos del arreglo con el primer elemento
            highest = numbers[j]; //Si el elemento es mayor, se traspasa su valor a highest
        }
}
console.log(`The highest number is: ${highest}`); */

/*
*Alarm
Write a program that asks a user for the amount of seconds needed until an alarm (message) is executed alongside a text to show once those seconds have passed in real time.
Result example: "Time for bed after 10 seconds".
 */


/*
 *Palindrome
Write a program that prompts for a word or sentence (it can be capitalized, have spaces and punctuation). Figure out if the sentence/word is a palindrome or not. Ignoring punctuation, spaces and capitalized letters.

let palabra = prompt("Ingrese una palabra o frase:");
let lower = palabra.toLowerCase();
    // Eliminar caracteres no alfanuméricos
let lowerClear = lower.replace(/[^a-z0-9]/g, '');
let cadenaReversa = lowerClear.split('').reverse()//se eliminan los espacios y se pone la frase al reves
let palindrome=cadenaReversa.join('');

if (palindrome == lowerClear){
    console.log("Es palindromo");
}else{
    console.log("No es palíndromo");
}
 */
    
/*
*Factorial
Write a program that prompts for an intenger number n. Where  1 <= n. Solve this using recursion.
 * !n=n(n-1)

let numberFac = parseInt(prompt("Ingrese un número entero (1 <= n):"));
if (1<=numberFac){
    alert(factorial(numberFac));
}else{
    alert("Error");
}
function factorial(n){
    let res =0;
    if (n===1){
        return 1;
    }else{
        res=n * factorial(n-1);
        return res;
    }
}
 */

/*
*Flat array
Write a program that takes the following nested matrix and flattens it (makes it a 1D array). Use any type of algorithm you want like callbacks, recursion, etc...
let multiDimension = [1, [2, 3, [4, 5, [6]]]]; 
 */

function flatArray(array){
    //let array = [1, [2, 3, [4, 5, [6]]]]; 
    let str = array.toString(); //Convierte el array en un string
    // Eliminamos los corchetes de la cadena, se utiliza \[ para buscar y eliminar [ y así sucesivamente.
    str = str.replace(/\[|\]/g, '');//Se hace una búsqueda global de los caracteres y se remplazan con un espacio.
        
    // Convertimos la cadena de nuevo a un arreglo
    var resultado = str.split(',').map(Number);//Utilizamos split para dividar la cadena y con Number se convierte en una cadena numérica.
    return console.log(resultado);
}

//flatArray([1, [2, 3, [4, 5, [6]]]]); 