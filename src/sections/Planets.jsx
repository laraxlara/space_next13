'use client';

import { motion } from 'framer-motion';
import { Typing } from '@/components/Typing';
import { AnimatedTitle } from '@/components/AnimatedTitle';
import { planetVariants, staggerContainer, fadeIn } from '../utils/motion';

const Planets = () => {
  return (
    <section className='sm:p-16 xs:p-8 px-6 py-12 relative z-10 overflow-hidden'>
        <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className='2xl:max-w-[1280px] w-full mx-auto flex lg:flex-row flex-col gap-8'
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.95] flex justify-center flex-col"
      >
        <Typing title="| The planet is a vast place" />
        <AnimatedTitle title={<>Would you like to learn about planets?</>} />
        <div className="mt-[48px] flex flex-row justify-evenly gap-[24px]">
          <div>
            <img src='/sun.png' alt='sun' width={50} />
            <h4 className='font-extrabold mb-8'>Lorem Ipsum</h4>
            <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. Duis felis ante, <br /> convallis et nisl at, convallis scelerisque risus.</p>
          </div>
          <div>
            <img src='/sun.png' alt='sun' width={50} />
            <h4 className='font-extrabold mb-8'>Lorem Ipsum</h4>
            <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. Duis felis ante, <br /> convallis et nisl at, convallis scelerisque risus.</p>
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={planetVariants('right')}
        className='flex-1 flex justify-center items-center'
      >
        <img
          src="/planets.png"
          alt="get-started"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
    </motion.div>
    <div className="absolute w-[5%] inset-y-3 gradient-02" />
    </section>
  )
}

export default Planets