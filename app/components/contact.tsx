import { motion } from 'framer-motion';
import { motionValues } from "./sectioncontainer";
export function Contact() {
    return (
        <motion.section id="contact" initial={motionValues[0]}
            animate={motionValues[1]}
            exit={motionValues[2]}
            transition={motionValues[3]}>
            <h2>Contact</h2>
            <h3>Want to work together?</h3>
            <h3>Email me at <a href="mailto:hello@angelnoa.com">hello@angelnoa.com</a></h3>
        </motion.section>
    );
}