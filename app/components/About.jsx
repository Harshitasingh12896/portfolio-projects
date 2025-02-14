// /src/app/components/About.jsx
import React from 'react';
import Image from 'next/image';
import { infoList,toolsData } from '../../data/assets'; 
 // Import the infoList from assets.js
 import { motion } from "framer-motion"

 const About = ({ IsDarkmode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      id="about"
      className={`w-full px-[12%] py-20 scroll-mt-10 ${
        IsDarkmode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <motion.h4
        initial={{ opacity: 0, x: -20 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-center mb-2 font-Ovo text-2xl"
      >
        Introduction
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-center font-Ovo text-7xl"
      >
        About Me
      </motion.h2>

      <div className="flex flex-col lg:flex-row items-center gap-20 my-20">
        <motion.div
          initial={{ scale: 0 }}
          transition={{ duration: 1.5, type: "spring", stiffness: 100 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          className="mx-auto"
        >
          <Image
            src="/assets/beautiful.jpg.jpg"
            alt="My Image"
            width={300}
            height={300}
            className="rounded-3xl"
          />
        </motion.div>

        <div className="flex-1">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            transition={{ duration: 1 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="font-Ovo text-lg mx-[-30]"
          >
            With a strong foundation in HTML, CSS, JavaScript, and modern frameworks like React and Next.js, I transform ideas into responsive and interactive web interfaces.
            I am committed to continuous learning and staying updated with the latest trends in web technologies, ensuring every project I work on is efficient, accessible, and user-centric.
          </motion.p>

          {/* Info List */}
          <motion.ul
            initial={{ scale: 0 }}
            transition={{ duration: 1.5, type: "spring", stiffness: 100 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6"
          >
            {infoList.map(({ icon, title, description }, index) => (
              <li
                key={index}
                className={`p-4 rounded-lg shadow-lg flex flex-col items-center text-center hover:-translate-y-1 duration-500 hover:shadow-black ${
                  IsDarkmode ? "bg-gray-800 text-white hover:bg-gray-700" : "bg-white text-black hover:bg-lightHover"
                }`}
              >
                <Image src={icon} alt={title} width={50} height={50} className="mb-4" />
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="text-gray-600">{description}</p>
              </li>
            ))}
          </motion.ul>

          <motion.h4
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 1 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="font-Ovo text-2xl text-center mt-5 underline"
          >
            Tools I used
          </motion.h4>

          <motion.div
            initial={{ scale: 0 }}
            transition={{ duration: 1.5, type: "spring", stiffness: 100 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center flex-wrap gap-6 mt-8 duration-500"
          >
            {toolsData.map((tool, index) => (
              <Image
                key={index}
                src={tool}
                alt={`Tool ${index + 1}`}
                width={50}
                height={50}
                className="rounded-lg shadow-md"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
