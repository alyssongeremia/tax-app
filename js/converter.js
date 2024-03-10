const btnSendText = document.querySelector('#sendText')
const textToConvert = document.querySelector('#textToConvert') //text area

btnSendText.addEventListener('click', (event) => {
  event.preventDefault()

  const convertTo = document.querySelector('#tipe-letter')
  const textConverted = document.querySelector('#inner-text-converted')

  function toLower() {
    let lowerCase = textToConvert.value.toLowerCase()
    return lowerCase
  }

  if(textToConvert.value == '') {
    modalError()
    return
  } else {
    if(convertTo.value == 'lowercase') {
      let lowerCase = toLower(textConverted.value)
      textConverted.innerHTML = `<span id='text-from-copy'>${lowerCase}</span>`
    }
  
    if(convertTo.value == 'capitalize') {
      let lowerCase = toLower(textConverted.value)
      textCapitalized = capitalize(lowerCase)
  
      textConverted.innerHTML = `<span id='text-from-copy'>${textCapitalized}</span>`
    }
  
    if(convertTo.value == 'uppercase') {
      const upperCase = textToConvert.value.toUpperCase()
      textConverted.innerHTML = `<span id='text-from-copy'>${upperCase}</span>`
    }
  }

  return textConverted
})

textToConvert.addEventListener('click', () => {
  textToConvert.select()
})

function capitalize(str) {
  let result = str[0].toUpperCase()
  for(let i = 1; i < str.length; i++) {
    if (str[i - 1] === ' ') {
      result += str[i].toUpperCase()
    } else {
      result += str[i]
    }
  }
  return result
}

//modal
const modalAlert = document.querySelector('.modal-alert')

function modalError() {
  modalAlert.classList.toggle('hidden')
  textToConvert.select()
  setTimeout(closeModalAlert, 4000)

  function closeModalAlert() {
    modalAlert.classList.toggle('hidden')
  }
}

//copy
const btnCopy = document.querySelector('.btn-copy')
const textFromCopy = document.querySelector('#text-from-copy')

btnCopy.addEventListener('click', () => {
  const iconCopy = document.querySelector('.icon-copy')
  const iconCopied = document.querySelector('.icon-copied')

  navigator.clipboard.writeText(textConverted.innerText)

  iconCopy.classList.toggle('hidden')
  iconCopied.classList.toggle('hidden')

  setTimeout(resetCopy, 2000)

  function resetCopy() {
    iconCopy.classList.toggle('hidden')
    iconCopied.classList.toggle('hidden')
  }
})