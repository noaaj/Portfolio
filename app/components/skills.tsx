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
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>SASS</li>
                            <li>Javascript</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h3>Libraries and Frameworks</h3>
                        <ul>
                            <li>Bootstrap</li>
                            <li>React.js</li>
                            <li>Next.js</li>
                            <li>Redux</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h3>Dev Tools</h3>
                        <ul>
                            <li>Typescript</li>
                            <li>Github</li>
                            <li>Visual Studio Code</li>
                            <li>WordPress</li>
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}