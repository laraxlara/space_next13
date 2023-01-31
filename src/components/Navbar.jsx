'use client';
import { useState } from 'react';
import { BiMenuAltLeft } from 'react-icons/bi'
import { MdOutlineClose } from 'react-icons/md'

import { motion } from "framer-motion";
import { navVariants, menuVariants } from "@/utils/motion";

import Menu from './Menu';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <motion.nav
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
        className='relative z-20'
        >
          <Menu />
      </motion.nav>
      <motion.div
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className="sm:px-16 px-6 py-8 relative">
        
        <div className="absolute w-[50%] inset-y-3 gradient-01" />

        <div className='mx-auto flex justify-between gap-8'>
          {!isOpen && <h2 className='font-extrabold text-[24px] leading-[30px] text-white z-1'>SPACE</h2>}
          {isOpen && <div></div>}
          {isOpen ? <MdOutlineClose size={30} onClick={() => setIsOpen(isOpen => !isOpen)} /> : <BiMenuAltLeft size={30} onClick={() => setIsOpen(isOpen => !isOpen)} /> }
        </div>
      </motion.div>
    </>
  )
}

export default Navbar
