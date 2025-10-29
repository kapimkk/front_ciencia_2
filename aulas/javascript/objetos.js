// dodos simples: numericos, strings, boolean
// array: [1,2 , 3, 'ana']
//objetos ['nome', 'ledson', idade, 36]
// funções function somar(){}, () >= {}

// Objeto Literal
{
  // propriedade: valor
  //   key  : value
}

const perfil = {
  nome: 'Felipe Roger',
  idade: 18,
  profissao: "Medico",
  solteiro: true,
  roupas: ['camiseta', 'short', 'jeans']
}

console.log(Object.entries(perfil)) // traz chaves e valor
console.log(Object.keys(perfil)) // traz as chaves
console.log(Object.values(perfil)) // traz os valores

// let dadosperfil = []

// for (let dados in perfil) {
//   dadosperfil.push(perfil[dados])
// }
// alert(dadosperfil)

// for (let i = 0; i < perfil.lenght; i++) {
//   console.log(perfil[i])
// }


// atributos dinamicos
//perfil.roupas: ['camiseta', 'short', 'jeans']

// console.log(perfil.nome)
// console.log(perfil.idade)
// console.log(perfil.profissao)
// console.log(perfil.solteiro)
// console.log(perfil.roupas)
