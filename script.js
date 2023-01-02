// function

/*function nomeFuncao () {
  console.log("mensagem qualquer 1")
  console.log("mensagem qualquer 2")
  console.log("mensagem qualquer 3")
}

nomeFuncao()*/

// parametros e argumentos

/*function nomeFuncao (parametro) {
  console.log(parametro)
}

nomeFuncao("mensagem qualquer")*/

/* function soma (number1, number2, number3) {
  console.log(number1 + number2 + number3)
}

soma(10, 30, 2) */

// Função anônima ou function expression

/* const sum = function(number1, number2, number3) {
  console.log(number1 + number2 + number3)
}

sum(2, 3, 4) */

// return

/* const sum = function (number1, number2) {
  var total = number1 + number2
  console.log(`Chamada da variável total dentro do escopo da função: ${total}`)
  return total
}

let num1 = 22
let num2 = 33

console.log(`O número 1 é ${num1}`)
console.log(`O número 2 é ${num2}`)

// console.log(total)

console.log(`A soma dos números é ${sum(num1, num2)}`)
console.log(total) */

// function hoisting

/* showText()

function showText () {
  console.log("mensagem qualquer")
} */

// Arrow function

/* const showNumber = () => console.log(100)
const showText = () => {
  console.log("mensagem 01")
  console.log("mensagem 02")
}

showNumber()
showText() */

// Callback function

/* function showNumber (number) {
  console.log("estou antes da callback")
  number()
  console.log("estou depois da callback")
}
// const number = () => console.log(200)

showNumber(
  () => console.log("estou em uma callback")
) */

// Função construtora -> criar um objeto

function Person (name) {
  this.name = name
  this.dance = function () {
    return this.name + " está dançando"
  }
}

const maria = new Person("Maria")
//console.log(maria.name)
console.log(maria.dance())