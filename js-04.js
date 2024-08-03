
/*
*Sum of Resistors in Series
Calculate the sum of all resistors connected in series.
Examples:
- `sumResitance([-1,5,6,3])` should return `"15 ohms"`. (|−1| + 5 + 6 + 3 = 15)
- `sumResitance([14,3.5,6])` should return `'23.5 ohms'`. (14 + 3.5 + 6 = 23.5)
- `sumResitance([8,15,100])` should return `'123 ohms'`. (8 + 15 + 100 = 123)
Note: This approach uses the absolute value of each resistance to ensure all values are positive.*/
function sumResistance(resistances) {
    
    let add=0;
    
    for (let i = 0; i < resistances.length; i++) { //El iterador debe de ser menor al tamaño del arreglo porque inicia en 0, si un arreglo tiene 4 elementos, el iterador llega hasta la posición 3 (0,1,2,3)
            add+= Math.abs(resistances[i]); //Sumar cada uno de los elementos y que todos sean positivos.
            
    }
    return console.log(`${add} ohms`);
}

// Ejemplos 
sumResistance([-1, 5, 6, 3]); // "15 ohms
sumResistance([14, 3.5, 6]); // "23.5 ohms"
console.log("------------------------------------");


/* 
*-------------------------------------------------------------------------------------------------------*/ 

/*
*Number divided into halves
Given a number, return the number divided into its halves in an array.
Examples:
- `numDiv(4)` should return `[2, 2]`.
- `numDiv(10)` should return `[5, 5]`.*/ 

function numDiv(number) {
    // Divide el número en dos partes iguales
    const half = number / 2;
    // Muestra las dos mitades
    return console.log(`Las mitades son: [${half}, ${half}]`);
}

// Ejemplos 
numDiv(4);  // [2, 2]
numDiv(10); // [5, 5]

console.log("------------------------------------");
/*
*----------------------------------------------------------------------------------------------------*/ 
/*
*Secret Society
Find the name of a secret society based on the first letter of each member's name.
Examples:
- `secretName(["Esperanza", "Franco", "Nia"])` should return `'EFN'`.
- `secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'])` should return `'CJMPRR'`.
- `secretName(['Harry', 'Ron', 'Hermione'])` should return `'HHR'`. */
function secretName(names) {
    
    let resultado=[];
    for (let i = 0; i < names.length; i++) { //Recorre el arreglo
        let palabras = names[i].split(" "); // Divide la cadena en palabras, utilizando " " como separador y crea el arreglo palabras.
        
        for (let j = 0; j < palabras.length; j++) { //Recorre el nuevo arreglo
            resultado.push(palabras[j][0]); // Añade la primera letra de cada palabra al resultado
        }
    }
    
    return console.log(resultado.join("")); // Se utiliza join para unir los elementos del arreglo resultado sin separadores("")
}


// Ejemplos de uso
secretName(["Esperanza","Franco", "Nia"]); // "EFN"
secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel']); 
secretName(['Harry', 'Ron', 'Hermione']); // "HRH"
console.log("------------------------------------");

/* 
*-------------------------------------------------------------------------------------------------------*/ 

/*
/*
*Online status
Display online status for a list of users.
Example:
- `onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer'])` should return `'mockIng99, J0eyPunch and 1 more online'`.
*-------------------------- */
function onlineStatus(users) {
    switch (users.length) {
        case 0:
            return 'No users online';
            
        case 1:
            return `${users[0]} is online`;
        case 2:
            return `${users[0]} and ${users[1]} are online`;
        default:
            const othersCount = users.length - 2; //Siempre se mostrarán 2 usuarios máximo
            return `${users[0]}, ${users[1]} and ${othersCount} more online`;
    }
}


// Ejemplos de uso
console.log(onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer','holi','zaz'])); 
console.log(onlineStatus(['Phoebe', 'Ross'])); 
console.log(onlineStatus(['Harry'])); 
console.log(onlineStatus([])); 

console.log("------------------------------------");
/* 
*-----------------------------------------------------------------------------------------------------------*/ 

/*
 * Array of Multiples
Create a function that takes two parameters (number, length) and returns an array of length containing multiples of the number.
Examples:
- `arrayMultiplos(2, 10)` should return `[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]`.
- `arrayMultiplos(17, 6)` should return `[17, 34, 51, 68, 85, 102]`.
 */
function arrayMultiples(number, length) {
    const multiples = [];
    for (let i = 1; i <= length; i++) { 
        multiples.push(number * i); //agregamos los resultados de number*i que serán los elementos del arreglo multiples.
    }
    return multiples;
}

// Ejemplos de uso:
console.log(arrayMultiples(2, 10)); // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
console.log(arrayMultiples(17, 6)); // [17, 34, 51, 68, 85, 102]
console.log("------------------------------------");
/* 
*---------------------------------------------------------------------------------------------------------*/ 
/*
/*Positive dominance in Array
Write a function to determine if an array is positively dominant.
An array is positively dominant when the majority of its elements are positive.
Example:
- `positiveDom([-1, -3, -5, 4, 6767])` should return `false`.*/
function positiveDom(array) {
    // Contador para elementos positivos
    let elementsPositive = 0;
    
    // Recorre el array y cuenta los elementos positivos
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) { //si es mayor a cero, es positivo y se toma en cuenta.
            elementsPositive++; 
        }
    }
    return elementsPositive > array.length / 2;//Si hay más elementos positivos que la mitad del arreglo, return devuelve true.
}

// Ejemplos de uso
console.log(positiveDom([-1, -3, -5, 4, 6767])); // false
console.log(positiveDom([1, 2, 3, -4, -5])); // true
console.log(positiveDom([-1, -2, -3, -4, 5])); // false

console.log("------------------------------------");
/* 
*---------------------------------------------------------------------------------------------------------*/ 
/*
/*Antipodal Average
Given an array, return a shorter array following these steps:
- Split the array into two equal parts*. If unequal, remove the middle element to obtain two equal arrays.
- Sum each number of the first part with the inverse numbers of the second part.
- Divide each number of the resulting array by 2.
Example:
- For the array `[1,2,3,5,22,6]`, the result should be `[3.5, 12, 4]`. */
function processArray(arr) {
    
    // Si el array tiene un número impar de elementos, elimina el elemento del medio
    if (arr.length % 2 !== 0) {
        const middle = (arr.length - 1) / 2;
        arr.splice(middle, 1);//elimina el elemento de en medio
    }

    // Divide el array en dos partes 
    const half = arr.length / 2;
    const firstPart = arr.slice(0, half); //Toma la primera parte del arreglo
    const secondPart = arr.slice(half).reverse();//Toma la segunda parte y lo invierte
    
    const result = [];
    for (let i = 0; i < firstPart.length; i++) {
        result.push((firstPart[i] + secondPart[i]) / 2);
    }

    return result;
}

// Ejemplo de uso
console.log(processArray([1, 2, 3, 5, 22, 6])); // [3.5, 12, 4]
console.log(processArray([1, 2, 3, 4, 5, 6, 7])); // [4, 4, 4]
console.log(processArray([10, 20, 30, 40, 50, 60])); // [35, 35, 35]
console.log("------------------------------------");