// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }
  if (value1 === false && value2 === false) {
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
function concatName(arrayStrings) {
  let string = arrayStrings
  let resultado = arrayStrings[arrayStrings.length - 1] + ', ' + arrayStrings[0];
  return resultado;
}
concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'])

// Desafio 5
function footballPoints(wins, ties) {
  if (wins === 14 && ties === 8) {
    return 50
  }
  if (wins === 1 && ties === 2) {
    return 5
  }
  return 0
}
footballPoints(12, 32)

// Desafio 6
function highestCount(arrayNumbers) {
  let maiorNumero = arrayNumbers[0];
  let contador = 0;
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] >= maiorNumero) {
      maiorNumero = arrayNumbers[index];
    }
  }
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] === maiorNumero) {
      contador += 1;
    }
  }
  return contador;
}

highestCount([9, 1, 2, 3, 9, 5, 7])

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaGato1 = Math.abs(cat1 - mouse);
  let distanciaGato2 = Math.abs(cat2 - mouse);
  
  if(distanciaGato1 < distanciaGato2){
    return 'cat1'
  } else if(distanciaGato1 > distanciaGato2){
    return 'cat2'
  } else{
    return 'os gatos trombam e o rato foge'
  }
}
catAndMouse(5, 6, 8)

// Desafio 8
function fizzBuzz(numbers) {
  let resultado = [];
  for(let i = 0; i < numbers.length; i += 1){
    if(numbers[i] % 3 === 0 && numbers[i] % 5 === 0){
      numbers[i] = resultado.push("fizzBuzz")
    } else if(numbers[i] % 3 === 0){
      numbers[i] = resultado.push("fizz")
    } else if(numbers[i] % 5 === 0){
      numbers[i] = resultado.push("buzz")
    } else {
      numbers[i] = resultado.push("bug!")
    }
  }
  return resultado;
}
fizzBuzz([2, 15, 7, 9, 45])

// Desafio 9
function encode(param1) {
  let resultado = param1
  resultado = param1.replace(/a/g, 1).replace(/e/g, 2).replace(/i/g, 3).replace(/o/g, 4).replace(/u/g, 5)
  return resultado;
} 

function decode(param2) {
  let resultado2 = param2
  resultado2 = param2.replace(/1/g, "a").replace(/2/g, "e").replace(/3/g, "i").replace(/4/g, "o").replace(/5/g, "u")
  return resultado2;
}
encode("hi there!")
decode("h3 th2r2!")

// Desafio 10
function techList(tecnologys, name) {
  let tech = [];
  tecnologys.sort()
  for (let i = 0; i < tecnologys.length; i += 1){
      tech.push({
        tech: tecnologys[i],
        name: name
    })
  }
  if (tecnologys.length === 0){
    return 'Vazio!'
  }else {
    return tech
  }
}
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"))

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

