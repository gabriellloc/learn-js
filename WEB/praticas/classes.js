// Classes - Criar Objetos

class Person {
    constructor(name){
        console.log("Olá,", name)
    }    
}

const person = new Person("Gabriel")


/////////////////////////////////////
console.log(" ")
console.log("#################END#####################")
console.log(" ")
/////////////////////////////////////////

class Product {
    constructor(name){
        this.name = name
    }
}

const product1 = new Product("keyboard")
console.log(product1.name)

const product2 = new Product("Mouse")
console.log(product2.name)


///////////////////////////
console.log(" ")
console.log("#################END#####################")
console.log(" ")
///////////////////////
class User {
    constructor(name, email){
        this.name = name
        this.email = email
    }

    sendEmail(){
        console.log("Email enviado para", this.name, "no endereço", this.email)
    }
}

const user = new User("Gabriel", "gabriel@email.com")
user.email = "marcos@email.com"
user.sendEmail()

////////////////////////////////////

console.log(" ")
console.log("#################END#####################")
console.log(" ")

class User {
    static showMessage(message){
        console.log(message)
    }
}

// const user = new User()
// user.showMessage()

User.showMessage("Olá")


///////////////////////////////
console.log(" ")
console.log("#################END#####################")
console.log(" ")
///////////////////////////////

class Animal {
    constructor(name){
        this.name = name
    }

    makeNoise(){
        console.log("Algum som genérico do animal")
    }
}

// Dog
class Dog extends Animal{
    makeNoise(){
        console.log("Woof! Woof")
    }
}
const dog = new Dog("Jit")
dog.makeNoise()
console.log(dog.name)

// Cat
class Cat extends Animal{
    makeNoise(){
        console.log("Miauu miauu")
    }
}
const cat = new Cat("Mia")
cat.makeNoise()
console.log(cat.name)


///////////////////////////////
console.log(" ")
console.log("#################END#####################")
console.log(" ")
///////////////////////////////

// Como utilizar classes e lidar com exceções

let obj = [17]
let index = 300

try {
    obj.execute()

    if (!obj.includes(17)){
        throw new Error("O número 17 não está disponível")
    }

    if (index > 100){
        throw new RangeError("Número está fora do intervalo")
    }
} catch (error) {
    if (error instanceof TypeError){
        console.log("Método indisponível")
    } else if (error instanceof RangeError){
        console.log(error.message)
    } else {
        console.log(error)
    }
}

///////////////////////////////
console.log(" ")
console.log("#################END#####################")
console.log(" ")
///////////////////////////////

class MyCustomError {
    constructor(message){
        this.message = "CLASSE DE ERRO CUSTOMIZADA: " + message
    }
}

try {
    throw new MyCustomError("Erro personalizado lançado!")

} catch (error){
    if(error instanceof MyCustomError){
        console.log(error.message)
    } else {
        console.log("Não foi possível executar")
    }
}
