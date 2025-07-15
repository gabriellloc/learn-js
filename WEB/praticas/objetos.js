const esp_console = () => {
    console.log("        ")
}

/*
- Objeto é uma coleção de dados e/ou funcionalidades.
- Podem ter propriedades e métodos.
*/

// Criando o objeto vazio

const obj = {}

console.log(typeof obj)

console.log("##########END#################")
esp_console()

// Criando o objeto com propriedades e métodos

const user = {
    email: "gabrieloliveira@email.com",
    age: 18,
    name: {
        first_Name: "Gabriel",
        surname: "Oliveira",
    },
    address: {
        street: "Rua X",
        number: "200",
        city: "São Paulo",
        postal_code: "12345-123",
    },

    message: () => {
        console.log("Oiiiii")
    }
}
// Forma de acessar
console.log(user.address.number)
user.message()

esp_console()

// Outra forma de acessar é:

console.log(user["email"])
console.log(user["name"]["first_Name"])

console.log("##########END#################")
esp_console()

const newUser = {
    nome: "Gabriel",
    message: function() {
        // console.log(`Olá, ${user.name}`)
        console.log(`Olá, ${this.nome}`)
    },
}

user.message()

console.log("##########END#################")
esp_console()

// Atualizando o objeto

const product = {
    name: "Teclado",
    quantity: 100,
}

console.log(product)

// Atualizando o valor da propriedade
product.quantity = 90
console.log(product)

// Notação de colchetes
product["quantity"] = 50
console.log(product)


console.log("##########END#################")
esp_console()


// OPTIONAL CHAINING - caso ela não exista, ela não retorna um erro, mas sim um undefined

const anotherUser = {
    id: 1,
    name: "Gabriel",
    /* address: {
        street: "Avanida Brasil",
        city: "São Paulo",
        geo: {
            latitude: 47.8080,
            longitude: 17.5674,
        },
    }, */

    // message: function(){
    //     console.log(`Olá, ${this.name}!`)
    // }
}

console.log(anotherUser?.address?.street)
console.log(anotherUser?.address)
console.log(anotherUser?.name)


anotherUser.message?.()

console.log("##########END#################")
esp_console()

// Operador de Coalescência nula(??) - É um operador lógico que retorna o seu operando do lado direito quando o seu operador do lado esquerdo é null ou undefined. Caso contrário, ele rettorna o seu operando do lado esquerdo.

let content = null
// let content = "Olha eu aq"
console.log(content ?? "Conteúdo padrão")

const profile = {
    name: "Gabriel",
    avatar: undefined,
}

console.log(profile.avatar ?? "Perfil sem foto")


console.log("##########END#################")
esp_console()


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