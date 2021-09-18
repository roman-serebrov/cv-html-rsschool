import git from '../../assets/25231.png'

function Footer() {
    return `
         <footer>
        <div class="year">
            <p>2021</p>
        </div>
        <div class="me-github">
            <a href="https://github.com/roman-serebrov" target="_blank">
                <img  width="50" height="50" src="${git}" alt="me-github">
            </a>
        </div>
        <div class="rs-link">
            <a href="https://rs.school/js/" target="_blank">
                <img width="100" height="50" src="https://rs.school/images/rs_school_js.svg" alt="logo-rss">
            </a>
        </div>
    </footer>
    `
}

export default Footer