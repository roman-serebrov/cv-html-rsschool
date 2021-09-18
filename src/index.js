import './scss/index.scss'
import Fixed from "./components/FixedMenu/Fixed"
import AsideMain from "./components/Aide__Main/AsideMain";
import Footer from "./components/Footer/Footer";
const arrComponents = [Fixed, AsideMain]
// document.querySelector('.container').innerHTML = Fixed()

const $root = document.querySelector('.container')

arrComponents.forEach(el => {
    $root.insertAdjacentHTML('beforeend', el())
})


$root.insertAdjacentHTML('afterend', Footer())

// $burger.addEventListener('click', (e) => {
//     console.log(e)
//     const $menu = document.querySelector('.menu-hidden')
//     $menu.style.display = 'block'
// })
let $burger = ''
setTimeout(() => {
    $burger = document.querySelector('.fixed__hamburger')
    $burger.addEventListener('click', (e) => {
        const $menu = document.querySelector('.header__menu')
            $menu.classList.toggle('header__menu-hidden')
    })


})

    let anchors = []
setTimeout(() => {
    const $header = document.querySelector('.header__menu')
    const nodeList = $header.querySelectorAll('a');

    for (let anchor of nodeList) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault()
            $header.classList.remove('header__menu-hidden')
            const blockID = anchor.getAttribute('href').substr(1)
            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })

        })
    }
}, 500)

setTimeout(() => {
    const $header = document.querySelector('.fixed__nav')
    const nodeList = $header.querySelectorAll('a');

    for (let anchor of nodeList) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault()
            $header.classList.remove('header__menu-hidden')
            const blockID = anchor.getAttribute('href').substr(1)
            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })

        })
    }
}, 500)


