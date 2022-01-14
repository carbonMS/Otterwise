// 1. Crie variáveis para armazenar algumas informações de cadastro de um estudante, são elas: nome,
// sobrenome, dia do nascimento, mês do nascimento, ano do nascimento, primeira nota e segunda nota.
// A partir dessas informações, você deve mostrar um relatório na tela da seguinte forma: Nome Completo,
// Idade, Data de Nascimento e Média:

// Exemplo de Saída:
// Nome Completo: João Pedro Bretanha
// Idade: 29
// Data de Nascimento: 11/04/1992
// Média: 8

let fullName = 'Nome Completo: Lucas Moraes da Silva'
let day = 27
let month = 03
let year = 1996
let dob = 'Data de Nascimento: ' + day + '/' + month + '/' + year
let age = 'Idade: ' + (2021 - year)
let note1 = 10
let note2 = 5
let note3 = 9
let medium = 'Média: ' + (note1 + note2 + note3) / 3

console.log(fullName)
console.log(age)
console.log(dob)
console.log(medium)
