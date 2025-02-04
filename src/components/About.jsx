import React from 'react'
import { Tilt  } from 'react-tilt'
import {motion} from 'framer-motion'
import { styles } from '../styles'
import {services} from '../constants'
import {fadeIn , textVariant } from '../utils/motion'
import {SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon}) => {
  return(
<Tilt className="xs:w-[250px] w-full">
<motion.div 
variants={fadeIn ("right","spring", 0.5*index , 0.75)}
className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card "
>
<div 
options ={{
  max:45, 
  scale:1, 
  speed:450
}}
className=" bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
>
<img src={icon} alt={title} className=" w-16 h-16 object-contain"/>
<h3 className="text-white text-[20px] font-bold text-center "> {title}</h3>
</div>

</motion.div>

</Tilt>


)
}

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
    <p className={styles.sectionSubText}>Introduction</p>
    <h2 className={styles.sectionHeadText}>Overview.</h2>

    </motion.div>
    
    <motion.p variants={fadeIn("","",0.1,1)}
    className='mt-4 text-secondary  text-[19px] max-w-3xl leading-[30px]'
    
    >

I'm a dedicated embedded systems engineering student specializing in data acquisition and real-time processing systems, with expertise in C/C++, Python, and low-level hardware programming.
        <br className='sm:block hidden' /><br className='sm:block hidden' />
        Through internships at ElectroSoft and Factoorya, I've developed innovative solutions ranging from electrical energy monitoring systems to drone control applications, demonstrating my ability to bridge hardware and software challenges.
        <br className='sm:block hidden' /><br className='sm:block hidden' />
        My technical toolkit includes modern frameworks and tools such as RabbitMQ, Docker, and ESP32 microcontrollers, enabling me to create robust data acquisition solutions.
        <br className='sm:block hidden' /><br className='sm:block hidden' />
        Driven by curiosity and a passion for technological innovation, I thrive in collaborative environments where I can contribute to impactful projects while continuously expanding my expertise in embedded systems and IoT.
        <br className='sm:block hidden' /><br className='sm:block hidden' />
        Let's collaborate to push the boundaries of what's possible in data acquisition and embedded systems!


    </motion.p>
    <div className='mt-20 flex flex-wrap gap-10 '>
      { services.map ((services, index) => (
        <ServiceCard key = {services.title} index= {index} {...services} />
      ))}

    </div>
    </>


    )
}

export default SectionWrapper(About,"about")