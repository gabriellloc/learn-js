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