/* Eventos */

/* Executa sempre que a página for carregada */
// window.addEventListener("load", () => {
//     console.log("A página foi carregada")
// })


/* Executa sempre ao click e impede que a página de reload */
// addEventListener("click", (event) => {
//     event.preventDefault()

//     console.log(event.target)
// })


/* Eventos em um elemento especifico */

const ul = document.querySelector("ul")

ul.addEventListener("scroll", (event) => {

    if (ul.scrollTop > 300) {
        console.log("Fim da lista")

        ul.scrollTo({ // Manipula a posição do scroll
            top:0,
            behavior: "smooth",
        })
    }
})

const button = document.querySelector("button")
button.addEventListener("click", (event) =>{
    event.preventDefault()
    
    console.log("Clicou")
})