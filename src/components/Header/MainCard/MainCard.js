import {Title} from "../../../UI/UI";
import './main_card.scss'
function MainCard() {
    return`
        <section id="card" class="about__me blocks-info">
            ${Title('Junior FrontEnd Developer', 'h1')}
            <div class="my__name">
                <div class="first__name br">
                    ${Title('Роман', 'h2')}
                </div>
                <div class="last__name br">
                    ${Title('Агаларов', 'h2')}
                </div>
                <div class="City br">
                    ${Title('Санкт-Петербург', 'h2')}
                </div>
                <div class="language ">
                    ${Title('Языки', 'h3')}
                    <p>Русский</p>
                    <p>Английский(Начальный)</p>
                </div>
            </div>
        </section>
    `
}
export default MainCard
