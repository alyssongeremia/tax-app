const btnLive = document.getElementById('btn-live')
const live = document.querySelector('.live-youtube')
const btnClose = document.getElementById('close-live')

function addLive() {
    live.innerHTML = `
        <i class="ph ph-x" id="close-live" title="Fechar live" onclick="removeLive()"></i>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/9UMxZofMNbA?si=xpNfdrVZEH-OpFLV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    `
}

function removeLive() {
    live.classList.toggle('hidden')
    live.innerHTML = ``
}

btnLive.addEventListener('click', () => {
    live.classList.toggle('hidden')
    addLive()
})
