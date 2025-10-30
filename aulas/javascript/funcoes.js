// funçoes sao blocos de codigos que podem ser
// reaproveitados ao longo da execução do programa
// caracteristicas:
//   > podem ser nomeados ou nao
//   > poder receber parametros ou nao
//   > pdem retornar valores ou nao

// Declaração de função
function dizOla() {
  alert("Diz olá!")
}
function dizOlaPessoa(nome) {
  alert(`Não seja timido(a) ${nome}, Fala Oi`)
}
const jogadores = ['Neymar', 'Vini JR', 'Yuri Alberto']
const frutas = ['Banana', 'Uva', 'Maça']

function formataTexto(lista) { }

//adição
function adicao(n1, n2) {
  return n1 + n2
}
const resultadoAdicao = adicao(5, 25) + 30
console.log(`adição: ${resultadoAdicao}`)
// subtraçao
function sub(n1, n2) {
  return n1 - n2
}
const resultadoSub = sub(50, 10) - 20
console.log(`Subtração: ${resultadoSub}`)
// divisao
function div(n1, n2) {
  return n1 / n2
}
const resultadoDiv = div(50, 2) / 2
console.log(`Divisão: ${resultadoDiv}`)
// Multiplicação
function vezes(n1, n2) {
  return n1 * n2
}
const resultadoVezes = vezes(5, 20) / 2
console.log(`Multiplicação: ${resultadoVezes}`)



// function formataTexto(lista) {
//   for (let texto of lista) {
//     console.log(texto.toUpperCase())
//     console.log(texto.toLowerCase()) // deixa tudo Minuscula
//     console.log(texto.trim()) // elimina espaço em branco
//     console.log(lista.join('+')) // junta com os outros
//   }
// }
// formataTexto(jogadores)
// formataTexto(frutas)

// invocar ou chamar a função
// dizOla()
// dizOlaPessoa('Cristian Felipe')
// dizOlaPessoa('Roger')