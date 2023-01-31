'use client'; 
import { motion } from 'framer-motion'
import { textContainer, textVariant2 } from "@/utils/motion";

export const AnimatedTitle = ({ title }) => {
    return (
        <motion.h2
            variants={textVariant2}
            initial='hidden'
            whileInView="show"
            className='mt-[8px] font-bold md:text-[64px] text-[40px] text-white text-center'>
                {title}
            </motion.h2>
    )
}