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

{
    // método map
    const product = ["Teclado", "mouse", "Monitor"]

    product.map((products)=>{
        console.log(products)
    })

    // Sintaxe reduzida

    product.map((products) => console.log(products))

    // Utilizando o novo objeto retornado
    const formatted = product.map((products) => {
        // return products.toUpperCase();
        return {
            id:Math.random(),
            description: products,
        }
    })
    console.log(formatted)
}


{
    // Método filter

    const words = ["JavaScript", "HTML", "CSS", "WEB"]

    const result = words.filter((word)=>{
        return word.length > 3
    })

    console.log(result)

    const products = [
        { description:"Teclado",price:150, promotion:true},
        { description:"Mouse",price:450, promotion:true},
        { description:"Monitor",price:890,promotion:false},
    ]
    const promotion = products.filter((product)=>{
        return product.promotion === true
    })

    console.log(promotion)
}


{
    // Método findIndex()

    const values = [4,6,8,12]

    // Obtendo o primeiro índice cujo o valor é maior que 4
    console.log(values.findIndex((value) => value > 4))

    // Quando ele não encontra
    console.log(values.findIndex((value) => value > 12))
}

{
    // método find()

    const values = [5,12,8,130,44]

    const found = values.find((value) => value > 10)
    console.log(found)
}

{
    // método every

    const ages = [14,30,39,29]

    const result = ages.every((age) => age >= 18)
    console.log(result)
}

{
    // método some()

    const ages = [15,30,39,29]
    const result = ages.some((age) => age<18)
    console.log(result)
}

{
    // método reduce

    const values = [1,2,3,4,5]
    const sum = values.reduce((accumulator, currentValue, index) => {
        console.log("Accumulator",accumulator)
        console.log("CurrentValue",currentValue)
        console.log("Index", index)

        console.log("Soma", accumulator + currentValue)
        console.log("######################")
        return accumulator + currentValue
    }, 0)
}