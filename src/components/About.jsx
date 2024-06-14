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

I'm a dedicated embedded systems engineering student with a strong foundation in C/C++, Python, and JavaScript.
 <br className='sm:block hidden' /><br className='sm:block hidden' />
 With hands-on experience in developing innovative solutions, I've worked on projects ranging from electrical energy monitoring systems to drone control applications.
 <br className='sm:block hidden' /><br className='sm:block hidden' />
  My expertise includes working with frameworks and tools such as RabbitMQ, Docker, and Node.js.
  <br className='sm:block hidden' /> <br className='sm:block hidden' />
  I'm a quick learner and thrive in collaborative environments, eager to contribute to impactful projects and continuously expand my technical skills.
  <br className='sm:block hidden' /> <br className='sm:block hidden' /> Let's work together to bring cutting-edge solutions to life!


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