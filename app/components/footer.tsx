export function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-md">
                        <p>Website designed by me, Angel. Coded in <a href="https://code.visualstudio.com/" target="_blank">Visual Studio Code</a> and built with <a href="https://nextjs.org/" target="_blank">Next.js</a> and <a href="https://getbootstrap.com/" target="_blank">Bootstrap</a>. Check it out on <a href="https://github.com/noaaj/Portfolio" target="_blank">Github</a>.</p>
                        <img src="/github.png" alt="Github Logo" className='socialImage' /><a href="https://github.com/noaaj" target="_blank">Github</a>
                        <img src="/linkedin.webp" alt="LinkedIn Logo" className='socialImage' /><a href="https://www.linkedin.com/in/angelnoa/" target="_blank">LinkedIn</a>
                    </div>
                    <div className="col-md copyright">
                        <p>&copy; {new Date().getFullYear()} <a href="https://angelnoa.com/">angelnoa.com</a></p>
                    </div>
                </div>
            </div>
        </footer>
    );
}