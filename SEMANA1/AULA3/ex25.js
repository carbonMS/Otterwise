// 08 - A mesma pessoa do exercício anterior quer saber o quanto ela irá pagar de
// imposto de renda em cada uma das propostas que ela recebe. Tendo por base a
// tabela abaixo realize o cálculo do imposto de renda e informe a pessoa para
// ambas as propostas.

// até 21.453,24 não paga
// de 21.453,24 até 32.151,48 paga 7,5%
// de 32.151,49 até 42.869,16 paga 15%
// de 42.869,17 até 53.565,72 paga 22,5%
// acima de 53.565,72 paga 27,5%

let pjJob = 36000
let cltJob = 34320
let tax1 = 7.5
let tax2 = 15
let tax3 = 22.5
let tax4 = 27.5
let pjTax1 = (pjJob / 100) * tax1
let pjTax2 = (pjJob / 100) * tax2
let pjTax3 = (pjJob / 100) * tax3
let pjTax4 = (pjJob / 100) * tax4

let cltTax1 = (cltJob / 100) * tax1
let cltTax2 = (cltJob / 100) * tax2
let cltTax3 = (cltJob / 100) * tax3
let cltTax4 = (cltJob / 100) * tax4

function incomeTaxpj(chooseJob) {
  if (pjJob > 21453.24 && pjJob < 32151.48)
    return 'Total de Imposto de renda PJ = ' + pjTax1
  else if (pjJob > 32151.49 && pjJob < 42869.16)
    return 'Total de Imposto de renda PJ = ' + pjTax2
  else if (pjJob > 42869.17 && pjJob < 53565.72)
    return 'Total de Imposto de renda PJ = ' + pjTax3
  else if (pjJob > 53565.72) return 'Total de Imposto de renda PJ = ' + pjTax4
}

console.log(incomeTaxpj())

function incomeTaxclt(choosejob) {
  if (cltJob > 21453.24 && cltJob < 32151.48)
    return 'Total de Imposto de renda CLT = ' + cltTax1
  else if (cltJob > 32151.49 && cltJob < 42869.16)
    return 'Total de Imposto de renda CLT = ' + cltTax2
  else if (cltJob > 42869.17 && cltJob < 53565.72)
    return 'Total de Imposto de renda CLT = ' + cltTax3
  else if (cltJob > 53565.72)
    return 'Total de Imposto de renda CLT = ' + cltTax4
}

console.log(incomeTaxclt())
