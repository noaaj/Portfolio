'use client'
import { Navbar } from "./navbar";
import { Home } from "./home";
import { About } from "./about";
import { Skills } from "./skills";
import { Work } from "./work";
import { Contact } from "./contact";
import { RootState } from '../features/store';
import { useSelector } from 'react-redux';


export function SectionContainer() {
    
    const currentPage = useSelector((state: RootState) => state.page.value)

    function thisPage() {
        if (currentPage == 'Home') {
            return (<Home/>);
        } else if (currentPage == 'About') {
            return (<About/>);
        } else if (currentPage == 'Skills') {
            return (<Skills/>);
        } else if (currentPage == 'Work') {
            return (<Work/>);
        }else if (currentPage == 'Contact') {
            return (<Contact/>);
        }
    }

    return (
        <>
            <Navbar/>
            {thisPage()}
        </>
    );
}