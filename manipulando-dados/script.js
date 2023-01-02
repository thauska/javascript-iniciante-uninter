// Manipular Array
// Criar Array com construtor

/* let myArray = ['a', 'b', 'c']
console.log(myArray)

let myArray2 = new Array('a', 'b', 'c')
console.log(myArray2) */

// contar elementos de um array

/*let myArray = new Array('a', 'b', 'c')
console.log(myArray.length) */

// Strings para array
/* let word = "manipulando"
console.log(Array.from(word)) */

let fruits = ["pera", "maçã", "uva"]

// adicionar um item ao final
fruits.push("banana")

// adicionar um item no início
fruits.unshift("kiwi")

// remover um item do fim
fruits.pop()

// remover o item do início
fruits.shift()

//console.log(fruits)

// pegar somente alguns elementos do array
//console.log(fruits.slice(1, 3))

// remover 1 ou mais itens em qualquer posição do array
//fruits.splice(1, 2)

console.log(fruits)

// encontrar a posição dentro do array
let index = fruits.indexOf("maçã")
console.log(index)
fruits.splice(index, 2)
console.log(fruits)


