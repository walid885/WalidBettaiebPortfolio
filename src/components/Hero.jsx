import React from 'react'
import { motion } from "framer-motion";

import {styles} from '../styles'
import {ComputersCanvas} from './canvas'

const Hero = () => {
  return (
<section className="relative w-full h-screen mx-auto "> 

<div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 `}>
<div className= "flex flex-col justify-center items-center mt-5">
<div className="w-5 h-5 rounded-full bg-[#915eff]" />
<div className="w-1 sm:h-80 h-40 violet-gradient" />
</div>
<div>
  <h1 className={`${styles.heroHeadText} text-white`}> Hi, I'm <span className='text-[#915efe]'>Walid Bettaieb</span></h1>
  <p className={`${styles.heroSubText} mt-2 text-white-100`}>
  I am a passionate embedded systems engineering student with expertise in real-time data acquisition and IoT solutions.  <br className='sm:block hidden' /> 
  My drive for high-performance computing, combined with hands-on experience in sensor integration and data processing, fuels my ambition to contribute to CERN's groundbreaking data acquisition systems.<br className='sm:block hidden' />
  
  Currently pursuing an engineering degree, I bridge the gap between hardware interfaces and data handling to create innovative solutions that push technological boundaries.  <br className='sm:block hidden' />
  </p>
</div>
</div>

 {/* <Feedbacks />


{<ComputersCanvas />} */}
<div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
    <a href='#about'> 
    <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
      <motion.div 
        animate = {{
          y:[0,24,0]
        }}
        transition = {{
          duration: 3, 
          repeat : Infinity, 
          repeatType : 'loop'
        }}
        className ="w-3 h-3 rounded-full bg-secondary mb-1 "
      />

    </div>
    </a>
</div>
 </section>

    )
}

export default Hero