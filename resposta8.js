// Faça um algoritmo que pergunte quanto você ganha por hora e o número de horas 
// trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês.

const prompt = require("prompt-sync")()

const valorHora =  parseFloat(promopt("Digite quanto você ganha porhora:"))

const salarioTrabalhador = parseFloat(prompt("Digite o número de horas trabalhadas no mês:"))

const salarioTotal =  cacularSalario(balorHora, horasTrabalhadas)

console.log(`Seu salário total no mês é R$ ${salarioTotal.toFixed(2)}.`)