import './main__code.scss'
import {Title} from "../../../UI/UI";
function MainCode() {
    return `
    <section id="code" class="my-code blocks-info">
                    ${Title('Пример кода', 'h2') }
                    <pre class="main__code-text">
                        <code class="htmlJS">
                        
                        
        <span class="const">const</span> groupByField = (arr, field) => arr.reduce((acc, item) =>  {
              <span class="const">const</span> fieldValue = item[field];
            if (!acc[fieldValue]) {
                acc[fieldValue] = [];
            }
            acc[fieldValue].push(item);
            return acc;
        }, {});
                
                        </code>
                    </pre>
                    <div class="profile-codewars">
                        <ul>
                            <li>Профиль на: <a href="https://www.codewars.com/users/roman-serebrov" target="_blank">Codewars</a></li>
                        </ul>
                    </div>
                </section>
    `
}

export default MainCode