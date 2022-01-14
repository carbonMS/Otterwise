// 7 - Dado um array de entrada com o nome e as notas de avaliações dos alunos,
// retorne uma lista com os alunos que tiraram 0 em todas as provas.
// Exemplo de Entrada:
// [
// {nome: ,
// notas: [ ]
// ]

const students = [
  { nome: 'Fulano', notas: [0, 0, 0] },
  { nome: 'Fulana', notas: [0, 0, 0] },
  { nome: 'Beltrano', notas: [10, 9, 9] },
]

const zeroStudents = students.filter((num, index) => {
  if (num.notas[index] === 0) {
    return num
  }
})
console.log(zeroStudents)
