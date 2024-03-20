const btnGenerateTag  = document.querySelector('#generate')
const btnGeneratePdf = document.querySelector('#generate-pdf')
const btnClearScreen = document.querySelector('#clear-screen')

const name = document.querySelector('#name-product')
const code = document.querySelector('#code-product')
const sale = document.querySelector('#value-product')

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

function clearScreen() {
  const screen = document.querySelector('#screen')

  if(confirm('Excluir todas as etiquetas?') == true) {
    screen.innerHTML = ``
  } else {
    return
  }
}

function generatePdf( name, code,sale, text) {
  let doc = new jsPDF()
  doc.text(`${name.value}`, 10, 10)
  doc.text(`Código: ${code.value}`, 10, 20)
  doc.text(`Valor: R$ ${sale.value}`, 10, 30 )
  doc.save( name.value + '.pdf')
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
})

btnGeneratePdf.addEventListener('click', () => {
  window.print()
})