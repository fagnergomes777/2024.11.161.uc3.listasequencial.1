// Faça um algoritmo que peça o raio de um círculo, calcule e mostre sua área

const prompt = require("prompt-sync")()

const raio = parseFloat(prompt("Digte o raio do círculo:"))

const area = cacularAreaCirculo(raio)

console.log (`A área do círculo com raio ${raio} é ${area.toFixed(2)}`)