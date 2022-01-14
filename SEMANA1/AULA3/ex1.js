// 1. Crie variáveis para armazenar algumas informações de cadastro de um estudante, são elas:
// nome, sobrenome, dia do nascimento, mês do nascimento, ano do nascimento, primeira nota e segunda nota.
//  A partir dessas informações, você deve mostrar um relatório na tela da seguinte forma:
//  Nome Completo, Idade, Data de Nascimento e Média:

// Exemplo de Saída:
// Nome Completo: João Pedro Bretanha
// Idade: 29
// Data de Nascimento: 11/04/1992
// Média: 8

function studentInfo() {
  let name = 'Lucas '
  let lastName = 'Moraes da Silva'
  let day = 27
  let month = '03'
  let year = 1996
  let age = 2021 - year
  let dob = day + '/' + month + '/' + year
  let firstNote = 10
  let secondNote = 7
  let medium = firstNote + secondNote / 2
  console.log('Nome Completo: ' + name + lastName)
  console.log('Idade: ' + age)
  console.log('Data de Nascimento: ' + dob)
  console.log('Média: ' + medium)
}

studentInfo()
