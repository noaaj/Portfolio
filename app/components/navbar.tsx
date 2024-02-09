import { useDispatch } from 'react-redux';
import { home, about, skills, work, contact } from "../features/pageSlice";

export function Navbar() {
    
    const dispatch = useDispatch();

    return (
    <nav>
        <ul className="d-flex justify-content-end">
            <li><a href="#home" onClick={() => {dispatch(home())}}>Home</a></li>
			<li><a href="#about" onClick={() => {dispatch(about())}}>About</a></li>
			<li><a href="#skills" onClick={() => {dispatch(skills())}}>Skills</a></li>
			<li><a href="#work" onClick={() => {dispatch(work())}}>Work</a></li>
			<li><a href="#contact" onClick={() => {dispatch(contact())}}>Contact</a></li>
        </ul>
    </nav>
    );
}