// Repetições

// Executa a condição até que ela se torne false
let step = 10
do {
    step ++
    console.log(step)
} while(step < 11)

// cuidado 
for (i = 0; i <= 10; i++){
    console.log(i)
}

console.log(i)

console.log(" ")
console.log("################END##################")
console.log(" ")


// for ... in executa interações a partir de um objeto e percorre as propriedades. 

let person = {
    name: "Gabriel",
    surname: "Oliveira",
    email: "gabriel@email.com",
}

let steps = 1

for (let property in person) {
    console.log(steps)
    
    // Exibe o nome da propriedade.
    console.log(property)

    // Exibe o conteúdo da propriedade
    console.log(person[property])

    // Exibe os dois
    console.log(property, person[property])

    steps++
}


let students = ["Gabriel", "Rodrigo", "Ana"]


for (let index in students){
    console.log(students[index])
}

console.log(" ")
console.log("################END##################")
console.log(" ")

//  For ... of itera sobre valores de um objeto iterável.

let estudantes = ["Gabriel", "Rodrigo", "Mário"]

for (let estudante of estudantes) {
    console.log(estudante)
}
// Objetos não funcionam com objetos não iteráveis
let user = [
    {
    name: "Gabriel",
    email: "gabriel@email.com",
}
]

for (let value of user){
    console.log(value)
}

// break 
for (let i = 0; i < 10; i++) {
    console.log(i)
    if (i === 5){
        console.log("Fim")
        break
    }
}

// continue

for (let i = 0; i<10; i++) {

    // Pulou a 5 e a 6 etapa
    if (i ===5 || i === 6){
        continue
    }

    console.log(i)
}