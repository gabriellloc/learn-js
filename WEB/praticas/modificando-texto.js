let message = "Estou estudando os fundamentos do javaScript."

console.log(message.replace("javaScript", "Python"))

console.log(message.slice(-11))

let textWithWspace = "    Texto de exemplo   "
console.log(textWithWspace.length)

// Remove os espaços
console.log(textWithWspace.trim().length)

console.log("##########END#################")
esp_console()

const creditCard = "1234 5678 1234 4928"
console.log(creditCard.length)

const lastDigts = creditCard.slice(-4)
console.log(lastDigts)

const markedNumber = lastDigts.padStart(creditCard.length, "XXXX ")

console.log(markedNumber)

console.log("##########END#################")
esp_console()


// Separar a String
let text = "Estudar,  Aprender,  Praticar"

let separate = text.split(",")

console.log(separate)

for (let i = 0; i < separate.length; i++){
    separate[i] = separate[i].trim() // remove o espaçamento
}

console.log(separate)

let messagerr = "Estou aprendendo JavaScript"
message = message.split(" ")
console.log(messagerr)

// Unir a String
let joined = separate.join(" - ")
console.log(joined)


console.log("##########END#################")
esp_console()


let messagens = "Estou estudando os fundamentos de JavaScript"
// Obtém a posição da palavra.
console.log(messagens.indexOf("JavaScript"))


// Verificar se tem a palavra na string
console.log(messagens.toLowerCase().includes("javascript"))