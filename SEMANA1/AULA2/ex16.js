// 16 - Escreva um programa que receba como entrada dois valores. Após, o
// programa deve mostrar uma mensagem “São Múltiplos” ou “Não são Múltiplos”,
// indicando se os valores recebidos como entrada são múltiplos entre si.

function isMulitple(value1, value2) {
  if (value1 % value2 === 0 && value1 > value2) {
    console.log(`${value1} é múltiplo de ${value2}`)
  } else if (value2 % value1 === 0 && value2 > value1) {
    console.log(`${value2} é múltiplo de ${value1}`)
  } else {
    console.log(value1 + ' não é multiplo de ' + value2)
  }
}

isMulitple(20, 10)
