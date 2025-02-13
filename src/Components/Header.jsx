import React from 'react'
import Navbar from './Navbar';
import { motion } from "framer-motion"

const Header = ({ IsDarkmode }) => {
  return (
    <div 
    className='min-h-screen mb-4 bg-cover bg-centre flex items-centre w-full overflow-hidden'
       style={{backgroundImage:"url('/header_img.png')"}} id="Header">
      <Navbar/>
      <motion.div
      initial={{opacity:0, y:100}}
      transition={{duration:1.5}}
      whileInView={{opacity:1,y:0}}
      viewport={{once:true}}
    

      className="container text-center mx-auto py-60 px-6 md:px-20 lg:px-30 text-white" >
        <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block mx-w-3xl font-semibold pt-20'>Explores home that fit your dreams</h2>
        <div className='space-x-6 mt-14'>
            <a href="#Projects" className='border border-white px-8 py-3 rounded'>Projects</a>
            <a href="#Contact" className=' bg-blue-500 border border-white px-8 py-3 rounded'>Contacts Us</a>
        </div>
       </motion.div>
    
       </div>
  )
}

export default Header;