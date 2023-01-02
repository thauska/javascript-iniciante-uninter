// Grouping operator ()

let total = 78 + 5 * 8
// console.log(total)

let total2 = (78 + 5) * 8
// console.log(total2)

// Operadores de comparação
// ==
// !=

let one = 1
let two = '2'

/* console.log(two == 1)
console.log(one == 1)
console.log(one == '1')

console.log(one != 2)
console.log(one != 1) */

// Operadores de comparação estritamente igual e estritamente diferente
// ===
// !==

/*console.log(one === '1')
console.log(two !== 2) */

// Operadores de comparação maior e menor (igual)

// maior que >
// menor que <
// console.log(5 < 5)

// maior igual a >=
// menor igual a <=
// console.log(5 >= 6)

// Operadores de atribuição
// atribuição simples =
/*z = 0

// atribuição de adição
z += 3 // z = 0 + 3
console.log(z)

// atribuição de subtração
z -= 2 // z = 3 - 2
console.log(z)

// atribuição de multiplicação
z *= 5
console.log(z)

// atribuição da divisão
z /= 2
console.log(z)

// atribuição resto
z %= 2
console.log(z)

// atribvuição exponencial
z **= 2
console.log(z)*/

// Operadores lógicos

let eligible = true
let required = false
/*
// E && -> os dois valores forem true, retorna true
console.log(eligible && required)

// OU || -> ao menos seja true, retorna true
console.log(eligible || required)

// NÃO !
console.log(!eligible)

// Dupla negação !!
console.log(!!eligible) */

// Operador condicional ternário

const accessSystem = eligible || required ? "você pode ter acesso" : "Você não pode ter acesso"
console.log(accessSystem)
