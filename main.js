
const sendValues = document.querySelector('.send-values')
const typeImpost = document.querySelector('#type-impost')

const newCustMessage = document.querySelector('.new-cust')
const messageImpost = document.querySelector('.message-type-impost')

const copyPrice = document.querySelector('.copy-price')
const copyMessage = document.querySelector('.copy-message')

function calculaValorUnitario(noteValueFormated, amountAcquiredFormated) {
     return unitCost = noteValueFormated / amountAcquiredFormated;
}

function somaCustoFinal(lastCostFormated, unitCost) {
    return finalCust = (lastCostFormated + unitCost).toFixed(2).replace(".", ",");
}

sendValues.addEventListener('click', (event) => {
    event.preventDefault()

    const noteValue = document.querySelector('#note-value')
    const amountAcquired = document.querySelector('#amount-acquired')
    const lastCost = document.querySelector('#last-cost')

    const noteValueFormated = Number(noteValue.value)
    const amountAcquiredFormated = Number(amountAcquired.value)
    const lastCostFormated = parseFloat(lastCost.value)

    calculaValorUnitario(noteValueFormated, amountAcquiredFormated)
    somaCustoFinal(lastCostFormated, unitCost)

    unitCost = unitCost.toFixed(2).replace(".", ",")

    newCustMessage.innerText = ` ${finalCust}`

    if(typeImpost.value == "ipi") {
        messageImpost.innerText = `Adicionado R$ ${unitCost} de IPI`
    } else if(typeImpost.value == "icms-st") {
        messageImpost.innerText = `Adicionado R$ ${unitCost} de ICMS ST`
    } else {
        messageImpost.innerText = `Adicionado R$ ${unitCost} de Frete`
    }

})

const modal = document.querySelector('dialog')

function openModal() {
    modal.classList.remove('hidden')
}

function closeModal() {
    modal.classList.add('hidden')
}

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






