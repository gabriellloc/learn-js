# Aprendendo JavaScript <img width="30rem" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg" />

O <strong>básico</strong> do JavaScript.<br>
Me chamo Gabriel Oliveira e este repositório reúne tudo o que aprendi sobre o glorioso <strong>Js</strong>.

## SUMÁRIO
- [Aprendendo JavaScript](#aprendendo-javascript)
- [Editor de código](#editor-de-código) 
- [Objetivo e funcionalidade](#objetivo-e-funcionalidade)
- [Conectando o js](#conectando-o-js)
- [Comentários](#comentários)
- [Variáveis e constantes](#variáveis-e-constantes)
    - [Explicação de escopos](#explicação-de-escopos)
    - [Hoisting](#hoisting-levantar-ou-içar)
- [Tipos de dados](#tipos-de-dados)
    - [String](#string)
    - [Number](#number)
    - [Boolean](#boolean)
    - [Undefined e Null](#undefined-e-null)
    - [Conversão e coerção de tipos](#conversão-e-coerção-de-tipos)
- [Operadores e expressões](#operadores-e-expressões)
    - [Incremento e Decremento](#incremento-e-decremento)
    - [Ordem de precedência](#ordem-de-precedência)

[Ir para a parte 2](./read/parte-2.md)

## Editor de código
A escolha de um editor de código é pessoal. <br>
Para a minha jornada, eu escolhi o <a href="https://code.visualstudio.com"> VScode (Visual Studio Code) </a>

## Objetivo e funcionalidade
JavaScript é uma linguagem de programação que, originalmente, foi criada para atuar no lado do cliente (client-side). <br>
Com o passar do tempo, passou a ser utilizada também no lado do servidor (server-side), sendo hoje amplamente usada tanto no front-end quanto no back-end.

## Conectando o Js
Para conectar o JavaScript em seu HTML, é recomendado que siga algumas regras:


    - Maneiras de formatação:
        - <script> </script>
            - Interno
        - <script src=""><script>
            - Externo
    
- Colocar sempre no fim do documento, antes da tag de fechamento do body.

## Comentários
Para fazer coméntarios basta colocar duas barras em sequência. Desta forma:

        JavaScript
            // comentário
            if (){

            }
            // outro comentário
     
- Teclas de atalho para fazer um comentário:
    - Ctrl + ; 

# Variáveis e constantes
Variáveis são espaços na memória utilizados para armazenar dados que podem ser manipulados e reutilizados ao longo da execução do programa.

No JavaScript, existem três formas de declarar variáveis: <code>var</code>, <code>let</code> e <code>const</code>:

    - var: É a forma mais antiga de declarar variáveis. Possui escopo de função, sofre hoisting e não respeita escopo de bloco. Quando declarada fora de uma função, torna-se uma variável global.

    - let: Introduzida no ES6, possui escopo de bloco e permite alterações.

    - const: Também tem escopo de bloco, mas não permite que a variável seja alterada após sua declaração.

- Prefira <code>let</code> e <code>const</code> no seu dia a dia. A <code>var</code> está praticamente aposentada e só aparece em códigos legados.

### Explicação de escopos
É a região do código onde uma determinada variável é <strong>acessível ou visível.</strong>

O escopo define o contexto no qual uma varável pode ser referenciada e modificada.
    
    Tipos de escolos:
        - Global: Variáveis declaradas fora de qualquer função ou bloco de código.
        
        - Bloco: Acessível apenas dentro do bloco de código onde foram declaradas.
        
        - Local (ou de função): Váriaveis declaradas dentro de uma função.

### Hoisting (Levantar ou içar)
Refere ao comportamento do interpretador de mover as declarações de variáveis e funções para o topo do escopo em que foram definidas, antes mesmo da execução do código.<br>
Esse comportamento possibilita usar uma variável ou função antes que ela esteja definida.

<strong>Importante:</strong> Mesmo que as declarações sejam movidas para o topo do escopo, elas precisam ser declaradas antes de serem usadas. Caso contrário, você receberá uma referência indefinida <i>(undefined)</i>.

## Tipos de dados
O tipo da variável é definida dinamicamente pelo valor atribuído <strong>(Não é necessário declarar o tipo)</strong>.<br>
Além disso, é possível reatribuir uma mesma variável com um tipo diferente.

Os tipos Primitivos de variáveis são: 

    - String: Voltada para textos.
    - Number: Para números.
    - Booleano: True or False
    - null: Nulo. Não tem nada dentro.
    - undefined: Não armazeda valor, não foi definida ainda.

Ainda tem outros como os Array e o object. Mas, eles vão ficar para outro momento.

### String
Destinadas a armazenar texto.

    let nome = "Gabriel";

Neste caso, a variável <code>nome</code> é do tipo string.

As <strong>strings</strong> pode ser criadas com aspas simples (' '), aspas duplas (" ") ou crase (``).

Template literals com a crase para construção e formatação de texto.

### Number
Destinado a armazenar números.

    let num = 18;

Neste caso, a variável <code>num</code> é do tipo number.

Os numbers são divididos em <code>inteiros</code> (positivos e negativos), e <code>float</code> (Números reais).

    18 é um número inteiro

    18.5 é um número float

### Boolean
Destinado a armazenar o estado de verdadeiro ou falso(True or False)

Será útil para validar condições e em outras ocasiões futuras.

    let isLoading = true;

Neste caso, a variável <code>isLoading</code> é do tipo bolean.<br>
Perceba que, diferente da <code>String</code>, o true não fica entre aspas nem crases, pois ele não é um texto, e sim um valor booleano (um estado lógico).

### Undefined e Null
Undefined significa indefinido.<br>
É uma variável que o JavaScript atribui de forma automática.
É atribuida para variáveis que não possuem nenhum valor.

    let dia

Não da erro de sintaxe, pois a variável exise, ela apenas não possui nenhum valor.

Já o null signica nulo.<br>
É uma variável que a gente precisa atribuir.

    let people_I_hate = null

A gente atribuiu o valor "nulo" a variável

### Conversão e coerção de tipos
<strong>Conversão</strong> ocorre de forma consciente, quando você transforma um valor de um tipo para outro, usando métodos específicos para realizar a conversão.

Converter uma String para Number:

    let value = "9" // String
    value = Number(value)
    
    //Para exibir o valor no console podemos usar:
    console.log(value)

    //Saída
    9


De Number para String:

    let age = 18 // Number
    age = age.toString() // Ou String(age)

    console.log(age)

    //Saída
    "18"


De Number para Boolean:

    let option = 1
    option = Boolean(option)
    console.log(option)

    //Saída
    true

No Bolean, todos os valores maiores ou menores que 0 (zero) são considerados <code>true</code> enquanto o próprio 0 (zero) é <code>false</code>.


Já a <strong>Coerção</strong> ocorre de forma automática. O javaScript tenta automaticamente converter um dos valores para um tipo compatível antes de realiar a operação.

    console.log("10" + 5) 
    // Estou somando uma String com um Number

Vai depender muito de navegador para navegador. O JavaScript vai acabar considerando os dois como Number ou como String, e sim, isso vai afetar o resultado.

    // Uma saída possível
    105

Considerou os dois como String e concatenou as duas Strings.

<hr>

    // Outra Saída possível
    15

Considerou os dois como Number e somou os dois.

<strong>[Ir para o próximo capítulo](./read/cap2.md)</strong>

## Operadores e expressões

Operadores<br>
<strong>Definição:</strong> São símbolos que realizam operações em operandos(valores ou variáveis).
<br>
Utilizados para manipular e comparar valores, realizar operações aritméticas, lógicas, de atribuição, entre outras.

Expressões<br>
<strong>Definição:</strong> É uma combinação de valores, variáveis, operadores e chamadas de função que, quando avaliada, resulta em um valor.

    let sum = 5 + 3

### Incremento e Decremento
Incremento:

    let num = 1
    num++
    console.log(num)
    
    //Saída
    2

Decremento:

    let num = 1
    num--
    console.log(num)
    
    //Saída
    0

Para incrementar/decrementar valores diferentes de 1:

    let num = 1
    num += 10
    console.log(num)

    //Saída
    11

O mesmo vale para o decremento.

### Ordem de precedência
É quando uma expressão contém múltiplos operadores, na programação e em expressões matemáticas, a ordem de precedência define qual operação será realizada primeiro.

<table>
    <thead>
        <tr>
            <th>Nível</th>
            <th>Categoria</th>
            <th>Operadores</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>7 (alto)</th>
            <th>Exponenciação</th>
            <th>**</th>
        </tr>
        <tr>
            <th>6</th>
            <th>Multiplicação</th>
            <th>*, /, //, %</th>
        </tr>
        <tr>
            <th>5</th>
            <th>Adição</th>
            <th>+, -</th>
        </tr>
        <tr>
            <th>4</th>
            <th>relacional</th>
            <th>==, ===, !=, <=, >=, >, <</th>
        </tr>
        <tr>
            <th>3</th>
            <th>Lógico</th>
            <th>not</th>
        </tr>
        <tr>
            <th>2</th>
            <th>Lógico</th>
            <th>and</th>
        </tr>
        <tr>
            <th>1 (baixo)</th>
            <th>Lógico</th>
            <th>or</th>
        </tr>
    </tbody>
<table>
<span style="display:flex; justify-content:end; margin-inline: 2rem;">

### [Próxima parte.](./read/parte-2.md)

</span>