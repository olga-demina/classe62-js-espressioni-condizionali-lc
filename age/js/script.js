// 2. età: chiedere all'utente con due prompt gli anni di due persone e comunicare quale delle due è più grande

// Chiedere all'utente le due età
const firstAge = parseInt(prompt("Dimmi la prima età"));
const secondAge = parseInt(prompt("Dimmi la seconda età"));

console.log(firstAge, typeof(firstAge), secondAge, typeof(secondAge));

// se l'età della prima persona è più alta, scriviamo "La prima persona ha l'età maggiore"
// altrimenti se l'età della seconda persona è più grande di quella prima, scriviamo "La seconda persona ha l'età maggiore"
// altrimenti sono coetanei

let message = "Le due perone sono coetanei";

if (firstAge > secondAge) {
    message = "La prima persona ha l'età maggiore";
} else if (secondAge > firstAge) {
    message = "La seconda persona ha l'età maggiore"
}


console.log(message);

// Stampiamo il risultato
document.getElementById("result").innerHTML = message;




