import { SocialMedia } from "./socialmedia";
import { motion } from 'framer-motion';
import { motionValues } from "./sectioncontainer";

export function Home() {
    return (
        <motion.section id="home" initial={motionValues[0]}
            animate={motionValues[1]}
            exit={motionValues[2]}
            transition={motionValues[3]}>
            <h1>Angel Noa</h1>
            <h2>Front End Developer</h2>
            <h3>I turn visions into reality</h3>
            <SocialMedia />
        </motion.section>
    );
}

