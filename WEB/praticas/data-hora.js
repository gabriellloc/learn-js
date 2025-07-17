// Exibe data e hora atual
console.log(new Date())

// Data e hora de referência
console.log(new Date(0))

// Exibe o número de milissegundos 
console.log(new Date().getTime())

console.log(new Date(2024, 11, 30, 14,30,24)) // ano, mês, dia, hora, minuto, segundo

// Definindo com string
console.log(new Date("2024-07-03T14:30:00"))

console.log(new Date("July 3, 2024 14:30:23"))



// Como obter as informações da data e hora
let date = new Date("2025-07-20T14:30:00")
console.log(date)

// Dia da semana de 0 à 6 (domingo sendo o 0 e sábado o 6)
console.log(date.getDay())

// Esse exibe o dia do mês
console.log(date.getDate())

let data = new Date("2024-07-02T14:30:00")

// Formata para o dia sempre ter dois dígitos
console.log(date.getDate().toString().padStart(2, "0"))
// Mesma ideia para formatar mês

// O toLocaleString permite a formatação a partir do local e permite a edição com um objeto

console.log(" ")
console.log(date.toLocaleString("pt-br", {
    day: "2-digit",
    month: "2-digit",    
    hour: "numeric",
    minute: "numeric",
}))


let number = 12.5
console.log(number.toLocaleString("pt-br",{
    style: "currency",
    currency: "BRL",
}))


// Intl é a API de Internacionalização do ECMAScript

// Exibe informações sobre a localidade.
const currencyLocale = Intl.DateTimeFormat().resolvedOptions()
console.log(currencyLocale)

console.log(new Intl.DateTimeFormat("pt-br").format(new Date()))
console.log(new Intl.DateTimeFormat("en-US").format(new Date()))

