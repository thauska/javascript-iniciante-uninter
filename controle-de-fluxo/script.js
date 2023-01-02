// Estruturas de repetição - Loop

// For

/*for (let i = 0; i <= 10; i++) {
  console.log(i)
}*/

// for in
/*
function exampleForIn (object) {
  for (prop in object) {
    //console.log(prop)
    console.log(object[prop])
  }
}

let person = {
  "first name": "Maria",
  age: 9,
  city: "Belém"
}

exampleForIn(person)*/

// For of
/*
function exampleForOf (numbers) {
  for (number of numbers) {
    console.log(number)
  }
}

let numbers = [8, 5, 8, 8, 9]

exampleForOf(numbers) */

// While

/*let i = 0

while (i <= 10) {
  console.log(i)
  i++
}*/

//do..while

let num = 0

do {
  console.log(num)
  num++
} while(num <= 8)