// 1. Faça uma função que recebe um valor inteiro e verifica se o valor é par.
// A função deve retornar um valor booleano se for par.

function checkPar(number) {
  if (number % 2 === 0) {
    return true
  } else {
    return false
  }
}

console.log(checkPar(11))
