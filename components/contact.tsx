"use client";

import { useForm, ValidationError } from "@formspree/react";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import toast from "react-hot-toast";
import { FaPaperPlane } from "react-icons/fa";  

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const [state, handleSubmit] = useForm("xblgrwpj"); // Replace with your Formspree ID

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 max-w-xl mx-auto text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact Me</SectionHeading>

      <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
        Please contact me directly at{" "}
        <a className="text-blue-500 font-medium hover:underline" href="mailto:raina.ans@northeastern.edu">
          raina.ans@northeastern.edu
        </a>{" "}
        or through this form.
      </p>

      {/* ✅ Form with ByteGrad Styling */}
      <form
        onSubmit={handleSubmit}
        className="mt-10 flex flex-col gap-6 bg-white dark:bg-gray-900 shadow-lg p-8 rounded-2xl"
      >
        {/* Email Field */}
        <div className="flex flex-col text-left">
          <label htmlFor="email" className="text-gray-700 dark:text-gray-200 font-semibold">
            Your Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            className="mt-2 w-full border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white p-3 outline-none focus:border-blue-500 transition-all"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        {/* Message Field */}
        <div className="flex flex-col text-left">
          <label htmlFor="message" className="text-gray-700 dark:text-gray-200 font-semibold">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="mt-2 w-full border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white p-3 outline-none focus:border-blue-500 transition-all resize-none"
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>

        {/* Styled Submit Button */}
        <button
          type="submit"
          disabled={state.submitting}
          className="group bg-white px-7 py-3 flex items-center justify-center gap-2 rounded-full outline-none 
            focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer 
            border border-gray-300 dark:bg-white/10 dark:text-white/60"
        >
          {state.submitting ? "Sending..." : "Submit"}{" "}
          <FaPaperPlane className="opacity-60 group-hover:translate-y-1 transition" />
        </button>

        {/* Success Message */}
        {state.succeeded && (
          <p className="text-green-500 text-center text-lg font-semibold mt-2">
            Thanks for your message! I'll get back to you soon.
          </p>
        )}
      </form>
    </motion.section>
  );
}
