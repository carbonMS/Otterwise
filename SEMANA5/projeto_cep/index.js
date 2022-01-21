// 1. Crie uma função que gere uma lista de 20 CEP’s aleatórios. Dica: uma das faixas de CEP válidas vai
// de 29000000 a 29099999. Use essa informação para gerar os CEP’s dentro dessa faixa.

// Math.floor
// Math.random

const generator = (min, max) => {
  const cep = []
  for (let index = 0; index < 20; index++) {
    cep[index] = Math.floor(Math.random() * (max - min) + min)
  }
  return cep
}

console.log(generator(29000000, 29099999))

// 2. Crie um programa que recebe uma lista de CEP’s e gera um arquivo JSON contendo as
// informações de logradouro, bairro, localidade, uf e o CEP consultado para cada um dos CEP’s válidos.
// Observação: escreva o arquivo apenas com ceps válidos e que tiveram retorno da api.
