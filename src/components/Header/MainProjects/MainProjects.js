import {Title} from "../../../UI/UI";
import {date} from "../../../date";
import './mian__projects.scss'
function MainProjects () {
    return `
        <section id="projects" class="main__projects blocks-info">
            ${Title('Мои проекты', 'h2')}
            <div class="projects__content">
                ${date.splice(0, 3).map(info => renderProjectsContent(info)).join('')}
            </div>
        </section>
    `
}

function renderProjectsContent({title, description, link, desktop}) {
    return `
        <div class="block__project blocks-info">
            ${Title(title, 'h4')}
            <div class="project__description">
                <h5>${description}/<span>${desktop ? ' desktop' : ' git'}</span></h5>
            </div>
            <div class="link__project">
                <a href="${link}" target="_blank">Перейти</a>
            </div>
        </div>
    `
}

export default MainProjects