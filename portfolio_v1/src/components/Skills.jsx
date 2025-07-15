import {motion, useInView} from 'framer-motion';
import {useRef} from 'react';
import './Skills.css'

const Skills = () => {
    const languages = ['Python', 'Java', 'JavaScript', 'HTML', 'CSS', 'PowerShell', 'Kotlin'];
    const tools = ['SQL', 'NoSQL', 'Git', 'React', 'Azure', "VSCode", "Android Studio"];

    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    const containerVariants = {
        animate: {
            transition: {
                staggerChildren: 0.2,
            }
        }
    }
    const childVariants = {
        initial: {
            scale: 0,
            y: 0
        },
        animate: {
            scale: 1,
            y: [50, 0],
            transition: {
                duration: 1,
                ease: "backInOut"
            }
        },
        exit: {
            scale: 0
        }
    }

    return(
        <motion.div ref={ref} className='listContainer' variants={containerVariants} initial='initial' animate={isInView ? 'animate' : 'initial'}> 
            {languages.map((language) => (
                <motion.div variants={childVariants}
                    style={{
                        fontSize: '1.5em',
                        backgroundColor: '#F9E1E1',
                        borderRadius: '15px',
                        padding: ' 1em',
                        margin: '.5em',
                    }}>
                    {language}
                </motion.div>
            ))}

            {tools.map((tool) => (
                <motion.div variants={childVariants} 
                    style={{
                        fontSize: '1.5em',
                        backgroundColor: '#F9E1E1',
                        borderRadius: '15px',
                        padding: '1em',
                        margin: '.5em',
                    }}>
                    {tool}
                </motion.div>
            ))}
        </motion.div>
    );
}

export default Skills;
