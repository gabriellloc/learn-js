/* ECMAScript */ 
/* JavaScript moderno */
{ // Strict mode (Modo estrito) 
    function showMessage(){
        "use strict"
        personName = "Gabriel"
        console.log(personName)
    }


    showMessage()
}

{
    // Desestruturando array 
    const data = ["Gabriel", "gabriel@email.com"]
    const [userName, email] = data
    console.log()

    // Pegando só o primeiro
    const fruits = ["banana", "apple", "Orange"]
    const [banana] = fruits
    console.log(banana)

    // ignorando o primeiro
    const [,apple] = fruits
    console.log(apple)

    // Ignorando o primeiro e o segundo
    const [,,orange] = fruits
    console.log(orange)
}

{
    // Como desestruturar objetos

    const product = {
        description: "Teclado",
        price: 150,
    }

    const {description, price} = product
    console.log(description)
    console.log(price)

    // em funções
    function newProduct({description, price}) {
        console.log("##########")
        console.log(description)
        console.log(price)
    }

    newProduct({description:"mouse", price:70})
}