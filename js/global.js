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