import {Title} from "../../../UI/UI";
import './main__expirience.scss'
function MainExperience() {
    return `
        <section id="expirience" class="experience blocks-info">
            <div class="title-experience">
               ${Title('Опыт', 'h2')}
            </div>
            <div class="description-experience">
                <p>Занимаюсю FrontEnd'om в течнии года.</p>
                <p>Что успел пройти за год:</p>
                <ul>
                    <li>Прошел несколько курсов по JS/CSS/Html/Figma</li>
                    <li>Занимаюсь с ментором</li>
                    <li>Поступил в летнюю ШКОЛУ РАЗРАБОТКИ ИНТЕРФЕЙСОВ от компании Яндекс</li>
                    <li>Прошел подготовительный этап stage0 Rolling Scopes(есть сертефикат)  <a href="https://github.com/rolling-scopes-school/tasks/tree/master/stage0" target="_blank">ссылка на задание</a></li>
                    <li>Продолжаю обучение от Rolling Scopes на stage1 <a href="https://github.com/rolling-scopes-school/tasks/tree/master/stage1" target="_blank">ссылка на задание</a> </li>
                </ul>
                
            </div>
        </section>
    
    `
}

export default MainExperience