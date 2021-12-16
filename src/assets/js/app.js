const toggler = document.getElementById('menu-toggler')

if(toggler) {
    const menu = document.querySelector('.header__menu')
    const body = document.body
    toggler.addEventListener('click', function (e){
        e.preventDefault()
        menu.classList.toggle('_active')
        body.style.overflow = 'hidden'
    })
}

