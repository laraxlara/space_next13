'use client';
import React, { useState } from 'react'

import { motion } from 'framer-motion'
import { spaceTopics } from '@/assets';
import { staggerContainer } from '@/utils/motion'
import { Typing } from '@/components/Typing';
import { AnimatedTitle } from '@/components/AnimatedTitle';
import Card from '@/components/Card';

const Cards = () => {
    const [active, setActive] = useState('card-2');
  return (
    <section className='' id='explore'>
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className='2xl:max-w-[1280px] w-full mx-auto flex flex-col'>
                <Typing title="| Learning about space is fun" textStyles="text-center" />
                <AnimatedTitle title={<>Choose the topic you want <br className="md:block hidden" /> to explore</>} />
                <div className="mt-[150px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
                    {spaceTopics.map((topic, index) => {
                        return (
                            <Card
                        key={topic.id}
                        {...topic}
                        index={index}
                        active={active}
                        handleClick={setActive}
                        />
                        )
})}
                </div>
        </motion.div>
    </section>
  )
}

export default Cards