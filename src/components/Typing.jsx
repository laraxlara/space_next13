'use client'; 
import { motion } from 'framer-motion'
import { textContainer, textVariant2 } from "@/utils/motion";

export const Typing = ({ title }) => {
    return (
        <motion.p
            variants={textContainer}
            className='font-normal text-white text-center'>
                {Array.from(title).map((letter, index) => (
                <motion.span variants={textVariant2} key={index}>
                    {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
                ))}
        </motion.p>
    )
}