// 10 - Calcule a média de consumo de combustível utilizada em uma viagem e o
// tempo levado durante a viagem. Você deve imprimir no console esses dois
// valores:
// Os valores de entrada serão:
// Distância percorrida na viagem em km;
// Velocidade do automóvel em km/h;
// Quantidade de combustível gasto em litros.
// Exemplo de Entrada:
// 240
// 80
// 20
// Exemplo de Saída:
// Média de consumo: 12 km/l
// Tempo da viagem: 3 horas

let distance = 240
let speed = 80
let fuel = 20
let consume = distance / fuel
let time = distance / speed
console.log('Média de consumo: ' + consume + ' km/l')
console.log('Tempo da viagem: ' + time + ' horas')
