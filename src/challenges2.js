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
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
