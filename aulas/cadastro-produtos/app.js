const formulario = document.querySelector('#form-user')
const btnRemover = document.querySelector('#remover')
const containerCards = document.querySelector('#container-cards')
const app = document.querySelector('#app')

const itensProdutos = []

function renderizarCard() {
  containerCards.innerHTML = ''

  if (itensProdutos.length > 0) {
    app.classList.add('com-componente')
  } else {
    app.classList.remove('com-componente')
  }

  itensProdutos.forEach(item => {
    const card = document.createElement('div')
    card.classList.add('card')

    card.innerHTML = `
            <div class="imagem-container">
                <img src="${item.url}" alt="${item.nome}">
            </div>
            <h3>${item.nome}</h3>
            <p>${item.descricao}</p>
        `
    containerCards.appendChild(card)
  })
}

formulario.addEventListener('submit', (event) => {
  event.preventDefault()

  const nome = document.querySelector('#nome').value.trim()
  const descricao = document.querySelector('#desc').value.trim()
  const url = document.querySelector('#img').value.trim()

  itensProdutos.push({ nome, descricao, url })

  renderizarCard()
  formulario.reset()
})

btnRemover.addEventListener('click', () => {
  itensProdutos.pop()
  renderizarCard()
})