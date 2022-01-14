// 21 - Crie uma função chamada calculate que possui três parâmetros. O primeiro
// é uma string e os outros dois, números. A string será uma das seguintes opções:
// "soma", "subtrai", "multiplica", "divide". A função calculate deve retornar o
// resultado da operação (definida pela string) entre os dois números.
// Exemplo de Entrada:
// "soma"
// 3
// 5
// -----------------
// "divide"
// 21
// 7
// Exemplo de Saída:
// 8
// -----------------
// 3

function add(add, num1, num2) {
  if ((add = 'soma')) {
    return `Soma: ${num1 + num2}`
  }
}
console.log(add('soma', 2, 4))

function subtract(minus, num1, num2) {
  if ((minus = 'subtrai')) {
    return `Subtração: ${num1 - num2}`
  }
}
console.log(subtract('subtrai', 2, 4))

function multiply(times, num1, num2) {
  if ((times = 'multiplica')) {
    return `Multiplicação: ${num1 * num2}`
  }
}
console.log(multiply('multiplica', 2, 4))

function divideNum(divide, num1, num2) {
  if ((divide = 'divide')) {
    return `Divisão: ${num1 / num2}`
  }
}
console.log(divideNum('subtrai', 2, 4))
