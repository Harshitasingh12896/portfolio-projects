'use client';
import Image from 'next/image';
import React from 'react';
import { motion } from "framer-motion"

const Header = ({ IsDarkmode}) => {
  return (
    <div 
    >
      <div className="text-center dark:py-6">
        {/* Profile Image */}
        <motion.div
        initial={{scale:0}}
        transition={{duration:1.5,type:'spring',stiffness:100}}
        whileInView={{scale:1}}
        viewport={{once:true}}
          className={`flex justify-center relative w-auto h-auto rounded-full overflow-hidden ${
            IsDarkmode ? 'bg-transparent' : 'bg-darktheme'
          }`} 
        >


          <Image
  src="/assets/Harshita.png.jpg"
  alt="Harshita"
  width={IsDarkmode ? 200 : 300}  // Conditional width
  height={300}                    // Fixed height
  className="rounded-full mt-20"
/>
        </motion.div>

        {/* Introduction */}
        <motion.h3
        initial={{opacity:0,y:-20}}
        transition={{duration:1.5}}
        whileInView={{y:0,opacity:1}}
        viewport={{once:true}}
        className="flex justify-center items-center gap-2 text-2xl md:text-2xl mb-3 font-Ovo">
          Hi! I'm Harshita{" "}
          <Image
            src="/assets/hand-icon.png"
            alt="Hand Icon"
            width={25}
            height={25}
          />
        </motion.h3>

        {/* Title */}
        <motion.h1
        initial={{opacity:0,y:-30}}
        transition={{duration:1.5}}
        whileInView={{y:0,opacity:1}}
        viewport={{once:true}}
         className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
          I'm a Frontend Web Developer
        </motion.h1>

        {/* Description */}
        <motion.p
        initial={{opacity:0,y:30}}
        transition={{duration:1.5}}
        whileInView={{y:0,opacity:1}}
        viewport={{once:true}}
         className="mx-auto font-semibold font-Ovo max-w-2xl mt-4">
          "As a passionate and driven frontend developer, I specialize in
          creating intuitive and visually appealing user experiences. With a
          strong foundation in HTML, CSS, JavaScript, and modern frameworks
          like React and Next.js."
        </motion.p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
          {/* Contact Button */}
          <motion.a
          initial={{opacity:0,y:30}}
          transition={{duration:1.5}}
          whileInView={{y:0,opacity:1}}
          viewport={{once:true}}
            href="#contact"
            className="px-10 py-3 bg-black text-white rounded-full flex items-center gap-2
            dark:bg-white dark: border-black dark:text-blue-800 dark:font-Ovo "
          >
            Contact Me{" "}
            <Image
              src={IsDarkmode?"/assets/right-arrow-bold.png":"/assets/right-arrow-white.png"}
              alt="Right Icon"
              width={20}
              height={20}
            />
          </motion.a>

          {/* Resume Button */}
          <motion.a
          initial={{opacity:0,y:30}}
          transition={{duration:1.5}}
          whileInView={{y:0,opacity:1}}
          viewport={{once:true}}
            href="/Rezume__1_ (1).pdf"
            download
            className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
          >
            My Resume{" "}
            <Image
              src={IsDarkmode?"/assets/resume.jpg":"/assets/download.png"}
              alt="Download Icon"
              width={25}
              height={25}
            />
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Header;
