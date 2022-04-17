const { compareTrue } = require("./challenges");

// Desafio 11
function generatePhoneNumber(numeros){
let phoneNumber = "(" + numeros[0] + numeros[1] + ")" + " " + numeros[2] + numeros[3] 
+ numeros[4] + numeros[5] + numeros[6] + "-" + numeros[7] + numeros[8] + numeros[9] + numeros[10]

if (numeros.length !== 11) {
  return 'Array com tamanho incorreto.'
} 
for (let i = 0; i < numeros.length; i += 1) {
  let numero = numeros[i];
  let repeticao = 0;
  for (let i2 = 0; i2 < numeros.length; i2 += 1) {
    if (numero === numeros[i2]) {
      repeticao += 1
    }
  }
  if (numeros[i] < 0 ||  numeros[i] > 9 ||  repeticao >= 3) {
    return 'não é possível gerar um número de telefone com esses valores'
  } 
}

return phoneNumber
}
generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9])

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let sum1 = lineB + lineC
  let sum2 = lineA + lineC
  let sum3 = lineA + lineB
  let sub1 = Math.abs(lineB - lineC)
  let sub2 = Math.abs(lineA - lineC)
  let sub3 = Math.abs(lineA - lineB)

  if(lineA < sum1 && lineA > sub1){
    return true
  } else if(lineB < sum2 && lineB > sub2){
    return true
  } else if(lineC < sum3 && lineB . sub3){
    return true
  } else {
    return false
  }
 
}
triangleCheck(10, 14, 8)

// Desafio 13
function hydrate(string) {
  let num = /\d+/g;
  let result = string.match(num) 
  let result2 = result.map(Number)
  let sum = 0
  for(var i = 0; i < result2.length; i += 1){
    sum += result2[i]
  }
  if(sum <= 1){
    return sum + " " + "copo de água"
  } else {
    return sum + " " + "copos de água" 
  } 
}
hydrate("10 cervejas, 5 cervejas, 1 cerveja")

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
