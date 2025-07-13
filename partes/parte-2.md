# Aprendendo JavaScript <img width="30rem" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg"/> Parte 2 

<span style="display:flex; justify-content:space-between;">

[Voltar para a parte 1](../README.md)

[Ir para a parte 3](./parte-3.md)

</span>

## SUMÁRIO
- [Condicionais](#condicionais)

## Condicionais
Permite executar diferentes ações com base em uma condição(verdadeira ou falsa).

Estrutura base:

    if (condição) {
        bloco
    } else {
        bloco
    }

O <strong>if</strong> verifica a condição.<br>
O <strong>else</strong> é executado caso a condição seja falsa.

Exemplo:<br>
Cliente: <i>"Gostaria de um programa que diz se eu posso dirigir ou não com base na idade do usuário."</i>

Primeiro, para dirigir, o usuário precisa ter idade igual ou superior a 18 anos. Assim fica o código:

    let age = 14

    if (age >= 18) {
        console.log("Você pode dirigir!") // Se verdadeiro
    } else {
        console.log("Você não pode dirigir") // Se falso
    }

    // Saída
    Você não pode dirigir

Como a condição foi <strong>falsa</strong>, o código pulou o primeiro bloco e seguiu para o <code>else</code>.

Para utilizar mais de uma condição, nós podemos usar o <code>else if</code>:

    let hour = 19

    if (hour <= 12) {
        console.log("Bom dia!")
    } 
    else if (hour > 12 && hour < 18) {
        console.log("Boa tarde!")
    } 
    else {
        console.log("Boa noite!")
    }

    // Saída
    Boa noite!