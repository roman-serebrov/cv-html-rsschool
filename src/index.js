import './scss/index.scss'
import Fixed from "./components/FixedMenu/Fixed"
const arrComponents = [Fixed]
// document.querySelector('.container').innerHTML = Fixed()

const $root = document.querySelector('.container')

arrComponents.forEach(el => {
    $root.insertAdjacentHTML('beforeend', el())
})