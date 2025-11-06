/*
* Funcoes arrow sao funcoes anonimas ou seja sem nome
* podem ser passadas como parametros para outras funcoes
* Ou podem ser atribuidas a variaveis
* em javascript, sao conhecidas como
* "cidadão de primeira classa"
*/
// let numero = 0
// setInterval(function(){
//   numero = numero + 10
//   console.log(numero)
// }, 1000) 
//Refatorar
let numero1 = 0
const intervalo = setInterval(function () {
  numero1 = numero1 + 1
  numero1 = numero1 + 1
  console.log(numero1)
}, 1000)

setTimeout(() => {
  clearInterval(intervalo)
}, 5000)



//Refatorar


// function calc2(x, y) { }
// const calcFinal = calc2(2, 3)
// // const calculadora = function(){}
// const nomeCompleto = (nome, sobrenome) => {
//   return "Felipe"
// }
// const nomeCompleto1 = nome => {
//   return nome
// }
// const nomeCompleto2 = (nome, sobrenome) => {
//   return nome + sobrenome
// }