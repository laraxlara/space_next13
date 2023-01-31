'use client';
import React from 'react'
import { motion } from 'framer-motion'
import { staggerContainer, fadeIn, planetVariants, textVariant } from '@/utils/motion'

const About = () => {
  return (
    <section className='sm:p-16 xs:p-8 px-6 py-12 relative align-center z-10'>
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: 'false', amount: 0.25 }}
            className='w-full mx-auto flex lg:flex-row flex-col justify-center gap-8'>
                <motion.div
                    variants={planetVariants('left')}
                    className='flex justify-center items-center w-full'>
                        <img src='/astronaut.png' alt='/' className='w-full h-[70%] object-contain' />
                </motion.div>

                <motion.div
            variants={fadeIn('left', 'tween', 0.2, 1)}
            className='flex flex justify-center flex-col w-full'>

            <motion.h2
                variants={textVariant(1.1)}
                className='font-bold lg:text-[20px] md:text-[20px] sm:text-[10px] text-[10px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-white'>
                    Space Exploration | History, Definition & Facts 
            </motion.h2>
            <motion.p
                    variants={fadeIn('up', 'tween', 0.2, 1)}
                    className='mt-[8px] font-normal sm:text-[32px] text-[20px] text-start text-secondary-white'>
                        <span className='font-extrabold'>Lorem ipsum</span> dolor sit amet, consectetur adipiscing elit. Duis felis ante, convallis et nisl at, 
                        convallis scelerisque risus. Suspendisse et nisl id lorem posuere bibendum. Nunc fringilla magna 
                        ac sem facilisis aliquet. In volutpat imperdiet tortor. Nullam dapibus accumsan ligula, eget molestie 
                        metus fermentum vel. Vivamus accumsan sed nunc id porta. Etiam tincidunt egestas libero, sit amet 
                        porta justo varius ut. Suspendisse ultricies ipsum et accumsan ornare. Morbi id tortor rhoncus nisl 
                        pellentesque eleifend. 
                </motion.p>
                <a href="#" className="bg-[#FDEBED] hover:bg-white text-[#A084DC] w-[200px] rounded-full py-3 px-8 mt-12 shadow-md hover:shadow-2xl transition duration-500">Button &#8594;</a>
            <div className="absolute w-[5%] inset-y-3 gradient-01" />
        </motion.div>
        </motion.div>
            

    </section>
  )
}

export default About