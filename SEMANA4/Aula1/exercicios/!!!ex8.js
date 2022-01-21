// 8 - [REFATORAÇÃO] Dado um array de nomes, faça um programa que tenha
// como entrada um valor à ser pesquisado e retorne se o nome existe ou não no
// array.
// Exemplo de Entrada:
// [‘Juliana’, ‘Pedro’, ‘Regina’, ‘João’, ‘Patrícia’, ‘Gabriel’, ‘Carlos’, ‘Carla’]
// ‘Carla’
// Exemplo de Saída:
// O nome Carla existe no Array.

const names = [
  'Juliana',
  'Pedro',
  'Regina',
  'João',
  'Patrícia',
  'Gabriel',
  'Carlos',
  'Carla',
]
let found = 'Carla'

const findName = names.find((name, index, array) => {
  if (found === array[index]) {
    found = `O nome ${name} existe no Array`
  }
})

console.log(found)

// const findName = names.find((name, index, array) => {
//   if (name === array[index]) {
//     return `O nome ${name} existe no Array`
//   } else {
//     return `O nome ${name} não existe no Array`
//   }
// })

// console.log(findName)
