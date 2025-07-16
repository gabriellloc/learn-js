// Arrays 

// Array com construtor

const newArray = new Array()
console.log(newArray)

// retorna o tamanho do array
console.log(newArray.length)

// [] - Array
// {} - Object

// Cria o array com 10 posições vazias
const availabel = new Array(10)
console.log(availabel)

console.log("###########end################")
console.log(" ")

// Cria  array
let fruits = ["Apple", "Banana", "Orange", "Watermelon"]
console.log(fruits)

//O último item do Array
console.log(fruits[fruits.length - 1])


console.log("###########end################")
console.log(" ")

// como converter uma string para um array

let fullName = "Gabriel Oliveira Cardoso"

// Separando pelo espaço
let fullNameSplit = fullName.split(" ")

console.log(fullNameSplit)

// Cria um array com as LETRAS

console.log(Array.from(fullName))

console.log(" ")
console.log("#############end################")
console.log(" ")

let users = []

// Adiciona um item ao final do Array
users.push("Gabriel")
users.push("João")
users.push("Marcos")

// Adiciona um item no início do Array
users.unshift("Ana")

// Como remover o primeiro item
users.shift()

// Como remover o último item
users.pop()

console.log(users)

console.log(" ")
console.log("#############end################")
console.log(" ")


// Buscando o item da array
let frutas = ["Apple", "Watermelon", "Lemon", "Strawberry"]

// Retorna o índice do elemento
let position = frutas.indexOf("Lemon")
console.log(position)

// splce recebe dois parâmetros: A partir de uma posição, e quantos itens ele vai remover
frutas.splice(1, 1)
console.log(frutas)

console.log(" ")
console.log("#############end################")
console.log(" ")

let myArray = [
    "Um texto",
    10,
    true,
    function(){
        console.log("Função dentro do array")
    },
    {
        name:"Gabriel",
        email:"Gabriel@@"
    }
]

console.log(myArray[0])
console.log(myArray[1])
console.log(myArray[2])
myArray[3]();
console.log(myArray[4].name)
console.log(myArray[4].email)

console.log(" ")
console.log("#############end################")
console.log(" ")

// Verificando se existe um item no array

let AnotherFruits = ["Apple", "Orange", "Banana"]

for (let i = 0; i < AnotherFruits.length; i++){
    AnotherFruits[i] = AnotherFruits[i].toLowerCase()
}

console.log(AnotherFruits.includes("apple"))
console.log(AnotherFruits.includes("Strawberry"))
