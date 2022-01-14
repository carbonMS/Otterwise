// 14 - Faça um programa que receba de entrada três valores e mostre no console
// a soma dos dois maiores.

let number1 = 3
let number2 = 1
let number3 = 2

if (number1 > number2 && number2 > number3 && number3 < number2) {
  console.log(number1 + number2)
} else if (number1 > number2 && number3 > number2 && number2 < number3) {
  console.log(number1 + number3)
} else if (number3 > number1 && number2 > number3 && number1 < number2) {
  console.log(number3 + number2)
} else if (number2 > number1 && number1 > number3 && number3 < number2) {
  console.log(number2 + number1)
} else if (number3 > number2 && number2 > number1 && number1 < number2) {
  console.log(number3 + number2)
}
