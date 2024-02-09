'use client'
import { Header } from "./header";
import { Footer } from "./footer";
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
            return (<Home />);
        } else if (currentPage == 'About') {
            return (<About />);
        } else if (currentPage == 'Skills') {
            return (<Skills />);
        } else if (currentPage == 'Work') {
            return (<Work />);
        } else if (currentPage == 'Contact') {
            return (<Contact />);
        }
    }

    return (
        <div className="d-flex flex-column justify-content-between sectioncontainer">
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col"></div>
                    <div className="col-md-10 pagebox">
                        {thisPage()}
                    </div>
                    <div className="col"></div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export const motionValues = [{ /*Initial*/ opacity: 0, y: -20 }, { /*Animate*/ opacity: 1, y: 0 }, { /*Exit*/ opacity: 0, y: 20 }, { /*Transition*/ duration: .7 }];