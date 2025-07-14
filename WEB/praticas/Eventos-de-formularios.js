/* Eventos de formularios */


// Formulario
// const form = document.querySelector("form")

// form.onsubmit = (event) => {
//     event.preventDefault()

//     console.log("Você fez submit no formulario")
// }


/* Evento no input */
const input = document.querySelector("input")

// Keydown - quando a tecla é pressionada
/*input.addEventListener("keydown", (event) => {
    console.log(event.key)
})*/

// Keypress - quando a tecla do tipo caractere é pressionada
input.addEventListener("keypress", (event) => {
    console.log(event.key)
})

input.addEventListener("change", () => {
    inputChange()
})

function inputChange() {
    console.log("O input mudou")
}