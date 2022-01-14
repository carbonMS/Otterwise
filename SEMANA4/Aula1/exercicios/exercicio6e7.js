// 1. Faça um programa que some todos os elementos do array abaixo e imprima na tela o somatório:

const numbers = [10, 2, 78, 1, 92, 24, 13]

const sumNum = numbers.reduce((acc, num) => {
  return acc + num
}, 0)

console.log(sumNum)

// 2. Levando em consideração o array abaixo, crie um programa que imprima na tela o valor total
// que o usuário terá que pagar.

const products = [
  { name: 'banana', price: 4.5 },
  { name: 'arroz', price: 8.3 },
  { name: 'feijão', price: 10 },
  { name: 'cebola', price: 6.3 },
]

const sumPrice = products.reduce((acc, product) => {
  return acc + product.price
}, 0)

console.log(sumPrice)
