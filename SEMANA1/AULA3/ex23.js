// 23 - Crie uma função que recebe como argumento um valor em segundos,
// calcula e retorne uma string formatada HH:MM:SS (horas:minutos:segundos) .
// Exemplo de Entrada:
// 600
// -----------------
// 33567
// Exemplo de Saída:
// 0:10:0
// -----------------
// 9:19:27

let hours = 3600
let minutes = 60
let seconds = 1

function timeCheck(secs) {
  minutes = secs / 60
  hours = secs / hours
  seconds = minutes / 60
  if (hours < 24 && minutes < 60 && seconds < 60) {
    return `${hours}:${minutes}:${seconds}`
  }
}

console.log(timeCheck(600))
