// 10 - [REFATORAÇÃO] Dado a lista de compras a seguir, faça um programa que
// imprime no console o valor total. Atenção, o valor de cada item é unitário.
// Exemplo de Entrada:
// [
// { nome: 'maçã', quantidade: 2, valor: 0.5},
// { nome: 'alface', quantidade: 1, valor: 1.73},
// { nome: 'Água 5L', quantidade: 2, valor: 5.99},
// { nome: 'Pão Francês', quantidade: 8, valor: 0.63}
// ]
// Exemplo de Saída:
// R$ 19.75

const fruits = [
  { nome: 'maçã', quantidade: 2, valor: 0.5 },
  { nome: 'alface', quantidade: 1, valor: 1.73 },
  { nome: 'Água 5L', quantidade: 2, valor: 5.99 },
  { nome: 'Pão Francês', quantidade: 8, valor: 0.63 },
]

const prices = (array) => {
  const [{ quantidade, valor }] = fruits
  let totalPrice = 0
  let sum = 0
  for (let index = 0; index < array.length; index++) {
    totalPrice = quantidade * valor
    // totalPrice = fruits[index].valor * fruits[index].quantidade
    sum += totalPrice
  }
  console.log(`Preço Total: R$${sum}`)
}
prices(fruits)
