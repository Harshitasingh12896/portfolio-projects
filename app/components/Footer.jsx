import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Footer = ({ IsDarkmode }) => {
  const email = "Hs4865900@gmail.com"; // Store email as a variable

  return (
    <div className="w-full mt-20 dark:mt-10">
      {/* Logo Section */}
      <motion.div
        initial={{ scale: 0 }}
        transition={{ duration: 1.5, type: 'spring', stiffness: 100 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <Image
          src={IsDarkmode ? '/assets/jatin.jpg' : '/assets/portfolio.jpg'}
          alt="logo"
          className="mb-2 mx-auto bg-transparent rounded-full"
          width={IsDarkmode ? 300 : 150}
          height={IsDarkmode ? 100 : 150}
          priority
        />

        {/* Email Section */}
        <div className="w-max flex items-center gap-2 mx-auto font-Ovo">
          <Image src="/assets/mail_icon.png" alt="email icon" width={35} height={35} className="mx-auto mt-2 sm:mt-0" />
          <a href={`mailto:${email}`} className="hover:underline">{email}</a>
        </div>
      </motion.div>

      {/* Footer Bottom */}
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>© 2025 Harshita. All rights reserved.</p>
        
        {/* Social Links */}
        <ul className="flex text-lg font-Ovo items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/harshita-singh-b41344316">
              LinkedIn
            </a>
          </li>
          <li>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/Harshitasingh12896">
              GitHub
            </a>
          </li>
          <li>
            <a target="_blank" rel="noopener noreferrer" href="https://leetcode.com/u/sjPXsREMoo/">
              LeetCode
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
