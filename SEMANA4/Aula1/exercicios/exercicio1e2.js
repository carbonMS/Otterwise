// 1. Através da string “Maria, Paulo, Moisés, Joel, Ana”, imprima todos os nomes um em cada linha no console
// 2. Troque todas as vírgulas na string abaixo por ponto final:
// “Olá, mundo, meu, nome, é, Juca”

let myStr = 'Maria, Paulo, Moisés, Joel, Ana'
const theStr = myStr.split(',')

for (let index = 0; index < theStr.length; index++) {
  const element = theStr[index].trim()
  console.log(element)
}

const str = 'Olá, mundo, meu, nome, é, Juca'
const rep = str.replaceAll(',', '.')
console.log(rep)
