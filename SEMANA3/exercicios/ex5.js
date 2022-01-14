// 5 - [REFATORAÇÃO] Crie um algoritmo que tem como entrada um número e
// imprime a sua tabuada do 1 ao 10.
// OBS: Para melhorar a resolução desse problema, monte um código que aceite
// um segundo valor e irá imprimir a tabuada de 1 até esse valor.

const multiplier = (num1) => (num2) => {
  let result = ''

  for (let index = 1; index < 11; index++) {
    result = `${index} x ${num1} = ${num1 * index}`
    console.log(result)
  }
  console.log(`----------------`)
  let result2 = ''
  for (let index = 1; index < 11; index++) {
    result2 = `${index} x ${num2} = ${num2 * index}`
    console.log(result2)
  }
}

multiplier(5)(4)
