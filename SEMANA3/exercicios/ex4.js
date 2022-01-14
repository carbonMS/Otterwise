// 4 - [REFATORAÇÃO] Dado um array de nomes, faça um programa que imprima na
// tela todos os nomes (na mesma linha).
// Os valores de entrada serão:
// Array;
// Exemplo de Entrada:
const names = ['Angela', 'Rosa', 'Ticiana', 'Carla', 'Renata']
// Exemplo de Saída:
// Angela, Rosa, Ticiana, Carla, Renata

const showNames = () => {
  const [name1, name2, name3, name4, name5] = names
  console.log(`${name1}, ${name2}, ${name3}, ${name4}, ${name5}`)
}
showNames()
