'use client';
import React from 'react'

import { motion } from "framer-motion";
import { Typing } from '@/components/Typing';
import { staggerContainer, fadeIn } from "@/utils/motion";

const Text = () => {
  return (
    <section className='sm:p-16 xs:p-8 px-6 py-12 relative z-10'>
        <div className='gradient-02 z-10' />
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className='2xl:max-w-[1280px] w-full mx-auto flex justify-center items-center flex-col'
            >
                <Typing title='| Lorem ipsum doloret sit amet'  textStyles='text-center' />
                <motion.p
                    variants={fadeIn('up', 'tween', 0.2, 1)}
                    className='mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white'>
                        <span className='font-extrabold'>Lorem ipsum</span> dolor sit amet, consectetur adipiscing elit. Duis felis ante, convallis et nisl at, 
                        convallis scelerisque risus. Suspendisse et nisl id lorem posuere bibendum. Nunc fringilla magna 
                        ac sem facilisis aliquet. In volutpat imperdiet tortor. Nullam dapibus accumsan ligula, eget molestie 
                        metus fermentum vel. Vivamus accumsan sed nunc id porta. Etiam tincidunt egestas libero, sit amet 
                        porta justo varius ut. Suspendisse ultricies ipsum et accumsan ornare. Morbi id tortor rhoncus nisl 
                        pellentesque eleifend. Sed in suscipit nisi, ac sollicitudin felis. Sed in mauris sem. Donec ac 
                        viverra enim. Vestibulum eget accumsan sem, sed pharetra erat. Praesent non enim ornare, pulvinar ex 
                        dictum, congue tellus.
                    </motion.p>
            </motion.div>
    </section>
  )
}

export default Text