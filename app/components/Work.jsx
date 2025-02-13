import React from 'react';
import Image from 'next/image';
import { workData } from '../../data/assets'; // Importing workData from assets.js
import { motion } from "framer-motion"

const Work = ({IsDarkmode}) => {
  return (
    <div id="work" className="w-full px-[12%] py-20 scroll-mt-20">
      <motion.h4
      initial={{opacity:0,y:-20}}
      transition={{duration:1}}
      whileInView={{opacity:1,y:0}}
      viewport={{once:true}}
       className="text-center mb-2 font-Ovo text-2xl">My Portfolio</motion.h4>
      <motion.h2
      initial={{opacity:0,y:-20}}
      transition={{duration:1}}
      whileInView={{opacity:1,y:0}}
      viewport={{once:true}}
       className="text-center font-Ovo text-7xl">My Latest Work</motion.h2>
      <motion.p
      initial={{opacity:0,y:-30}}
      transition={{duration:1}}
      whileInView={{opacity:1,y:0}}
      viewport={{once:true}}
       className="font-Ovo text-lg mx-auto mb-12 text-center mt-5">
        Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in frontend development.
      </motion.p>

      {/* Work Data Grid */}
      <motion.div
      initial={{scale:0}}
      transition={{duration:1.5,type:'spring',stiffness:100}}
      whileInView={{scale:1}}
      viewport={{once:true}}
       className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        {workData.map(({ title, description, bgImage }, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-lg  bg-opacity-0  hover:bg-lightHover
              hover:-translate-y-1 duration-500 hover:shadow-black"
            style={{ height: '300px', width: '100%' }} // Ensure container dimensions
          >
            <Image
              src={bgImage} // Path from workData
              alt={title}
              layout="fill" // Makes the image cover the container
              objectFit="cover"
              className="rounded-lg"
            />
        
            <div className="absolute bottom-0 p-4 text-white z-10">
              <h2 className="text-xl font-semibold">{title}</h2>
              <p className="text-sm">{description}</p>
            </div>
          </div>
        ))}
      </motion.div>
      <motion.a 
      initial={{scale:0}}
      transition={{duration:1.5,type:'spring',stiffness:100}}
      whileInView={{scale:1}}
      viewport={{once:true}}
      href="" className=' text-xl flex items-center w-max justify-center gap-2 text-gray-700 border-[2px]
      border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500
      dark:hover:bg-slate-500  dark:text-white'
      >Show More <Image src={IsDarkmode?"/assets/right-arrow-bold-dark.png": "/assets/right-arrow-bold.png"} alt="Right Arrow" width={20} height={20}  /></motion.a>
    </div>
  );
};

export default Work;
