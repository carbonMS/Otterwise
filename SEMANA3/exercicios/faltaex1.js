// OBS: Você deve utilizar os conceitos vistos na última aula para realizar os exercícios
// abaixo. Procure não buscar a resposta nos exercícios que você já resolveu, resolva o
// problema como se fosse a primeira vez que você está se deparando com ele.

// 1 - [REFATORAÇÃO] Pegue um valor de entrada e calcule o menor número de
// nota(s) possíveis (cédulas) no qual o valor pode ser decomposto. As nota(s)
// consideradas são de 100, 50, 20, 10, 5, 2 e 1. A seguir mostre o valor lido e a
// relação de nota(s) necessárias

const counter = (value) => {
  let hundred = value / 100
  let fifty = value / 50
  let twenty = value / 20
  let ten = value / 10
  let two = value / 2
  let one = value / 1

  console.log(`Valor Inteiro = R$${value}`)

  console.log(`${Math.floor(hundred)} nota(s) de R$100`)

  console.log(`${Math.floor(fifty)} nota(s) de R$50`)

  console.log(`${Math.floor(twenty)} nota(s) de R$20`)

  console.log(`${Math.floor(ten)} nota(s) de R$10`)

  console.log(`${Math.floor(two)} nota(s) de R$2`)

  console.log(`${Math.floor(one)} nota(s) de R$1`)
}

counter(576)
