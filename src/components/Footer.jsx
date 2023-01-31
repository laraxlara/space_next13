'use client';

import { motion } from 'framer-motion';
import { footerVariants } from '../utils/motion';

import { FaFacebookSquare } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { BsLinkedin } from 'react-icons/bs'


const Footer = () => {
  return (
    <>
        <motion.footer
            variants={footerVariants}
            initial="hidden"
            whileInView="show"
            className='sm:px-16 px-6 py-8 relative overflow-hidden'
        >
            <div className="footer-gradient" />
            <div className='2xl:max-w-[1280px] w-full mx-auto flex flex-col gap-8'>
            <div className="flex items-center justify-between flex-wrap gap-5">
                <button type="button" className="flex items-center h-fit py-4 px-6 bg-[#00005C] rounded-[32px] gap-[12px]">
                <img
                    src="/moon.png"
                    alt="moon"
                    className="w-[24px] h-[24px] object-contain"
                />
                <span className="font-normal text-[16px] text-white">
                    Enter Space Exploration
                </span>
                </button>
            </div>

            <div className="flex flex-col">
                <div className="mb-[50px] h-[2px] bg-white opacity-10" />

                <div className="flex items-center justify-between flex-wrap gap-4">
                <h4 className="font-extrabold text-[24px] text-white">
                    SPACE EXPLORATION
                </h4>
                <p className="font-normal text-[14px] text-white opacity-50">
                    Copyright © 2023 Space. All rights reserved.
                </p>

                <div className="flex gap-4">
                    <FaFacebookSquare size={40} />
                    <AiFillInstagram size={40} />
                    <BsLinkedin size={40} />
                </div>
                </div>
            </div>
            </div>
        </motion.footer>
    </>
  )
}

export default Footer