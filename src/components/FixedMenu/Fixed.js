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
                <nav class="fixed__nav">
                    <ul>
                        <li><a href="#">Обо мне</a></li>
                        <li><a href="#">Опыт</a></li>
                        <li><a href="#">Информация</a></li>
                        <li><a href="#">Проекты</a></li>
                    </ul>
                </nav>
                <div class="fixed__profile">
                    <a href="#">
                        <img width="30" height="30" src="${photo}" alt="profile_page">
                    </a>
                </div>
            </div>
        </header>
    `
}
export default Fixed

