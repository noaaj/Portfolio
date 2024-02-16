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
                        <h3 d-flex align-content-start flex-wrap>Languages</h3>
                        <div className="techBox"><a href="https://html.spec.whatwg.org/" target="_blank"><img src="/html.png" alt="HTML Logo" className='logoImage'/><br/>HTML</a><br/></div>
                        <div className="techBox"><a href="https://www.w3.org/Style/CSS/Overview.en.html" target="_blank"><img src="/css.png" alt="CSS Logo" className='logoImage'/><br/>CSS</a><br/></div>
                        <div className="techBox"><a href="https://sass-lang.com/" target="_blank"><img src="/sass.png" alt="SASS Logo" className='logoImage'/><br/>SASS</a><br/></div>
                        <div className="techBox"><a href="https://www.javascript.com/" target="_blank"><img src="/javascript.png" alt="Javascript Logo" className='logoImage'/><br/>Javascript</a></div>
                    </div>
                    <div className="col">
                        <h3>Frameworks</h3>
                        <div className="techBox"><a href="https://getbootstrap.com/" target="_blank"><img src="/bootstrap.png" alt="Bootstrap Logo" className='logoImage'/><br/>Bootstrap</a><br/></div>
                        <div className="techBox"><a href="https://react.dev/" target="_blank"><img src="/react.png" alt="React.js Logo" className='logoImage'/><br/>React.js</a><br/></div>
                        <div className="techBox"><a href="https://nextjs.org/" target="_blank"><img src="/next.png" alt="Next.js Logo" className='logoImage'/><br/>Next.js</a><br/></div>
                        <div className="techBox"><a href="https://redux.js.org/" target="_blank"><img src="/redux.png" alt="Redux Logo" className='logoImage'/><br/>Redux</a></div>
                    </div>
                    <div className="col">
                        <h3>Dev Tools</h3>
                        <div className="techBox"><a href="https://www.typescriptlang.org/" target="_blank"><img src="/typescript.png" alt="TypeScript Logo" className='logoImage'/><br/>Typescript</a><br/></div>
                        <div className="techBox"><a href="https://github.com/" target="_blank"><img src="/github.png" alt="Github Logo" className='logoImage'/><br/>Github</a><br/></div>
                        <div className="techBox"><a href="https://code.visualstudio.com/" target="_blank"><img src="/visualstudiocode.png" alt="Visual Studio Code Logo" className='logoImage'/><br/>Visual Studio Code</a><br/></div>
                        <div className="techBox"><a href="https://wordpress.org/" target="_blank"><img src="/wordpress.png" alt="WordPress Logo" className='logoImage'/><br/>WordPress</a></div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}