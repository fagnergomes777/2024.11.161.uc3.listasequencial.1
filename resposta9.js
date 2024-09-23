// Faça um algoritmo que peça a temperatura em graus Fahrenheit, transforme e mostre a 
// temperatura em graus Celsius.
(C = 5 * ((F-32) / 9)).

// definindo a constante prompt
const prompt = require('prompt-sync')()

// pegando a temperatura em fahrenheit
const fahrenheit = promot(`Digite a temperatura em fahrenheit: `)

// convertendo a temperatura em numero
fahrenheit = parseFloat(fahrenheit)

// calculando a temperatura em celsius
const celsius = 5 * ((fahrenheit - 32) / 9)

// mostrando a temperatura em cesius
console.log (`A temperatura em celsius é: ${celsius.toFixed(2)}`)
