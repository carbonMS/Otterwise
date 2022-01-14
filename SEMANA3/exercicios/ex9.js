// 9 - [REFATORAÇÃO] Dado um array de números, faça um programa que encontre
// o menor elemento deste array e sua posição. Mostre as informações
// encontradas no console.
// OBS: Para melhorar a resolução desse problema, monte um programa que
// também consegue retornar qual o maior valor e qual a sua posição.
// Exemplo de Entrada:
// [1,2,3,4,-5,6,7,8,9,10]
// Exemplo de Saída:
// Menor valor: -5
// Posição: 4

const numbers = [1, 2, 3, 4, -5, 6, 7, 8, -9, 10]

const finder = (array) => {
  let smaller = 0
  for (let index = 0; index < array.length; index++) {
    if (array[index] < index) {
      smaller = `Menor valor: ${array[index]}\nPosição: ${index}\n----------`
    }
  }
  console.log(smaller)
  let higher = 0
  for (let index = 0; index < array.length; index++) {
    if (array[index] > index) {
      higher = `Maior valor: ${array[index]}\nPosição: ${index}`
    }
  }
  console.log(higher)
}

finder(numbers)
