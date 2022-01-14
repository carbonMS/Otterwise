// 09 - Tendo como informação dois números, faça um programa que imprima na
// tela qual deles é o MAIOR e qual deles é o menor. Caso os números sejam
// iguais, informe que eles são iguais.
// Os valores de entrada serão:
// Número 1;
// Número 2;
// Exemplo de Entrada:
// 2
// 5
// -----------------
// 7
// 7
// Exemplo de Saída:
// 5 é maior que 2
// -----------------
// 7 é igual a 7

let number1 = 20
let number2 = 20

if (number1 > number2) {
  console.log(number1 + ' é maior que ' + number2)
} else if (number1 < number2) {
  console.log(number1 + ' é menor que ' + number2)
} else if ((number1 = number2)) {
  console.log(number1 + ' é igual a ' + number2)
}
