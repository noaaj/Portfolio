import { motion } from 'framer-motion';
import { motionValues } from "./sectioncontainer";

export function Work() {
    return (
        <motion.section id="work" initial={motionValues[0]}
            animate={motionValues[1]}
            exit={motionValues[2]}
            transition={motionValues[3]}>
            <h2>Work</h2>
            <div className="container">
                <div className="row">
                    <div className="col"></div>
                    <div className="col">
                        <div className="workcontainer">
                            <h4>Portfolio</h4>
                            <img src="/portfolio.jpg" alt="Portfolio Project"/>
                            <p>This is the very site you are on. It showcases my talent, skill, and work as a front end developer.</p>
                            <a href="https://github.com/noaaj/Portfolio" target="_blank" className="btn">View on Github</a>
                            <div className="techused">React</div>
                            <div className="techused">Redux</div>
                            <div className="techused">Bootstrap</div>
                        </div>
                    </div>
                    <div className="col"></div>
                </div>
            </div>

        </motion.section>
    );
}