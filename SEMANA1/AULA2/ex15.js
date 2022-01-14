// 15 - Elabore um programa que receba três valores como entrada e mostre eles
// em ordem crescente no console

let number1 = 100
let number2 = 20000
let number3 = 300000

if (number1 > number2 && number2 > number3 && number3 < number2) {
  console.log(number3 + ', ' + number2 + ', ' + number1)
} else if (number1 > number2 && number3 > number2 && number2 < number3) {
  console.log(number2 + ', ' + number3 + ', ' + number1)
} else if (number3 > number1 && number2 > number3 && number1 < number2) {
  console.log(number3 + ', ' + number2 + ', ' + number1)
} else if (number2 > number1 && number1 > number3 && number3 < number2) {
  console.log(number3 + ', ' + number1 + ', ' + number2)
} else if (number3 > number2 && number2 > number1 && number1 < number2) {
  console.log(number1 + ', ' + number2 + ', ' + number3)
}
