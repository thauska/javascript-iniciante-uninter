// Manipulação Strings e Numbers

// Transformar String em número e vice versa
/* let string = "1234"
console.log(Number(string))

let number = 567
console.log(String(567)) */

// Contar caracteres e dígitos

/* let word = "mafagafinhos"
console.log(word.length)

let number = 78909897
console.log(number.length)
console.log(String(number).length) */

// Casas decimais

// Pegar um número com várias casas decimais e transformar limitando com 2 casas decimais e, em seguida, trocar ponto por vírgula

/* let number = 874.878687436
console.log(number.toFixed(2))
console.log(number.toFixed(2).replace(".", ",")) */

// Maiusculo e minusculo

/* let text = "Estudar é a chave para o sucesso!"
console.log(text.toUpperCase())
console.log(text.toLowerCase()) */

// Separando strings
/**
 * Separe a frase em um novo array, onde cada palavra é uma posiçao desse array. Depois, transforme o array em texto, substituindo onde tinha espaços por _
*/

/* let phrase = "Estudar é a chave para o sucesso"
let phraseToArray = phrase.split(" ")
console.log(phraseToArray)

let phraseWithUnderline = phraseToArray.join("_")
console.log(phraseWithUnderline.toLowerCase()) */

// Encontrar palavras no texto

let phrase = "Estudar é A chave para o sucesso!"
console.log(phrase.toLowerCase().includes("estudar"))
