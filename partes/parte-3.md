# Aprendendo JavaScript <img width="30rem" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg"/> Parte 3

<span style="display:flex; justify-content:space-between;">

[Voltar para a parte 1](../README.md)

[Ir para a parte 2](./parte-2.md)

</span>

## SUMÁRIO
- [Document Object Model](#document-object-model-dom)
- [Manipulando elementos](#manipulando-elementos)
- [Manipulando estilos](#manipulando-estilos)
- [Criando elements](#criando-elementos)


## Document Object Model (DOM)
É a representação de dados dos objetos que compõem a estrutura e o conteúdo de um documento na Web (Uma página HTML é um documento)

O DOM representa o documento com nós e objetos (Estrutura de árvore) que pode ser acessado e modificado.

    console.log(document)

O <code>document</code> por padrão já é considerado como uma variável pelo javaScript que vai armazenar todo o conteúdo da página WEB.

    const GetId = document.getElementById(" ID DO ELEMENTO ")

    const GetClass = document.getElementsByClassName(" CLASS DO ELEMENTO ")

A forma mais moderna de pegar um document, é com o <code>querySelector</code>.

    const guest = document.querySelector("# ID DO ELEMENTO")

    const guest2 = document.querySelectorAll(". CLASS DO ELEMENTO")

No querySelector, colocamos o <code>#</code> para indentificar um ID e um <code>.</code> para uma class, assim como no CSS.

## Manipulando elementos
Para manipular os elementos, primeiro é necessario armazenar em uma variável.

    const guest = document.querySelector("#guest-1")

Com a variável declarada, utilizamos o <code>.</code> em sequência da variável para buscar as suas propriedades.

    const guest = document.querySelector("#guest-1")

    console.log(guest.textContent)

O <code>textContet</code> vai exibir no console o texto que foi encontrado dentro de <code>#guest-1</code>.

Para atribuir um novo conteúdo, vamos modificar o <code>textContent</code> da variável:

    const guest = document.querySelector("#guest-1")
    
    guest.textContent = "Gabriel"

    console.log(guest.textContent)

    // Saída
    Gabriel


Maneiras de manipular o elemento:

- <code>TextContent</code>
    - Retorna o conteúdo visível e oculto.
- <code>innerText</code>
    - Retorna somente o conteúdo visível.
- <code>innerHTML</code>
    - Retorna o HTML como texto.

## Manipulando Estilos
Para manipular estilos, fazemos dessa maneira:

    const input = document.querySelector("#name")

    input.classList.add("input-error")

O classList possui diversar funções, uma delas é adicionar com <code>add</code>.
<br>
Para remover uma class:

    const input = document.querySelector("#name")

    input.classList.remove("input-error")

Uma outra propriedade bem interessante além de <code>add</code> e <code>remove</code> é o <code>toggle</code>.
Ela verifica se o elemento já possui determinada classe: se tiver, o toggle remove; se não tiver, ele adiciona.
Isso torna o código mais limpo e evita erros.

    const input = document.querySelector("#name")

    input.classList.toggle("input-error")

Manipulando com Style:

    const button = document.querySelector("button")

    button.style.backgroundColor = "red"

## Criando elementos
Para criar um elemento, primeiro precisamos criar o elemento. <br>
Mas vamos por parte.

Vamos declarar o local que o elemento vai ficar. No caso, uma lista:

    const guests = document.querySelector("ul")

Agora vamos criar o elemento:

    const guests = document.querySelector("ul")

    const newGuest = document.createElement("li")
    const guestName = document.createElement("span")

Vamos revisar.<br>
Nos temos uma <code>ul</code> e queremos criar outra <code>li</code>. Dentro da <code>li</code> vai ter um <code>span</code>.

    const guests = document.querySelector("ul")

    const newGuest = document.createElement("li")
    const guestName = document.createElement("span")

    guestName.textContent = "Gabriel"

Definimos o nome que vai estar na <code>span</code>.

Agora vamos definir a <code>span</code> dentro da <code>li</code>

    const guests = document.querySelector("ul")

    const newGuest = document.createElement("li")
    const guestName = document.createElement("span")

    guestName.textContent = "Gabriel"

    newGuest.append(guestName)

Agora a <code>span</code> está dentro da <code>li</code>.
<br>
Vale lembra que a propriedade <code>append</code> adiciona após o último filho.
<br>
Para adicionar no início, utilizamos o <code>prepend</code>.