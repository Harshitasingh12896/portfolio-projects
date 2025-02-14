import React from "react";
import Image from "next/image";
import { serviceData } from "../../data/assets";
import { motion } from "framer-motion";

const Services = ({ IsDarkmode }) => {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      {/* Section Headers */}
      <motion.h4
        initial={{ opacity: 0, x: -20 }}
        transition={{ duration: 1 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-2 font-Ovo text-2xl"
      >
        What I Offer
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        transition={{ duration: 1 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="text-center font-Ovo text-7xl"
      >
        My Services
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, x: -20 }}
        transition={{ duration: 1 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="font-Ovo text-lg mx-auto mb-12 text-center mt-5"
      >
        I specialize in creating responsive and interactive websites using modern frameworks like React and Next.js. With
        a focus on clean code and user-friendly designs, I bring ideas to life through efficient and scalable web
        solutions.
      </motion.p>

      {/* Service Cards */}
      <motion.div
        initial={{ scale: 0 }}
        transition={{ duration: 1.5, type: "spring", stiffness: 100 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16"
      >
        {serviceData.map(({ icon, title, description, link }, index) => (
          <div
            key={index}
            className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg text-center flex flex-col items-center
            hover:bg-lightHover dark:hover:bg-gray-800 hover:-translate-y-1 duration-500 hover:shadow-black"
          >
            {/* Service Icon */}
            <Image src={icon} alt={title} width={50} height={50} className="mb-4" />

            <h3 className="text-xl font-semibold underline">{title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{description}</p>

            <a
              href={link}
              className="flex items-center gap-2 text-sm mt-5 text-blue-700 dark:text-blue-400 hover:underline"
            >
              Read More
              <Image src="/assets/right-arrow.png" alt="right arrow" width={25} height={25} />
            </a>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;
