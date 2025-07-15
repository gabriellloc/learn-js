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

// Outra forma de acessa é:

console.log(user["email"])
console.log(user["name"]["first_Name"])

console.log("##########END#################")
esp_console()
