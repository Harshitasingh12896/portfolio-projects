import React from 'react'
import Image from 'next/image';
import { motion } from "framer-motion"


const Footer = ({IsDarkmode}) => {
  return (
    <div className='w-full mt-20 dark:mt-10'>
     <motion.div
     initial={{scale:0}}
     transition={{duration:1.5,type:'spring',stiffness:100}}
     whileInView={{scale:1}}
     viewport={{once:true}}
      className='text-center'>
    <Image src={IsDarkmode?"/assets/jatin.jpg":"/assets/portfolio.jpg"} alt="logo.png" className='mb-2 mx-auto bg-transparent'
      width={IsDarkmode ?300:150}
      height={IsDarkmode?100:150}    />
      
      <div className='w-max flex items-center gap-2 mx-auto font-Ovo '>
        <Image src="/assets/mail_icon.png" alt="email icon"width={35}height={35} className='mx-auto mt-2 dark:mt-0'
        />
         Hs4865900@gmail.com
      </div>
     </motion.div>
     <div className='text-center sm:flex items-center justify-between border-t border-gray-400
     mx-[10%] mt-12 py-6'>
        <p>2025 Harshita.All rights reserved.</p>
        <ul className='flex text-lg font-Ovo items-center gap-10 justify-center mt-4 sm:mt-0'>
            <li>
                <a target='_blank'href="https://www.linkedin.com/in/harshita-singh-b41344316">LinkedIn</a>
            </li>
            <li>
                <a target='_blank'href="https://github.com/Harshitasingh12896">Github</a>
            </li>
            <li>
                <a target='_blank'href="https://leetcode.com/u/sjPXsREMoo/">LeetCode Profile</a>
            </li>

        </ul>
     </div>
    </div>
  )
}

export default Footer;