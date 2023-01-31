'use client';
import React from 'react'

import { motion } from 'framer-motion'
import { staggerContainer, textVariant, slideIn } from '@/utils/motion'

const Hero = () => {
  return (
    <section className='sm:py-16 xs:py-8 py-12 sm:pl-16 pl-6'>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amout: 0.25 }}
        className='2xl:max-w-[1480px] w-full mx-auto flex flex-col overflow-hidden'>

          <div className='flex justify-center items-center flex-col'>
            <motion.h1
            variants={textVariant(1.1)}
            className='font-bold lg:text-[100px] md:text-[70px] sm:text-[40px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-white'>EXPLORE
            </motion.h1>
            <motion.h1
            variants={textVariant(1.2)}
            className='font-bold lg:text-[100px] md:text-[70px] sm:text-[40px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-white z-10'>SPACE
            </motion.h1>
          </div>

          <motion.div
            variants={slideIn('right', 'tween', 0.4, 2)}
            className='relative w-full md:-mt-[70px] -mt-[12px] rounded-full'>
                <img src='/space.jpg' alt='space' className='w-full sm:h-[500px] h-auto rounded-tl-[140px]' />
            </motion.div>

        </motion.div>
    </section>
  )
}

export default Hero