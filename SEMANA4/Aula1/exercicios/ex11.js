// 11 - [REFATORAÇÃO] Crie um algoritmo que tem como entrada um array de
// strings e trata essas string substituindo os números por letra de acordo com a
// tabela a seguir, além disso, deve remover os espaços em branco no começo e
// fim da string, se existirem.
// Tabela:
// 1 : i
// 3 : e
// 4 : a
// 5 : s
// 0 : o
// Exemplo entrada:
// [' h3ll0 w0rld', ' w3b d3v3l0p3r ', '0tterw1s3', 'j4v4scr1pt ']
// Exemplo Saída:
// [ 'helloworld', 'webdeveloper', 'otterwise', 'javascript' ]

const words = [' h3ll0 w0rld', ' w3b d3v3l0p3r ', '0tterw1s3', 'j4v4scr1pt ']
const turnToString = words.join(',').trim()

const fixIt = turnToString
  .replaceAll('1', 'i')
  .replaceAll('3', 'e')
  .replaceAll('4', 'a')
  .replaceAll('5', 's')
  .replaceAll('0', 'o')

const backToArray = fixIt.split([','])
console.log(backToArray)
