// console.log("Hi Kik");


// Pari e Dispari
// L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random(sempre da 1 a 5) per il computer(usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari(usando una funzione)
// Dichiariamo chi ha vinto.

// CHIEDO ALL'UTENTE SE VUOLE PARI O DISPARI (prompt)
// SE SCEGLIE ALTRO GLI DO SCELTA NON VALIDA E VIA (alert)

// CHIEDO ALL'UTENTE DI INSERIRE UN NUMERO DA 1 A 5 (prompt)
// SE SCEGLIE ALTRO GLI DICO ANCHE QUI CHE NON VA BENE (alert)

// CREO UNA FUNZIONE IN CUI GENERO UN NUMERO RANDOM DA 1 A 5 COMPRESI PER IL PC (function)

// SOMMO NUMERO UTENTE E NUMERO PC (let sum?)

// CREO UNA FUNZIONE PER CONTROLLARE SE IL NUMERO OTTENUTO è ODD OR EVEN (function)

// CONTORLLO SE IL NUMERO OTTENUTO è ODD OR EVEN (check with the function)

// IF L'UTENTE HA SCELTO ODD E VIEN FUORI ODD ALLORA VINCE LUI..ecc (if if if if if)

// CONSOLE.LOG VINCITORE (ok)


// ****************************************************************************************



// UTENTE SCEGLIE PARI O DISPARI
let userChoice = prompt("scrivi 'pari' oppure 'dispari'");
console.log("Hai scelto: " + userChoice);

if (userChoice != "pari" && userChoice != "dispari") {
    userChoice = "pari";
    console.log("Ho scelto pari per te");
}

// UTENTE SCEGLIE NUMERO 
let userNumber = parseInt(prompt("inserisci un numero da 1 a 5"));
console.log("Hai scelto il unumero: " + userNumber);
console.log("Il pc ha scelto: " + generateRandomNumber(1, 5));


// GENERO UN NUMERO RANDOM PER IL PC
const pcNumber = generateRandomNumber(1, 5);

// SOMMO I NUMERI
let gameTotal = userNumber + pcNumber;

// STABILIAMO SE LA SOMMA E' PARI
let userWon = false;
if(isEven(gameTotal)) {
    if(userChoice == "pari") {
        userWon = true;
    }
} else {
    if(userChoice == "dispari") {
        userWon = true;
    }
}

if(userWon) {
    console.log("Hai vinto");
} else {
    console.log("Ha vinto il pc!");
}



// FUNZIONE NUMERO RANDOMICO

/**
 * funzione che genera un numero fra due valori (inclusi)
 * 
 * @param {int} min il valore minimo
 * @param {int} max il valore massimo
 * @returns {int} numero randomico generato tra min e max
 * 
 */

// console.log("il numero del pc è: " + generateRandomNumber(1, 5));
function generateRandomNumber(min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}

// FUNZIONE PARI O DISPARI

/**
 * funzione controlla se il numero è pari
 * 
 * @param {int} num il valore da verificare
 * @returns {boolean} true se è pari, false se è dispari
 * 
 * 
 */

function isEven(num) {
    if (num % 2 == 0) {
        return true;
    }

    return false;
}
// controllo se funziona! YES!
console.log(isEven(6));

// bene anche:
    // function isEven(num) {
        // return num % 2 == 0;
    //}