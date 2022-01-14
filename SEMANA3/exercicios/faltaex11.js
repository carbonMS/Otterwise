// 11 - [REFATORAÇÃO] Em uma empresa de tecnologia a área de Recursos
// Humanos precisava organizar algumas informações a respeito dos funcionários.
// Para que isso fosse possível, ele precisava criar um programa que entregasse a
// lista de funcionalidades abaixo.
// Tendo como entrada um array de objetos crie funções que realizam as seguintes
// operações:
// ● Ordena o Array em ordem crescente por idade;
// ● Ordena o Array em ordem decrescente por idade;
// ● Ordena o Array em ordem crescente por salário;
// ● Ordena o Array em ordem decrescente por salário;
// ● Ordena o Array em ordem crescente por senioridade;
// ● Ordena o Array em ordem decrescente por senioridade;
// OBS: Tente melhorar esse exercício utilizando os conhecimentos novos que você
// aprendeu na aula anterior.
// Exemplo de Entrada:
const users = [
  { nome: 'João', idade: 30, salario: 15000, senioridade: 'senior' },
  { nome: 'Pedro', idade: 22, salario: 10000, senioridade: 'pleno' },
  { nome: 'Carla', idade: 27, salario: 1500, senioridade: 'estagio' },
  { nome: 'Lucas', idade: 35, salario: 15000, senioridade: 'senior' },
  { nome: 'Roberta', idade: 45, salario: 5000, senioridade: 'junior' },
  { nome: 'Patrícia', idade: 19, salario: 10000, senioridade: 'pleno' },
  { nome: 'Joana', idade: 23, salario: 5000, senioridade: 'junior' },
]

// const highAge = (array) => {
//   console.log(users.sort((a, b) => (a.idade < b.idade ? 1 : -1)))
// }

// highAge(users)

// console.log('----------------')

// const lowAge = (array) => {
//   console.log(users.sort((a, b) => (a.idade > b.idade ? 1 : -1)))
// }

// lowAge(users)

// console.log('----------------')

// const highSalary = (array) => {
//   console.log(users.sort((a, b) => (a.salario < b.salario ? 1 : -1)))
// }

// highSalary(users)

// console.log('----------------')

// const lowSalary = (array) => {
//   console.log(users.sort((a, b) => (a.salario > b.salario ? 1 : -1)))
// }

// lowSalary(users)

// console.log('----------------')

// const highSeniority = (array) => {
//   let senior = 'senior' > 'pleno' > 'junior'
//   console.log(users.sort((a, b) => (a.senioridade < b.senioridade ? 1 : -1)))
// }

// highSeniority(users)

// console.log('----------------')

// const lowSeniority = (array) => {
//   let senior = 'senior' > 'pleno' > 'junior'
//   console.log(users.sort((a, b) => (a.senioridade > b.senioridade ? 1 : -1)))
// }

// lowSeniority(users)

// console.log('----------------')
