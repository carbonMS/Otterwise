// 4 - [REFATORAÇÃO] Crie um algoritmo que tem como entrada um array de notas,
// e imprime no console a média aritmética dessas notas.
// OBS: Para melhorar a resolução desse problema, monte um programa que
// retorna a média aritmética independente do tamanho do array.
// Exemplo Entrada:
const notes = [6, 8, 7, 10, 15]

const calculate = notes.reduce((acc, index) => {
  return acc + index / notes.length
}, 0)

console.log(calculate)
