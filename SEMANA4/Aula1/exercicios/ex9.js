// 9 - [REFATORAÇÃO] Dado a lista de compra a seguir, faça um programa que
// imprime no console valor total. Atenção, o valor de cada item é unitário.
// Exemplo de Entrada:
const fruits = [
  { nome: 'maçã', quantidade: 2, valor: 0.5 },
  { nome: 'alface', quantidade: 1, valor: 1.73 },
  { nome: 'Água 5L', quantidade: 2, valor: 5.99 },
  { nome: 'Pão Francês', quantidade: 8, valor: 0.63 },
]
// Exemplo de Saída:
// R$ 19.75

const sumPrice = fruits.reduce((acc, product) => {
  const price = acc + product.valor * product.quantidade
  return price
}, 0)

console.log('R$ ' + sumPrice)
