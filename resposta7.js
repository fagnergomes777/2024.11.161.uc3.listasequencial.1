//  Faça um algoritmo que calcule a área de um quadrado, em seguida mostre o dobro desta 
// área para o usuário

const prompt = require("prompt-sync")()

const lado = parseFloat(prompt("Digite o comprimento do lado do quadrado:"))

const area = calcularAreaQuadrado(lado)

const dobroArea = calcularDobro(area)

console.log(`A área do quadrado com lado ${lado} é ${area}.`)

console.log(`O dobro da área é ${dobroArea}.`)