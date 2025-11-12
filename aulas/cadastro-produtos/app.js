const formulario = document.querySelector('#form-user')
const btnRemover = document.querySelector('#remover')
const containerCards = document.querySelector('#container-cards')

const itensProdutos = [
  // { nome: "Prod1", descricao: "", url: "http://dsadas" },
  // { nome: "Prod1", descricao: "", url: "http://dsadas" }
]

// Função gerar template card
function criarCard() { }

// Função renderizar card
function renderizarCard() { }

// Evento mandar um item para a lista
formulario.addEventListener('submit', () => {
  event.preventDefault()
  const titulo = document.querySelector('#nome').value.trim()
  const desc = document.querySelector('#desc').value.trim()
  const urlImagem = document.querySelector('#img').value.trim()
  itensProdutos.push({ titulo, desc, urlImagem })
  console.log(itensProdutos)

  formulario.reset()
})

// Evento remover item da lista
btnRemover.addEventListener('click', () => {
  alert("Isso vai deletar um card")
})

