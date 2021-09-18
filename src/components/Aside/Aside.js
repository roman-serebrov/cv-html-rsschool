import avatar from '../../assets/IMG_3265.jpeg'
function Aside() {
    return `
            <aside>
                <div class="avatar">
                    <div class="avatar-img">
                        <img width="100" height="100" src="${avatar}" alt="avatar">
                    </div>
                </div>
                <div class="education br-bottom br">
                    <div class="curses">
                        <div class="education">Пройденные курсы</div>
                        <ul>
                            <li><a href="https://vladilen.ru/excel">Курс по JS, создание Excel</a></li>
                            <li><a href="https://webformyself.com/dv/?utm_medium=systema&utm_source=nashikursi&utm_campaign=dv">Веб дизайн + html/css</a></li>
                            <li><a href="https://www.udemy.com/course/react-2020-complete-guide/">React</a></li>
                        </ul>
                    </div>
                </div>
                <div class="contacts br-bottom br">
                    <div class="contacts-title">Контакты</div>
                    <ul>
                        <li><a href="mailto:romanagalrov50@gmail.com" target="_blank" rel="noopener noreferrer">Email Us</a></li>
                        <li><a href="https://t.me/roman_serebrov">Telegram</a></li>
                    </ul>
                </div>
                <div class="skills br-bottom br">
                    <div class="skills-tile">Навыки</div>
                    <div class="skills-js">
                        <ul>
                            <li>Algoritms</li>
                            <li>Data structures</li>
                            <li>Java Script</li>
                            <li>CSS/SCSS</li>
                            <li>Git</li>
                            <li>Figma</li>
                            <li>Webpack</li>
                        </ul>

                    </div>
                </div>
            </aside>
    `
}

export default Aside