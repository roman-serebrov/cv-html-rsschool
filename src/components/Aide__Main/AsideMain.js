import Aside from "../Aside/Aside";
import Main from "../Header/Main";
import './AsideMain.scss'

function AsideMain() {
    return `
       <div class="aside_main_wrap wrap">
            ${Aside()}
            ${Main()}
           
        </div>
    `
}

export default AsideMain