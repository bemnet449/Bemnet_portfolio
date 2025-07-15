"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const text = "Say Hello";

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        () => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col items-center justify-center">
          <div className="text-6xl font-bold text-purple-700">
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            😊
          </div>
          <div className="mt-8 flex flex-col gap-4 text-xl">
            <span className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-purple-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              bemnetsin510@gmail.com
            </span>
            <span className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-purple-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
              Addis Ababa, Ethiopia
            </span>
          </div>
        </div>
        {/* FORM CONTAINER */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className="h-1/2 lg:h-full lg:w-1/2 bg-purple-50 rounded-2xl text-xl flex flex-col gap-6 justify-center p-6 sm:p-10 md:p-12 lg:p-16 shadow-md"
        >
          <span className="font-medium text-purple-900">Dear Bemnet Sintayehu,</span>
          <textarea
            rows={6}
            className="bg-transparent border-2 border-purple-300 focus:border-purple-500 outline-none rounded-md p-3 placeholder-purple-400 text-purple-900 transition-colors duration-300 resize-none"
            name="user_message"
            placeholder="Write your message..."
          />
          <span className="font-medium text-purple-900">My email address is:</span>
          <input
            name="user_email"
            type="email"
            className="bg-transparent border-2 border-purple-300 focus:border-purple-500 outline-none rounded-md p-3 placeholder-purple-400 text-purple-900 transition-colors duration-300"
            placeholder="your@email.com"
            required
          />
          <span className="font-medium text-purple-900">Regards</span>
          <motion.button
            whileHover={{
              scale: 1.05,
              backgroundColor: "#A78BFA", // Tailwind purple-400
              boxShadow: "0px 8px 24px rgba(167, 139, 250, 0.3)",
            }}
            whileTap={{
              scale: 0.95,
              backgroundColor: "#7C3AED", // Tailwind purple-600
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 15,
            }}
            className="bg-purple-200 rounded-lg font-semibold text-purple-900 p-4 hover:text-white transition-colors duration-300"
          >
            Send
          </motion.button>
          {success && (
            <span className="text-green-600 font-semibold text-center">
              Your message has been sent successfully!
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold text-center">
              Something went wrong!
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;