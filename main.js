
const sendValues = document.querySelector('.send-values')
const typeImpost = document.querySelector('#type-impost')

const newCustMessage = document.querySelector('.new-cust')
const messageImpost = document.querySelector('.message-type-impost')

const copyPrice = document.querySelector('.copy-price')
const copyMessage = document.querySelector('.copy-message')
const copySaleValue = document.querySelector('.copy-sale-value')

const btnImpost = document.querySelector('#new-impost')

function calculaValorUnitario(noteValueFormated, amountAcquiredFormated) {
     return unitCost = noteValueFormated / amountAcquiredFormated;
}

function somaCustoFinal(lastCostFormated, unitCost) {
    return finalCust = (lastCostFormated + unitCost);
}

const noteValue = document.querySelector('#note-value')

noteValue.focus()

sendValues.addEventListener('click', (event) => {
    event.preventDefault()

    const amountAcquired = document.querySelector('#amount-acquired')
    const lastCost = document.querySelector('#last-cost')
    const margin = document.querySelector('#margin')
    const newSaleValue = document.querySelector(".new-sale-value")

    //pega os valores das variaveis
    const noteValueFormated = Number(noteValue.value)
    const amountAcquiredFormated = Number(amountAcquired.value)
    const lastCostFormated = parseFloat(lastCost.value)
    const marginFormated = Number(margin.value/100)

    calculaValorUnitario(noteValueFormated, amountAcquiredFormated)
    somaCustoFinal(lastCostFormated, unitCost)
    somaMargem(marginFormated, finalCust)


    //adiciona a frase do console
    const valueMarginConsole = document.querySelector('#value-margin')
    valueMarginConsole.innerHTML = `<span>Valor da margem:  <span class="console-color">${valueMargin}</span></span>`
    console.log(`Margem sem arredondamento: ${valueMargin}`)

    valorFinal(valueMargin, finalCust)
    newSaleValue.innerText = `R$ ${saleValue}`

    newCustMessage.innerText = ` ${finalCust.toFixed(2).replace(".", ",")}`

    unitCost = unitCost.toFixed(2).replace(".", ",")

    if(typeImpost.value == "ipi") {
        messageImpost.innerText = `Adicionado R$ ${unitCost} de IPI`
    } else if(typeImpost.value == "icms-st") {
        messageImpost.innerText = `Adicionado R$ ${unitCost} de ICMS ST`
    } else {
        messageImpost.innerText = `Adicionado R$ ${unitCost} de Frete`
    }

    //animacao de click
    const containerAnimation = document.querySelector('.container-messages')
    const consoleAnimation = document.querySelector('.console')

    function animationsMessage() {
        containerAnimation.classList.add('enter')
        consoleAnimation.classList.add('enter')
    }

    animationsMessage()

    setTimeout(offAnimation, 500)

    function offAnimation() {
        containerAnimation.classList.remove('enter')
        consoleAnimation.classList.remove('enter')
    }


})

function somaMargem(marginFormated, finalCust) {
    const consoleMargem = document.querySelector('#console-margin')
    const consoleCust = document.querySelector('#console-cust')
    let finalCustFormated = Number(finalCust)
    consoleMargem.innerHTML = `<span>Margem: <span class="console-color">${marginFormated}</span></span>`
    consoleCust.innerHTML = `<span> Custo final: <span class="console-color">${finalCustFormated}</span></span>`
    return valueMargin = (marginFormated * finalCustFormated)
}

function valorFinal(valueMargin, finalCust) {
    return saleValue = (valueMargin + finalCust).toFixed(2).replace(".", ",")
}

//resetar
function reset() {
    const btnReset = document.querySelector("#reset")

    btnReset.addEventListener('click', ()=> {
        location.reload()
    })
}

reset()

function alternateImpost() {
    btnImpost.addEventListener('click', ()=> {
        typeImpost.focus()
    })
}

alternateImpost()

//animacao do modal ao copiar
const modal = document.querySelector('dialog')

function openModal() {
    modal.classList.remove('hidden')
}

function closeModal() {
    modal.classList.add('hidden')
}

// copia os valores para colar
copyPrice.addEventListener('click', () => {
    navigator.clipboard.writeText(newCustMessage.innerText)
    openModal()
    setTimeout(closeModal, 2200)
})

copyMessage.addEventListener('click', () => {
    navigator.clipboard.writeText(messageImpost.innerText)
    openModal()
    setTimeout(closeModal, 2200)
})

copySaleValue.addEventListener('click', () => {
    navigator.clipboard.writeText(saleValue)
    openModal()
    setTimeout(closeModal, 2200)
})

//menu de navegacao
const btnOpemMenu = document.querySelector('.open-menu')
const btnCloseMenu = document.querySelector('.close-menu')
const menu = document.querySelector('.links')

btnOpemMenu.addEventListener('click', () => {
    openMenu()
})

btnCloseMenu.addEventListener('click', () => {
    closeMenu()
})

function openMenu() {
    menu.classList.remove('hidden')
    btnCloseMenu.classList.remove('hidden')
    btnOpemMenu.classList.add('hidden')
}

function closeMenu() {
    menu.classList.add('hidden')
    btnCloseMenu.classList.add('hidden')
    btnOpemMenu.classList.remove('hidden')
}







