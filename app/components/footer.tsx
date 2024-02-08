export function Footer() {
    return (
    <footer>
        <div className="container">
            <div className="row align-items-center justify-content-between">
                <div className="col">
                    <p>&copy; {new Date().getFullYear()} angelnoa.com </p>
                </div>
                <div className="col">
                    <p>Website designed by me, Angel. Coded in <a href="https://code.visualstudio.com/" target="_blank">Visual Studio Code</a> and built with <a href="https://nextjs.org/" target="_blank">Next.js</a> and <a href="https://getbootstrap.com/">Bootstrap</a>. Check it out on <a href="https://github.com/noaaj/Portfolio" target="_blank">Github</a>.</p>
                </div>
            </div>
        </div>
    </footer>
    );
}