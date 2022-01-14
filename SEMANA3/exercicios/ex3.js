// 3 - [REFATORAÇÃO] Uma pessoa desenvolvedora recebe frequentemente
// propostas de trabalho pela CLT(Consolidação das Leis Trabalhistas) e pela PJ
// (Pessoa Jurídica). Considerando que o trabalho como CLT envolve férias, 13°
// salário, R$ 700 de benefício e 8% mensal referente ao FGTS. Faça um programa
// que receba como entrada os dois valores mensais oferecidos e tome a decisão
// informando qual proposta a pessoa deve aceitar.

const calculate = (salaryCLT, pjSalary) => {
  const CLT = {
    vacation: salaryCLT / 12,
    decimum: salaryCLT / 13,
    extrapay: 700,
    fgts: (salaryCLT / 100) * 8,
  }

  const { vacation, extrapay, decimum, fgts } = CLT
  const totalCLT = salaryCLT + vacation + extrapay + decimum + fgts
  if (totalCLT > pjSalary) {
    return `Salário CLT = R$${totalCLT} \nCLT vale mais a pena`
  } else {
    return `Salário PJ = R$${pjSalary} \nPJ vale mais a pena`
  }
}

console.log(calculate(2000, 3000))
