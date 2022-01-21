// 2 - Dado um array de números, faça um programa que teste se este array
// contém um valor específico. Tanto o valor quanto o array serão valores de
// entrada.
// Exemplo de Entrada:
// [1, 3, -12, 33, -1, 9, 110, -1168, 252, -15253, 2127]
// 9
// Exemplo de Saída:
// O valor foi encontrado no Array.

const numbers = [1, 3, -12, 33, -1, 9, 110, -1168, 252, -15253, 2127]
let found = 9

const findNum = numbers.find((num, index, array) => {
  if (found === array[index]) {
    found = `O valor (${num}) foi encontrado no Array`
  }
})
console.log(found)
