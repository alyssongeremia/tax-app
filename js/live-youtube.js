const btnLive = document.getElementById('btn-live')
const btnClose = document.querySelector('.close-live')
const live = document.querySelector('.live-youtube')

btnLive.addEventListener('click', () => {
    live.classList.toggle('hidden')
    addLive()
})

function addLive() {
    live.innerHTML = `
        <i class="ph ph-x close-live" title="Fechar live"></i>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/9UMxZofMNbA?si=xpNfdrVZEH-OpFLV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    `
}

btnClose.addEventListener('click', () => {
    live.classList.add('hidden')
})