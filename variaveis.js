// Variáveis: var, let e const

// const
/* 
const animal = "gato"
//animal = "cachorro"

console.log(animal) */


// Tipagem dinâmica e fraca
/* 
let animal = 4
animal = "cachorro"

console.log(typeof animal) */

// Escopo

// var
// hoisting
/* 
console.log("Existe numero antes do escopo? ", numero)

{
 // código 
  var numero = 10
}

console.log("Existe numero depois do escopo? ", numero) */

// let e const
const numero = 5
console.log("Existe numero? ", numero)

{
  {
    {
      const numero = 10
      console.log("Existe numero? ", numero)
    }
  }
}

console.log("Existe numero depois do escopo? ", numero)