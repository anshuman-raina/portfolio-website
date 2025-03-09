"use client";

import { useTheme } from "@/context/theme-context";
import React, { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import { motion } from "framer-motion";

export default function SiteCounter() {
  const { theme, toggleTheme } = useTheme();
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    async function fetchVisitorCount() {
      try {
        const response = await fetch("/api/visitor");
        const data = await response.json();
        setCount(data.count);
      } catch (error) {
        console.error("Error fetching visitor count:", error);
      }
    }

    fetchVisitorCount();
  }, []);

  return (
    <div className="fixed bottom-5 right-5 flex items-center gap-4">
      {/* 👀 Visitor Counter */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="px-5 py-3 rounded-lg shadow-lg flex items-center gap-3
          bg-gray-200 text-gray-900 dark:bg-gray-900 dark:text-white"
      >
        <span className="text-2xl">👀</span>
        <span className="text-xl font-semibold">
          {count !== null ? `${count} visitors` : "Loading..."}
        </span>
      </motion.div>

      {/* 🌙 Theme Toggle */}
      <button
        className={`w-[3rem] h-[3rem] backdrop-blur-[0.5rem] border border-opacity-40 shadow-2xl rounded-full flex items-center justify-center
          transition-all hover:scale-[1.15] active:scale-105
          ${
            theme === "light"
              ? "bg-gray-200 text-gray-900 border-gray-300"
              : "bg-gray-900 text-white border-gray-700"
          }`}
        onClick={toggleTheme}
      >
        {theme === "light" ? <BsSun /> : <BsMoon />}
      </button>
    </div>
  );
}
