// 1. Chiediamo all'utente due parole in successione.
// Andiamo poi a verificare quale delle due parole è più lunga e stampiamo in console un messaggio appropriato.

// DICHIARAZIONI
// Chiedere le due parole all'utente
const firstWord = prompt("Dimmi una parola");
const secondWord = prompt("Dimmi un'altra parola");
console.log(firstWord, secondWord);

// ELABORAZIONE
// Verifichiamo qual'è delle due parole è più lunga
// - troviamo la lunghezza delle parole
const firstWordLength = firstWord.length;
console.log(firstWordLength);

const secondWordLength = secondWord.length;
console.log(secondWordLength);

// - se la prima parola è più lunga della seconda scriviamo "Prima parola più lunga"
// - altrimenti se la seconda è più lunga scriviamo "La seconda più lunga"
// - altrimenti le due parole sono uguali
let resultMessage;

if (firstWordLength > secondWordLength) {
    resultMessage = "Prima parola più lunga";
} else if (secondWordLength > firstWordLength) {
    resultMessage = "La seconda più lunga";
} else if (firstWordLength === secondWordLength) {
    resultMessage = "Le due parole sono uguali";
} else {
    resultMessage = "Abbiamo un'errore";
}

// OUTPUT
// Stampo in pagina il risultato
document.getElementById('result').innerHTML = resultMessage;