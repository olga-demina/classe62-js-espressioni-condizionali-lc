// Chiedi all’utente il suo nome,
const userName = prompt("Dimmi il tuo nome");
console.log(userName); 

// poi chiedi il suo cognome,
const userLastName = prompt("Dimmi il tuo cognome");
console.log(userLastName);

// poi chiedi il suo colore preferito
const userColor = prompt("Dimi il tuo colore preferito");
console.log(userColor);

// crea la password
const userPassword = `
    <span>
        ${userName}${userLastName}${userColor}21
    </span>
`;
// const userPassword = '<span>' + userName + userLastName + userColor + '21' + '</span>';
console.log(userPassword); 

// Infine scrivi sulla pagina nomecognomecolorepreferito21
document.getElementById('user-password').innerHTML = userPassword;

