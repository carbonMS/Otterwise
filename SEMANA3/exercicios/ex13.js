// 13 - Faça um programa que recebe um array e uma função como parâmetro e
// percorre todo o array aplicando a função em cada um dos elementos do array.
// Exemplo de Entrada:
// [1, 8, 6, 13, 7, 9, 15, 22, 356, 4, 3]
// multiplicaPorDez
// Exemplo de Entrada 2:
// [10, 80, 60, 130, 70, 90, 150, 220, 3560, 40, 30]
// dividePorCinco
// Exemplo de Saída:
// [10, 80, 60, 130, 70, 90, 150, 220, 3560, 40, 30]
// Exemplo de Saída 2:
// [2, 16, 12, 26, 14, 18, 30, 44, 712, 8, 6]

const numbers = [1, 8, 6, 13, 7, 9, 15, 22, 356, 4, 3]

const multiplyByTen = (array) => {
  for (let index = 0; index < array.length; index++) {
    console.log(array[index] * 10)
  }
}

multiplyByTen(numbers)

console.log('---------------')

const divideByFive = (array) => {
  for (let index = 0; index < array.length; index++) {
    console.log(array[index] / 5)
  }
}

divideByFive(numbers)
