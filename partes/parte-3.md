# Aprendendo JavaScript <img width="30rem" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg"/> Parte 3

<span style="display:flex; justify-content:space-between;">

[Voltar para a parte 1](../README.md)

[Ir para a parte 2](./parte-2.md)

</span>

## SUMÁRIO
- [Document Object Model](#document-object-model-dom)


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