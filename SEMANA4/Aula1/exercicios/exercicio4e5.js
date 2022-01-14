// 1. Levando em consideração o array [“joao”, “pedro”, “Gabriel”, “Mari”],
//  retorne um novo array com o seguinte padrão: [{id: 0, name: “joao”}, {id: 1: name: “pedro”}, ...]
// 2. Levando em consideração o array de usuários abaixo: [{id: 3, name: “joao”, active: false},
//     {id: 2, name: “gabriel” active: false}, {id: 1, name: “mari”, active: true},
//     {id: 0, name: “miguel”, active: false}]
// Escreva um programa que imprime na tela o nome de todos os usuários ativos
// Escreva um programa que imprime na tela quantos usuários não estão ativos
// Escreva um programa que imprime na tela se existe algum usuário ativo
// Escreva um programa que imprime na tela o array ordenado por id em ordem crescente

//1 ---------------------------------

const nameArray = ['joao', 'pedro', 'Gabriel', 'Mari']

const newNames = nameArray.map((user, index) => {
  return {
    id: index,
    name: user,
  }
})

console.log(newNames)

//2 ---------------------------------

const users = [
  { id: 3, name: 'joao', active: false },
  { id: 2, name: 'gabriel', active: true },
  { id: 1, name: 'mari', active: true },
  { id: 0, name: 'miguel', active: false },
]

const allActive = users.filter((user) => {
  return user.active
})
console.log(allActive)

const allInactive = users.filter((user) => {
  return !user.active
})
console.log(`Usuário Inativos: ${allInactive.length}`)

const isActive = users.some((user) => user.active)
if (isActive) {
  console.log('Existe algum usuário ativo')
} else {
  console.log('Não existe usuário ativo')
}

const sorted = users.sort((a, b) => {
  return a.id - b.id
})
console.log(sorted)
