import { Navbar } from "./navbar";
export function Header({ headerProps }: { headerProps: any }) {
    console.log(headerProps.modeButton);
    return (
        <header>
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-4 d-flex justify-content-start align-items-center">
                        <h1>Angel Noa</h1>
                        <input type="checkbox" checked={headerProps.modeButton} id="darkmode-toggle" />
                        <label htmlFor="darkmode-toggle" onClick={headerProps.switchTheme}>
                            <svg className="sun" fill="#C6C6C6" height="120px" width="120px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512.00 512.00" xmlSpace="preserve" stroke="#C6C6C6" stroke-width="0.00512"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="3.072"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M512,256l-48.597-47.361l23.288-63.746l-64.386-21.495l-6.678-67.546l-67.338,8.465L312.961,6.364L256,43.31 L199.039,6.364l-35.328,57.951l-67.338-8.466l-6.678,67.546L25.308,144.89l23.288,63.747L0,256l48.597,47.361l-23.288,63.746 l64.386,21.495l6.678,67.546l67.338-8.465l35.329,57.952L256,468.69l56.961,36.945l35.328-57.951l67.338,8.466l6.678-67.546 l64.386-21.495l-23.288-63.747L512,256z M256,403.777c-81.615,0-147.777-66.162-147.777-147.777S174.385,108.223,256,108.223 S403.777,174.385,403.777,256S337.615,403.777,256,403.777z"></path> </g> </g> </g></svg>
                            <svg className="moon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3.32031 11.6835C3.32031 16.6541 7.34975 20.6835 12.3203 20.6835C16.1075 20.6835 19.3483 18.3443 20.6768 15.032C19.6402 15.4486 18.5059 15.6834 17.3203 15.6834C12.3497 15.6834 8.32031 11.654 8.32031 6.68342C8.32031 5.50338 8.55165 4.36259 8.96453 3.32996C5.65605 4.66028 3.32031 7.89912 3.32031 11.6835Z" stroke="#242424" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                        </label>
                    </div>
                    <div className="col-6">
                        <Navbar />
                    </div>
                </div>
            </div>
        </header>
    );
}