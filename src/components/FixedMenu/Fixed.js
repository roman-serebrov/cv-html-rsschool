import photo from '../../assets/profile.png'

function Fixed () {
    return `
        <header class="fixed">
            <div class="fixed__wrap wrap">
                <div class="fixed__hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div class="fixed__logo">
                    <label>CV</label>
                </div>
                <nav class="fixed__nav">
                    <ul>
                        <li><a href="#card">Обо мне</a></li>
                        <li><a href="#description">Информация</a></li>
                        <li><a href="#expirience">Опыт</a></li>
                        <li><a href="#projects">Проекты</a></li>
                    </ul>
                </nav>
                <div class="fixed__profile">
                    <a href="#">
                        <img width="30" height="30" src="${photo}" alt="profile_page">
                    </a>
                </div>
            </div>
            <div class="header__menu"> 
                <nav class="fixed__menu">
                    <ul>
                        <li class="br"><a href="#card">Обо мне</a></li>
                        <li class="br"><a href="#description">Информация</a></li>
                        <li class="br"><a href="#expirience">Опыт</a></li>
                        <li class="br"><a href="#projects">Проекты</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    `
}
export default Fixed

