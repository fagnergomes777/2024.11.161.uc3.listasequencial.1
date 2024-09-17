//  Faça um algoritmo que converta metros para centímetros.

const prompt = require("prompt-sync")()

const metro = parseFloat(prompt("Digite o valor em metros"))

const centimetros =  metrosParaCentimetros(metro)

console.log(`${metro} metros são iguais a ${centimetro} centimetro`)