import {Title} from "../../../UI/UI";
import certificate from '../../../assets/certeficat.png'
function MainCertificate() {
    return `
        <section id="certificate" class="main__certificate blocks-info">
            ${Title('Сертификат', 'h2')}
            <div class="certificate__block">
                <img width="100%" height="400" src="${certificate}" alt="certificate">
            </div>
        </section>
    `
}

export default MainCertificate