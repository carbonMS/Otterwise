// 8 - [REFATORAÇÃO] Crie um algoritmo que tem como entrada um array de notas,
// e imprime no console a média aritmética dessas notas.
// OBS: Para melhorar a resolução desse problema, monte um programa que
// retorna a média aritmética independente do tamanho do array.
// Exemplo Entrada:
const notes = [6, 8, 7, 10, 20, 5]

const medium = (array) => {
  let result = 0
  let calculus = ''
  for (let index = 0; index < array.length; index++) {
    result += array[index]
    calculus = result / array.length
  }
  console.log(`Média: ${calculus}`)
}
medium(notes)
