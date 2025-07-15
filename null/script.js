// funções construtoras

function createProduct(name) {
    const product = {}
    
    product.name = name
    product.details = function(){
        console.log(`O nome do produto é ${this.name}`)
    }

    return product
}

// O new cria um novo objeto utilizand a estrutura da função construtora.
const product1 = new createProduct("Teclado")

console.log(product1)
product1.details()

const product2 = new createProduct("Mouse")
console.log(product2)
product2.details()

// Exemplos de funções construtotas disponíveis no próprio JavaScript

let myName = new String("Rodrigo")
console.log(myName)

let price = "40.6".replace(".", "")
console.log(price)

let date = new Date("2024-1-1")
console.log(date)


function Person(nome){
    this.nome = nome
    this.message = function(){
        console.log(`Olá, ${this.nome}`)
    }
}

const person1 = new Person("Rodrigo")
console.log(person1)
person1.message()