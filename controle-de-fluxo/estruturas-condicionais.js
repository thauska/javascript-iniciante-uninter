// Controle de fluxo
/*console.log(1)
console.log(2)*/

// Estruturas condicionais

// if...else

/*let price = 50

if (price >= 100) {
  console.log('Desconto de 10% aplicado')
} else if (price > 50) {
  console.log('Desconto de 5% aplicado')
} else {
  console.log('Nenhum desconto foi liberado')
}*/

// if...else ternário

/*let playerScored = false

playerScored ? console.log("Marcou ponto") : console.log("Não marcou ponto")*/

//switch
/*
let expression = 'fdsd'

switch (expression) {
  case 'a':
    console.log("Expressão a")
    break
  case 'b':
    console.log("Expressão b")
    break
  default:
    console.log("Qualquer outra expressão, sem ser a e b")
    break
}*/

// Manipulação de erro

// throw

function showAName (name) {
  if (!name) {
    throw "O nome é obrigatório"
  }

  console.log("depois do erro")
}

//showAName()

// try...catch

try {
  showAName()
} catch (error) {
  console.log(error)
}

console.log("depois do try/catch")