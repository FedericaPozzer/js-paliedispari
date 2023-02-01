// console.log("Hi Kik");


// Palindroma
// Chiedere all'utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// CHIEDO ALL'UTENTE DI INSERIRE UNA PAROLA (prompt)

// CREO FUNZIONE IN CUI CONTROLLO SE E' PALINDROMA (???)

// SE LO E' -- STAMPO CHE LO E'

// SE NON LO E' -- STAMPO CHE NON LO E'



// CHIEDO ALL'UTENTE DI INSERIRE UNA PAROLA (prompt)
let user_word = prompt("Ciao utente! Inserisci una parola:");
console.log(user_word);

// CREO FUNZIONE IN CUI CONTROLLO SE E' PALINDROMA (grazie google <3)
function is_it_pal(user_word) {

    for (let i = 0; i < user_word.length / 2; i++) {

        // SE NON LO E' -- STAMPO CHE NON LO E'
        if (user_word[i] !== user_word[user_word.length - 1 - i]) {
            return "La parola inserita non è palindroma!";
        }
    }

    // SE LO E' -- STAMPO CHE LO E'
    return 'La parola inserita è palindroma!';
}

// APPLICO LA FUNZIONE E LA CONSOLE LOGGO 
let palindrome_check = is_it_pal(user_word);
console.log(palindrome_check);



// Tiziano:
/**
 * isPalindrome("palindromia")
 * 
 * function isPalindrome(word) {
 *  let reverseWord = "";
 * 
 *  for (let i = 0; i < word.length; i++) {
 *      const currentLetter = word[i];
 *      console.log(currentLetter);
 * 
 *      reverseWord = currentLetter + reverseWord; 
 *  }
 * 
 *  console.log(reverseWord);
 * 
 *  
 *  if(word == reverseWord) {
 *      return true;
 *  }
 *  return false;
 * OPPURE: return word == reverseWord (true --  quindi se non è così 
 * automaticamente ritorna false!)
 * 
 * }
 */