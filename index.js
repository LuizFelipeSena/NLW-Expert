
const perguntas = [
    {
      pergunta: "O que é uma variável em JavaScript?",
      respostas: [
        "Um nome que armazena um valor",
        "Um tipo de dado",
        "Uma função que executa uma ação"
      ],
      correta: 0 // A primeira opção é a correta
    },
    {
      pergunta: "Como se declara uma variável em JavaScript?",
      respostas: [
        "var nomeDaVariavel;",
        "nomeDaVariavel = valor;",
        "valor nomeDaVariavel;"
      ],
      correta: 0 // A primeira opção é a correta
    },
    {
      pergunta: "Qual é a diferença entre == e === em JavaScript?",
      respostas: [
        "== compara apenas os valores, === compara os valores e os tipos",
        "== compara os valores e os tipos, === compara apenas os valores",
        "Não há diferença, ambos são operadores de igualdade"
      ],
      correta: 0 // A primeira opção é a correta
    },
    {
      pergunta: "O que é uma função em JavaScript?",
      respostas: [
        "Um bloco de código que pode ser chamado e executado",
        "Um objeto que contém propriedades e métodos",
        "Uma estrutura de dados que armazena vários valores"
      ],
      correta: 0 // A primeira opção é a correta
    },
    {
      pergunta: "Como se define uma função em JavaScript?",
      respostas: [
        "function nomeDaFuncao(parametros) {corpo da função}",
        "nomeDaFuncao = function(parametros) {corpo da função}",
        "Ambas as opções são válidas"
      ],
      correta: 2 // A terceira opção é a correta
    },
    {
      pergunta: "O que é um array em JavaScript?",
      respostas: [
        "Uma variável que pode armazenar vários valores",
        "Uma coleção ordenada de elementos",
        "Ambas as opções são válidas"
      ],
      correta: 2 // A terceira opção é a correta
    },
    {
      pergunta: "Como se cria um array em JavaScript?",
      respostas: [
        "var nomeDoArray = [elemento1, elemento2, ...];",
        "var nomeDoArray = new Array(elemento1, elemento2, ...);",
        "Ambas as opções são válidas"
      ],
      correta: 2 // A terceira opção é a correta
    },
    {
      pergunta: "Como se acessa um elemento de um array em JavaScript?",
      respostas: [
        "nomeDoArray[indice]",
        "nomeDoArray.elemento",
        "nomeDoArray(indice)"
      ],
      correta: 0 // A primeira opção é a correta
    },
    {
      pergunta: "O que é um objeto em JavaScript?",
      respostas: [
        "Uma variável que pode armazenar vários valores",
        "Uma coleção não ordenada de propriedades e métodos",
        "Ambas as opções são válidas"
      ],
      correta: 2 // A terceira opção é a correta
    },
    {
      pergunta: "Como se cria um objeto em JavaScript?",
      respostas: [
        "var nomeDoObjeto = {propriedade1: valor1, propriedade2: valor2, ...};",
        "var nomeDoObjeto = new Object(propriedade1: valor1, propriedade2: valor2, ...);",
        "Ambas as opções são válidas"
      ],
      correta: 2 // A terceira opção é a correta
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // Loop ou laço de repetição
  
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'perguntas-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
      } 
  
      quizItem.querySelector('dl').appendChild(dt)
  
    }
  
    quizItem.querySelector('dl dt').remove()
  
    // Coloca a pergunta na tela
    quiz.appendChild(quizItem)
  
  }