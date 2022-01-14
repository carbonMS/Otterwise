// Levando em consideração o array abaixo, adicione um novo elemento ao final do array com seu nome e
//  imprima no console na ordem inversa.

const array = [{ name: 'joao' }, { name: 'pedro' }]
const newName = array.concat({ name: 'Lucas' }).reverse()

console.log(newName)
