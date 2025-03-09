"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare, FaGraduationCap  } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      {/* Profile Image Section */}
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src="/img.jpg"
              alt="Anshuman portrait"
              width={500}
              height={500}
              quality={100}
              priority={true}
              className="h-72 w-72 rounded-full object-cover border-[0.5rem] border-white shadow-xl"
            />
          </motion.div>

          {/* Hand Wave Emoji */}
          <motion.span
            className="absolute bottom-2 right-2 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      {/* Intro Text */}
      <motion.h1
        className="mb-10 mt-6 px-6 text-2xl font-medium leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Anshuman Raina.</span> I'm a{" "}
        <span className="font-bold">Graduate student at Northeastern University </span>
        with <span className="font-bold">4.5 years</span> of software engineering experience in Fintech domain.

        <br /><br />
        Currently, I am working as a:
        <ul className="list-disc list-inside mt-4 text-lg text-gray-800 dark:text-gray-300">
          <li>
            <span className="font-bold">Graduate Teaching Assistant</span> for Programming Design,
            focusing on Design Patterns & Object-Oriented System Design.
          </li>
          <li>
            <span className="font-bold">Research Developer</span> at Vitek Lab, working on my Master's Thesis
            related to <span className="italic">MSstats</span>, an open-source MS-based proteomics modeling library.
          </li>
        </ul>
      </motion.h1>

      {/* Action Buttons */}
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none 
            focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer 
            border border-gray-300 dark:bg-white/10 dark:text-white/60"
          href="/CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        
        {/* Contact Me Button */}
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none 
            focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        {/* Download CV Button */}


        {/* LinkedIn Button */}
        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full 
            focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer 
            border border-gray-300 dark:bg-white/10 dark:text-white/60"
          href="https://linkedin.com/in/anshuman-raina"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin className="text-2xl" />
        </a>

        {/* GitHub Button */}
        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-2xl rounded-full 
            focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition 
            cursor-pointer border border-gray-300 dark:bg-white/10 dark:text-white/60"
          href="https://github.com/anshuman-raina"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithubSquare />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-2xl rounded-full 
            focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition 
            cursor-pointer border border-gray-300 dark:bg-white/10 dark:text-white/60"
          href="https://scholar.google.com/citations?hl=en&user=X1VzZrMAAAAJ"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGraduationCap  />
        </a>

      </motion.div>
    </section>
  );
}
