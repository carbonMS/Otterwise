import fs from 'fs'

const data = fs.readFileSync('./lista.csv', 'utf8')
// console.log(data)
const someText = data.replace(/(\r\n|\n|\r)/gm, ' ')
// console.log(someText)
const splitter = someText.split(' ')
// console.log(splitter)
const backToString = splitter.toString()
// console.log(backToString)
const reSplitter = backToString.split(',')
// console.log(reSplitter)

const products = `${reSplitter[5]},${reSplitter[8]},${reSplitter[11]},${reSplitter[14]}`
const treatedProducts = products.split(',')

// console.log(treatedProducts)

const prices = `R$${reSplitter[6]},R$${reSplitter[9]},R$${reSplitter[12]},R$${reSplitter[15]}`
const treatedPrices = prices.split(',')
// console.log(treatedPrices)

//------------FUNÇÃO QUE GERA OS OBJETOS ------------------

const formater = treatedPrices.map((acc, index) => {
  return {
    id: index + 1,
    name: treatedProducts[index],
    preco: treatedPrices[index],
  }
})
console.log(formater)

//---------------------------------------------------------

const saveToJSON = (infos, fileName) => {
  const parsedInfo = JSON.stringify(infos)
  fs.writeFileSync(fileName, parsedInfo)
}

const main = (index) => {
  saveToJSON(formater, 'teste.json')
}

main()
