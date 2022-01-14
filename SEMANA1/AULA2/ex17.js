// 17 - Faça um programa que receberá a hora inicial e a hora final de um jogo. A
// seguir calcule a duração do jogo, sabendo que o mesmo pode começar em um
// dia e terminar em outro, tendo uma duração máxima de 24 horas.
// Ex: Início: 22 - Término: 06 - Tempo de Duração: 8 horas

function gameTime(startTime, endTime) {
  let fullDay = 24
  let fullGame = fullDay - startTime + endTime
  if (startTime >= endTime) {
    return fullGame + ' horas totais.'
  } else if (endTime >= startTime) {
    return fullGame - fullDay + ' horas totais.'
  }
}
console.log(gameTime(6, 10))
