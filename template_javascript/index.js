/*
===============
(1)

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)

console.log("d. ", typeof resultado)

============
bool3 é true, pois é o inverso de bool2 sendo assim:
============
a. False
b. False
c. True
============
(2)

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)

O colega não usou o código "Number()" antes das variáveis a serem somadas, o vscode irá interpretar como string e irá aparecer os dois numeros juntos

============
(3)

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = Number(primeiroNumero) + Number(segundoNumero)

console.log(soma)

Com a adição do código "Number()" vai aparecer a soma dos dois números que forem digitados


*/

/* 
exercícios de escrita de código
=============
(1)
*/

const suaIdade = prompt("Qual a sua idade?")
const idadeAmigo = prompt("Qual a idade do seu melhor amigo?")
const difIdade = Number(suaIdade) - Number(idadeAmigo)
const isMaior = difIdade >= 0
console.log(`Sua idade é maior que a do seu melhor amigo? ${isMaior} `)
alert(`Sua idade é maior que a do seu melhor amigo? ${isMaior} `)
console.log(`A diferença de idade entre você e seu melhor amigo é: ${difIdade}`);
alert(`A diferença de idade entre você e seu melhor amigo é: ${difIdade}`)

/*
=============
(2)
*/

let numPar = prompt("Insira um número par!")
console.log(`O resto da divisão deste número por 2 é ${Number(numPar) % 2 }`)
alert(`O resto da divisão deste número por 2 é ${Number(numPar) % 2 }`)

/*
============
C) O padrão é que o resto de divisões com números par resulta em 0.
D) Com números ímpares o resultado é maior do que zero.

============
(3)
*/

const idadeAnos = prompt("Qual a sua idade?")
const idadeMeses = Number(idadeAnos) * 12
console.log(`Sua idade em meses é ${idadeMeses} meses`)
const idadeDias = Number(idadeAnos) * 365
console.log(`Sua idade em dias é ${idadeDias} dias`)
const idadeHoras = Number(idadeAnos) * 8760
console.log(`Sua idade em horas é ${idadeHoras} horas`)

alert(`Sua idade em meses é ${idadeMeses} meses`)
alert(`Sua idade em dias é ${idadeDias} dias`)
alert(`Sua idade em horas é ${idadeHoras} horas`)

/*
===========
(4)
*/

const num1 = prompt("Digite um número qualquer!")
const num2 = prompt("Digite outro número qualquer!")

const maiorQue = Number(num1) > Number(num2)
const igualA = Number(num1) === Number(num2)
const divisao1 = (Number(num1) % Number(num2)) === 0
const divisao2 = (Number(num2) % Number(num1)) ===0

console.log(`O primeiro número é maior que o segundo? ${maiorQue}`)
console.log(`O segundo número é igual o segundo? ${igualA}`)
console.log(`O primeiro número é divisível pelo segundo? ${divisao1}`)
console.log(`O segundo número é divisível pelo primeiro? ${divisao2}`)

alert(`O primeiro número é maior que o segundo? ${maiorQue}`)
alert(`O segundo número é igual o segundo? ${igualA}`)
alert(`O primeiro número é divisível pelo segundo? ${divisao1}`)
alert(`O segundo número é divisível pelo primeiro? ${divisao2}`)

