const btnGenerateTag  = document.querySelector('#generate')
const btnGeneratePdf = document.querySelector('#generate-pdf')
const btnClearScreen = document.querySelector('#clear-screen')

const name = document.querySelector('#name-product')
const code = document.querySelector('#code-product')
const sale = document.querySelector('#value-product')

const tagsScreen = document.querySelector('#number-tags')
let tags = 0

name.addEventListener('click', () => {
  name.select()
})

code.addEventListener('click', () => {
  code.select()
})

sale.addEventListener('click', () => {
  sale.select()
})

btnClearScreen.addEventListener('click', () => {
  clearScreen()
})

name.select()

function clearScreen() {
  let screen = document.querySelector('#screen')

  if(confirm('Excluir todas as etiquetas?') == true) {
    screen.innerHTML = ``
    const formInputs = document.querySelector('form')
    formInputs.reset()
    name.select()
    tags = 0
    tagsScreen.innerHTML = tags
  } else {
    return
  }
}

btnGenerateTag.addEventListener('click', (event) => {
  event.preventDefault()

  name.select()

  const amount = document.querySelector('#amount-tag')
  const screen = document.querySelector('#screen')

  screen.innerHTML += `

    <div class='tag'>
      <span class='title'>${name.value}</span>
      <span>Código: ${code.value}</span>
      <span>Valor: R$ ${sale.value}</span>
    </div>
  `

  tags = tags +1
  tagsScreen.innerHTML = String(tags).padStart(2, '0')
})

btnGeneratePdf.addEventListener('click', () => {
  document.title = `Etiquetas - ${tags}`
  window.print()
  document.title = 'Gerar etiquetas'
})