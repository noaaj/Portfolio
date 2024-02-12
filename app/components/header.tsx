import { Navbar } from "./navbar";

export function Header({theme} : {theme:any}) {
    return (
        <header>
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-3">
                        <h1>Angel Noa</h1>
                        <button type="button" onClick={theme}>Light Mode | Dark Mode</button>
                    </div>
                    <div className="col-6">
                        <Navbar />
                    </div>
                </div>
            </div>
        </header>
    );
}