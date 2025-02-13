import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Contact = ({ IsDarkmode }) => {
  const formRef = useRef();
  const [isSent, setIsSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submission started...");
    setLoading(true);

    emailjs
      .sendForm(
        "service_3w9wnia",
        "template_7jqjzeb",
        formRef.current,
        "7gVOD9IwOk3F7a4Gx"
      )
      .then(
        (result) => {
          console.log("Message sent successfully:", result.text);
          setLoading(false);
          setIsSent(true);
          formRef.current.reset();
        },
        (error) => {
          console.error("Error sending message:", error.text);
          setLoading(false);
          setIsSent(false);
        }
      )
      .catch((error) => {
        console.error("Unexpected error:", error);
        setLoading(false);
        setIsSent(false);
      });
  };

  return (
    <motion.div
    initial={{opacity:0, x:-200}}
      transition={{duration:1.0}}
      whileInView={{opacity:1,x:-0}}
      viewport={{once:true}}
    
    className="container mx-auto py-10 px-6 lg:px-32" id="Contact">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 space-y-6"
      >
        <div className="flex flex-col">
          <label htmlFor="name" className="text-sm font-medium text-gray-700">
            Your Name
          </label>
          <input
            type="text"
            name="user_name"
            id="name"
            placeholder="Your Name"
            className="mt-2 p-3 border border-gray-300 rounded-lg"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Your Email
          </label>
          <input
            type="email"
            name="user_email"
            id="email"
            placeholder="Your Email"
            className="mt-2 p-3 border border-gray-300 rounded-lg"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Your Message"
            rows="5"
            className="mt-2 p-3 border border-gray-300 rounded-lg"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-blue-500 text-white py-3 rounded-lg ${
            loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
          }`}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>

      {isSent && (
        <div className="mt-4 text-center text-green-600 font-semibold">
          Your message has been sent successfully!
        </div>
      )}
    </motion.div>
  );
};

export default Contact;

