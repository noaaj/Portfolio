import { motion } from 'framer-motion';
import { motionValues } from "./sectioncontainer";

export function Skills() {
    return (
        <motion.section id="skills" initial={motionValues[0]}
            animate={motionValues[1]}
            exit={motionValues[2]}
            transition={motionValues[3]}>
            <h2>Skills</h2>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h3>Languages</h3>
                        HTML<br/>
                        CSS<br/>
                        SASS<br/>
                        Javascript
                    </div>
                    <div className="col">
                        <h3>Frameworks</h3>
                        Bootstrap<br/>
                        React.js<br/>
                        Next.js<br/>
                        Redux
                    </div>
                    <div className="col">
                        <h3>Dev Tools</h3>
                        Typescript<br/>
                        Github<br/>
                        Visual Studio Code<br/>
                        WordPress
                    </div>
                </div>
            </div>
        </motion.section>
    );
}