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
        I’m a <span className="font-medium">Software Engineer</span> who loves building 
        <span className="font-medium"> scalable, high-performance applications</span>—because slow software is a crime. 
        Currently pursuing my <span className="font-medium">Master’s in Computer Science</span> at Northeastern University, 
        I’ve worked across <span className="font-medium">fintech, iGaming, AI-driven applications,</span> and open-source research, 
        solving problems that make engineers reconsider their career choices.
      </p>

      <p>
        <span className="italic">When I’m not coding</span>, you’ll find me diving into <b>Fantasy and Magic</b>, playing <b>football or swimming</b>, 
        or lost in a <b>Wikipedia rabbit hole</b> about AI, history, and why we still don’t have flying cars. I’m always looking for 
        innovative projects where I can make an impact—and maybe break a few things (for science, of course). 
      </p>
    </motion.section>
  );
}
