import { motion } from 'framer-motion';
import { motionValues } from "./sectioncontainer";

export function Home() {
    return (
        <motion.section id="home" initial={motionValues[0]}
            animate={motionValues[1]}
            exit={motionValues[2]}
            transition={motionValues[3]}>
            <h2>I&apos;m a Front End Developer</h2>
            <h3>I design and code digital experiences.</h3>
            <p>I am a web developer based in Orlando, Florida. I focus on front end development using HTML, CSS, and Javascript to create websites and web apps. I incorporate development libraries for projects as needed. I&apos;m always open to using new technologies and skills that fit a specific project.</p>
            <p>My web development journey started at the University of Central Florida in 2012. I graduated from there with a degree in Web Design in 2016. After school, I worked at BryteBridge for 6 years. While there I would develop hundreds of websites for our clients, and help with multitude of our company&apos;s websites.</p>
            <p>I focus on learning new technologies and building projects. That work is showcased here.</p>
        </motion.section>
    );
}

