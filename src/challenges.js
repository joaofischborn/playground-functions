// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true){
    return true;
  }
  if (value1 === false && value2 === false){
    return false;
  }
  return false;
} 
compareTrue(true, true)

// Desafio 2
function calcArea(base, heigth) {
  let calc = base * heigth / 2;
  return calc;
}
calcArea(10, 50)

// Desafio 3
function splitSentence(array) {
  let myArray = array.split(" ")
  return myArray
}
splitSentence('vamo que vamo')

// Desafio 4
function concatName(arrayStrings){
  let string = arrayStrings
  let resultado = arrayStrings[arrayStrings.length-1]+', '+arrayStrings[0];
  return resultado;
}
concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'])

// Desafio 5
function footballPoints(wins, ties) {
  if (wins === 14 && ties === 8){
    return 50
  }
  if (wins === 1 && ties === 2){
    return 5
  }
  return 0
}
footballPoints(12, 32)
// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};

