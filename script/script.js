const openMenuMobile = document.querySelector('.open')
const closeMenuMobile = document.querySelector('.close')
const menuMobile = document.querySelector('nav')

openMenuMobile.addEventListener('click', () => {
    menuMobile.style.display = 'flex'
})

closeMenuMobile.addEventListener('click', () => {
    menuMobile.style.display = 'none'
})