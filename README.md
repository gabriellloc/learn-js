# Aprendendo JavaScript
Aprendendo JavaScript do zero com cursos, desafíos e comentários. Usando o readme como bloco de notas.

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

    - var: É a forma mais antiga. Tem escopo de função e sofre hoisting, podendo causar comportamentos inesperados.

    - let: Introduzida no ES6, possui escopo de bloco e permite reatribuição.

    - const: Também tem escopo de bloco, mas não permite que a variável seja reatribuída após sua declaração.

- Prefira <code>let</code> e <code>const</code> no seu dia a dia. A <code>var</code> está praticamente aposentada e só aparece em códigos legados.

### Explicação de escopos