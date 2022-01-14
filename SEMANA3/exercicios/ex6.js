// 6 - [REFATORAÇÃO] Dado um array de números, faça um programa que imprima
// na tela somente os números positivos.
// OBS: Para melhorar a resolução desse problema, crie funções que também
// imprimem os números negativos, os pares, os ímpares e realize a contagem de
// cada um deles.
// Os valores de entrada serão:
// Array;
// Exemplo de Entrada:
// [1, -7, -23, 25, -19, 13, 10, -8, 52, -153, -127]
// -----------------
// [-5, -1467, 32, 28, 65, -2, -49, -63, 22, -13, 255 ]

const numbers = [1, -7, -23, 25, -19, 13, 10, -8, 52, -153, -127]

const checker = (array) => {
  let positive = 0
  for (let index = 0; index < array.length; index++) {
    if (array[index] > 0) {
      positive++
    }
  }
  let negative = 0
  console.log(`${positive} número(s) positivo(s)`)
  for (let index = 0; index < array.length; index++) {
    if (array[index] < 0) {
      negative++
    }
  }
  console.log(`${negative} número(s) negativo(s)`)
  let impar = 0

  for (let index = 0; index < array.length; index++) {
    if (array[index] % 2) {
      impar++
    }
  }
  console.log(`${impar} número(s) impar(es)`)
  let par = 0

  for (let index = 0; index < array.length; index++) {
    if (array[index] % 2 === 0) {
      par++
    }
  }
  console.log(`${par} número(s) par(es)`)
}

checker(numbers)
