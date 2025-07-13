# Aprendendo JavaScript
Aprendendo JavaScript do zero com cursos, desafíos e comentários. Usando o readme como bloco de notas.

## SUMÁRIO
- [Editor de código](#editor-de-código) 
- [Objetivo e funcionalidade](#objetivo-e-funcionalidade)
- [Conectando o js](#conectando-o-js)
- [Comentários](#comentários)
- [Variáveis e constantes](#variáveis-e-constantes)
    - [Explicação de escopos](#explicação-de-escopos)
    - [Hoisting](#hoisting-levantar-ou-içar)
- [Tipos de dados](#tipos-de-dados)
    - [String](#string)

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

    let nome = "Gabriel"

Neste caso, o tipo da variável <code>nome</code> é string.

As <strong>strings</strong> pode ser criadas com aspas simples (' '), aspas duplas (" ") ou crase (``).


