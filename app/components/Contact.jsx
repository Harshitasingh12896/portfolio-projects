"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";

const Contact = ({ IsDarkmode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = 'service_j54n4ph';
    const templateID = 'template_hmjbqsf';
    const publicKey = '7gVOD9IwOk3F7a4Gx';
    emailjs
      .send(
        serviceID,
        templateID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: "Harshita", // Ensure it matches EmailJS template
        },
        publicKey
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setStatus('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          console.log('FAILED...', error);
          setStatus('Failed to send message. Please try again later.');
        }
      );
  };

  return (
    <div id="contact" className="w-full px-[12%] py-5">
      {/* Heading */}
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center text-2xl font-Ovo"
      >
        Connect with me
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center text-7xl font-Ovo mt-2"
      >
        Get in touch
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: -30 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center text-lg font-Ovo mt-6 mb-8"
      >
        I'd love to hear from you! If you have any questions, comments, or feedback, please use the form below.
      </motion.p>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto">
        <motion.div
          initial={{ scale: 0 }}
          transition={{ duration: 1.5, type: 'spring', stiffness: 100 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xl"
        >
          {/* Name Input */}
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border rounded-lg p-3 w-full dark:bg-gray-900 dark:text-white"
          />
          {/* Email Input */}
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border rounded-lg p-3 w-full dark:bg-gray-900 dark:text-white"
          />
        </motion.div>

        {/* Message Input */}
        <motion.textarea
          initial={{ scale: 0 }}
          transition={{ duration: 1.5, type: 'spring', stiffness: 100 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          name="message"
          placeholder="Enter your message"
          value={formData.message}
          onChange={handleChange}
          required
          className="text-xl border rounded-lg px-2 py-2 w-full h-40 dark:bg-gray-900 dark:text-white"
        />

        {/* Submit Button */}
        <motion.button
          initial={{ scale: 0 }}
          transition={{ duration: 1.5, type: 'spring', stiffness: 100 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          type="submit"
          className="bg-black flex items-center justify-center gap-2 text-white py-3 px-8 rounded-full hover:bg-gray-800 transition dark:bg-white dark:text-black"
        >
          Submit now
          <Image
            src={IsDarkmode ? "/assets/right-arrow-bold.png" : "/assets/right-arrow-bold-dark.png"}
            alt="arrow icon"
            width={25}
            height={25}
          />
        </motion.button>
      </form>

      {/* Status Message */}
      <p className="text-center mt-4">{status}</p>
    </div>
  );
};

export default Contact;
