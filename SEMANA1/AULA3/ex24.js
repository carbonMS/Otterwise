// 07 - Uma pessoa desenvolvedora recebe frequentemente propostas de trabalho
// pela CLT(Consolidação das Leis Trabalhistas) e pela PJ (Pessoa Jurídica).
// Considerando que o trabalho como CLT envolve férias, 13° salário, R$ 700 de
// benefício e 8% mensal referente ao FGTS. Faça um programa que receba como
// entrada os dois valores mensais oferecidos e tome a decisão informando qual
// proposta a pessoa deve aceitar.

let cltJob = 2000
let pjJob = 2000
let vacation = cltJob / 12
let salary13 = cltJob / 13
let extraPay = 700
let fgts = 8
let fgtsCut = (cltJob / 100) * fgts
let addClt = cltJob - fgtsCut + vacation + salary13 + extraPay
let totalClt = addClt
let totalPj = pjJob

function bestJob(chooseOne) {
  if (totalClt > totalPj)
    return (
      'Valor mensal CLT com todos benefícios: ' +
      totalClt +
      ', aceitar trabalho CLT'
    )
  else return 'Valor mensal PJ: ' + totalPj + ', aceitar trabalho PJ'
}

console.log(bestJob())
