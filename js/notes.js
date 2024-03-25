const btnOpenNotes = document.querySelector('#btn-notes')
const screenNotes = document.querySelector('.area-wrapper')
const btnCloseNotes = document.querySelector('.close-notes')

btnOpenNotes.addEventListener('click', () => {
  screenNotes.classList.toggle('hidden')
})

btnCloseNotes.addEventListener('click', () => {
  screenNotes.classList.toggle('hidden')
})