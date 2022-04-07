// 3. pari o dispari: chiedere all'utente se vuole pari o dispari e un numero intero compreso tra 1 e 9. Generare un numero casuale compreso tra 1 e 9, che sarà la giocata del computer. Stabilire e comunicare chi ha vinto secondo le regole di pari o dispari.
/*
pari
5
2
5 + 2 = 7
7 è dispari, l'utente ha perso 
*/

// dichiarazioni
// Chiedere all'utente se vuole pari o dispari
const userChoice = prompt("Dimmi pari o dispari");
console.log(userChoice);

// Chiedere all'utente un numero
const userNumber = parseInt(prompt("Dimmi un numero tra 1 e 9"));
console.log(userNumber);

// Generare un numero casuale
const computerNumber = Math.floor(Math.random() * 9) + 1;
console.log(computerNumber);

// Elaborazione
// Sommare due numeri
const numbersSum = userNumber + computerNumber;
console.log(numbersSum);

// Calcolare il resto della divisione per 2 della somma
const resto = numbersSum % 2;
console.log(resto);

// se il resto è 0 allora è pari
// altrimenti è dispari
let evenOddResult;
if (resto === 0) {
    evenOddResult = "pari";
} else {
    evenOddResult = "dispari";
}

console.log(evenOddResult);


// confrontare il risultato precedente con la scelta pari/dispari dell'utente
// se la somma è pari / dispari e l'utente ha scelto pari / dispari, allora ha vinto utente (coincidano)
//  altrimenti ha vinto il computer

let resultMessage;
if (evenOddResult === userChoice) {
    resultMessage = "Hai vinto tu!";
} else {
    resultMessage = "Mi dispiace, hai perso!";
}

console.log(resultMessage);

// Scrivere il risultato sullo schermo
document.getElementById('result').innerHTML = resultMessage;
