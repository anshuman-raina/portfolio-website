"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>

      <p className="mb-3">
        I thrive on challenge. I seek out work where I am forced to adapt, where I must learn something new.{" "}  
        <b>Routine is comfortable, but stagnation is unbearable.</b>  
        That is why, during my Master’s, my main focus is to explore as many technologies as I can.
        
        In the past year, I have delved into <b>Quantum Computing, High Performance Computing,  
        Bioinformatics, Machine Learning, and Deep Learning</b>. Each has taught me something new,  
        shaped the way I think, and forced me to sharpen skills I never knew I needed.
      </p>
      <br/>

      <p className="mb-3">
        <span className="italic">When I’m not coding</span>, you’ll find me immersed in <b>Fantasy and Magic</b>,  
        playing <b>football or swimming</b>, or lost in a <b>Wikipedia rabbit hole</b> about AI, history,  
        and why we still don’t have flying cars.
      </p>
    </motion.section>
  );
}
