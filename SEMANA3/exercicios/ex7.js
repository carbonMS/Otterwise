// 7 - [REFATORAÇÃO] Dado um array de números como entrada, faça um
// programa que multiplique todos os valores por 10.
// OBS: Para melhorar a resolução desse problema, monte um programa que
// recebe como parâmetro o valor pelo qual os valores do array devem ser
// multiplicados.
// Exemplo de Entrada:
const numbers = [1, 8, 6, 13, 7, 9, 15, 22, 356, 4, 3]

const multiply = (multiplier) => {
  let result = 0
  for (let index = 0; index < numbers.length; index++) {
    result = numbers[index] * multiplier
    console.log(result)
  }
}
multiply(10)
