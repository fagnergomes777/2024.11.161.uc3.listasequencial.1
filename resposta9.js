// Faça um algoritmo que peça a temperatura em graus Fahrenheit, transforme e mostre a 
// temperatura em graus Celsius. (C = 5 * ((F-32) / 9)).

const prompt = require("prompt-sync")()

const fahrenheit = parseFloat(prompt("Digite a temperatura em graus Fahrenheit:"))

const celsius = fahrenheitParaCelsius(fahrenheit)

console.log(`A temperatura em graus Celsius é ${celsius.toFixed(2)}°c.`)