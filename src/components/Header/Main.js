import MainCard from "./MainCard/MainCard";
import MainDescription from "../Header/MainCard/MainDescription/MainDescription";
import MainCode from "./MainCode/MainCode";
import MainProjects from "./MainProjects/MainProjects";
import MainExperience from "./MaibExpirience/MainExpirience";
import MainCerteficat from "./MainCerteficate/MainCerteficat";
function Main() {
    return `
        <main class="main__wrap">
            ${MainCard()}
            ${MainDescription()}
            ${MainCode()}
            ${MainProjects()}
            ${MainExperience()}
            ${MainCerteficat()}
        </main>
    `
}

export default Main