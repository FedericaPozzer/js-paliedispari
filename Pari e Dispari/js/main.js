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


// CHIEDO ALL'UTENTE SE VUOLE PARI O DISPARI (prompt)
let user_choice_oe = prompt("Ciao utente! Pari o Dispari? UTILIZZA LETTERE MINUSCOLE!");
console.log(user_choice_oe);

if (user_choice_oe === "pari") {
    console.log("even")
} else if (user_choice_oe === "dispari") {
    console.log("odd")
} else {
    alert("La tua scelta non va bene, ricarica la pagina per riprovare!")
}

// SE SCEGLIE ALTRO GLI DO SCELTA NON VALIDA E VIA (alert)
// if ((user_choice_oe !== "pari") || (user_choice_oe !== "dispari")) {
//     alert("Scelta non valida! Ricarica la pagina per riprovare!");
// }

// CHIEDO ALL'UTENTE DI INSERIRE UN NUMERO DA 1 A 5 (prompt)
let user_choice_n = parseInt(prompt("Inserisci un numero da 1 a 5 compresi!"));
console.log("il numero scelto dall'utente è: " + user_choice_n);

// CREO UNA FUNZIONE IN CUI GENERO UN NUMERO RANDOM DA 1 A 5 COMPRESI PER IL PC (function)
function generate_random_number() {
    const random_number = Math.floor(Math.random() * 5) + 1;
    
    return random_number;
}

let pc_choice_n = generate_random_number();
console.log("il numero scelto dal pc è: " + pc_choice_n);

// SOMMO NUMERO UTENTE E NUMERO PC
let sum = user_choice_n + pc_choice_n;
console.log("la somma dei due numeri è: " + sum);

// CREO UNA FUNZIONE PER CONTROLLARE SE IL NUMERO OTTENUTO è ODD OR EVEN (function)
function odd_or_even () {
    // CONTORLLO SE IL NUMERO OTTENUTO è ODD OR EVEN (check with the function)
    if (sum % 2 == 0) {
        console.log(`la somma è ${sum}, quindi pari`)
    } else {
        console.log(`la somma è ${sum}, quindi dispari`)
    };
}

let result = odd_or_even();

// IF L'UTENTE HA SCELTO ODD E VIEN FUORI ODD ALLORA VINCE LUI..ecc (if if if if if)

// let even = "pari";
// let odd = "dispari";
