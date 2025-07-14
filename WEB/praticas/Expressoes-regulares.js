/* Expressões regulares */

const input = document.querySelector("input")
const form = document.querySelector("form")

/*
input.addEventListener("input", ()=>{
    const value = input.value

    const regex = /\D+/g
    
    // Retorna o padrão encontrado na string
    // console.log(value.match(regex))
    

    // Testa se atende ao padrão
    // const isValid = regex.test(value)
    // console.log(isValid)
})*/

form.addEventListener("submit", (event) =>{
    event.preventDefault()
    const regex = /\D+/g
    const value = input.value

    

    // const value = input.value.replace(regex, "")
})