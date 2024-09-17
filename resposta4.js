// Faça um algoritmo que peça as 4 notas bimestrais e mostre a média

const prompt = require("prompt-sync")()

const nota1 =  parseFloat(prompt("Digite a nota do primeiro bimestre:"))

const nota2 =  parseFloat(prompt("Digite a nota do segundo bimestre:"))

const nota3 =  parseFloat(prompt("Digite a nota do terceiro bimestre:"))

const nota4 =  parseFloat(prompt("Digite a nota do qaurto bimestre:"))

let media = (nota1 + nota2 + nota3 + nota4) / 4

alert(`média das notas é ${media.toFixed(2)}`)