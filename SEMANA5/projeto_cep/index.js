// 1. Crie uma função que gere uma lista de 20 CEP’s aleatórios. Dica: uma das faixas de CEP válidas vai
// de 29000000 a 29099999. Use essa informação para gerar os CEP’s dentro dessa faixa.

// Math.floor
// Math.random
import axios from 'axios'
import fs from 'fs'
let ceps = 0
const generator = (min, max) => {
  ceps = []
  for (let index = 0; index < 20; index++) {
    ceps[index] = Math.floor(Math.random() * (max - min) + min)
  }
  return ceps
}

generator(29000000, 29099999)
console.log(ceps)
// const saveToJSON = (infos, fileName) => {
//   const parsedInfo = JSON.stringify(infos)
//   fs.writeFileSync(fileName, parsedInfo)
// }

// 2. Crie um programa que recebe uma lista de CEP’s e gera um arquivo JSON contendo as
// informações de logradouro, bairro, localidade, uf e o CEP consultado para cada um dos CEP’s válidos.
// Observação: escreva o arquivo apenas com ceps válidos e que tiveram retorno da api.

const searchFromCep = async (cep) => {
  for (let index = 0; index < cep.length; index++) {
    try {
      const { data } = await axios.get(
        `https://viacep.com.br/ws/${cep[index]}/json/`
      )
      return data
    } catch (error) {
      console.log('Ocorreu um erro')
    }
  }
}
searchFromCep(ceps)

const saveToJSON = (infos, fileName) => {
  const parsedInfo = JSON.stringify(infos)
  fs.writeFileSync(fileName, parsedInfo)
}

const main = async () => {
  try {
    const { logradouro, bairro, localidade, uf, cep } = await searchFromCep(
      ceps
    )
    const data = {
      logradouro,
      bairro,
      localidade,
      uf,
      cep,
    }
    saveToJSON(data, 'ceps.json')
  } catch (error) {
    console.log('Erro')
  }
}

main()
