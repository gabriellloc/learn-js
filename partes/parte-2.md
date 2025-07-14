# Aprendendo JavaScript <img width="30rem" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg"/> Parte 2 

<span style="display:flex; justify-content:space-between;">

[Voltar para a parte 1](../README.md)

[Ir para a parte 3](./parte-3.md)

</span>

## SUMÁRIO
- [Condicionais](#condicionais)
    - [if, else, else if](#if-else-e-else-if)
    - [swith](#swith)
    - [Tratamento de exceções](#tratamento-de-exceções)
- [Funções](#funções)

## Condicionais
Permite executar diferentes ações com base em uma condição(verdadeira ou falsa).


### if, else e else if
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


### Swith
O swith analisa caso a caso de uma condição.

Estrutura:

    let option = 1

    swith (option) {
        case 1:
            console.log("Consultar pedido)
            break
        case 2:
            console.log("Falar com a atendente)
            break
        case 3:
            console.log("Cancelar o pedido)
            break
        default:
            console.log("Opção invalida")
    }

O break interrompe a execução do switch. Caso ele não esteja presente, o JavaScript continuará executando todas as instruções abaixo do case correspondente, até encontrar um break ou o final do switch.

### Tratamento de exceções
Uma exceção é uma condição ou evento <strong>imprevisto</strong> que ocorre durante o uso da aplicação que interrompe o fluxo normal de operações.

Estrutura:

    Try {
        // Tenta executar algo
    } Catch (error) {
        // Captura o erro para tratar e armazena na variável
    } Finally {
        
    }

Primeiro ele vai executar o comando que está no bloco do <code>try</code>, caso dê erro, ele executa o <code>catch</code> e por último o <code>finally</code>. Se não der erro ele pula o catch

## Funções
É um bloco de código que realiza uma tarefa específica ou calcula um valor.<br>
Ela pode ser chamada(ou invocada) várias vezes.<br>
Funções ajudam a organizar o código, tornando-o reutilizável e mais fácil de entender.

    function message() {
        console.log("Olá")
    }

    message()

    // Saída
    Olá

<strong>Parâmetros:</strong> É a variável que irá receber um valor em uma função.<br>
<strong>Argumentos:</strong>É o valor que é passado para a função.

Exemplo de parâmetro e argumento:

    function message(username){
        console.log("Olá", username)
    }

    message("Gabriel")
    message("Ana")

    // Saída
    Olá Gabriel
    Olá Ana

Sempre que formos usar os resultados fora da função, nós iremos utilizar o <code>return</code>

    function sum(a,b){
        let result = a + b

        return result
    }

    let response = sum(7 + 3)
    console.log(response)

    // Saída
    10
