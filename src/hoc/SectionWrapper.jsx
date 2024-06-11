import React from "react";
import {motion} from 'framer-motion'
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";
const SectionWrapper = (Component, idName) => function HOC(){
return (
    <motion.section>
    <component />

    </motion.section>
)

}
export default SectionWrapper