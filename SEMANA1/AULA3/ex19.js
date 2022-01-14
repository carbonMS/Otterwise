// 19 - Crie uma função chamada checkSignal que possui um parâmetro e imprime
// no console:
// "x é positivo" se o número for positivo;
// "x é negativo" se o número for negativo.
// x deve ser substituído pelo número passado como argumento.
// Exemplo de Entrada:
// 10
// -----------------
// -5
// Exemplo de Saída:
// 10 é positivo
// -----------------
// -5 é negativo

function checkSignal(number) {
  if (number > 0) {
    console.log(number + ' é positivo')
  } else {
    console.log(number + ' é negativo')
  }
}

checkSignal(-1)
