"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [text, setText] = useState("");
  const fullText = "$ angle innovation --start";
  const typingSpeed = 100;

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[100vh] flex flex-col items-center justify-center bg-[#fafaf7] overflow-hidden">
      {/* 背景のターミナル（中央に配置） */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden opacity-10 z-0">
        <div className="w-[90%] max-w-4xl h-[70vh] p-6 font-mono text-black border border-gray-500 rounded-md bg-gray-100 shadow-md">
          <div className="flex items-center gap-2 mb-4 border-b border-gray-400 pb-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="ml-4 text-gray-700 font-mono text-sm">
              angle@terminal:~
            </span>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <p>Welcome to Angle Terminal v1.0.0</p>
            <p>Loading system modules...</p>
            <p className="mt-2">
              {text}
              <motion.span
                className="inline-block w-2 h-4 bg-black ml-1"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            </p>
            {/* <p className="mt-1">$ connecting to innovation_server...</p>
            <p className="mt-1">$ establishing secure connection...</p>
            <p className="mt-1">$ connection established</p>
            <p className="mt-1">$ initializing transformation...</p>
            <p className="mt-1">$ loading creative modules...</p>
            <p className="mt-1">$ preparing user experience...</p>
            <p className="mt-1">$ analyzing market trends...</p>
            <p className="mt-1">$ optimizing solution pathways...</p>
            <p className="mt-1">$ launching angle framework...</p>
            <p className="mt-1">$ ready for business innovation...</p>
            <p className="mt-1">$ system online</p> */}
          </motion.div>
        </div>
      </div>

      {/* メインコンテンツ（元のデザイン） */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center w-full px-4 mt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 drop-shadow-lg">
            Angle <span className="text-green-600">×</span> Technology
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-xl text-gray-700 max-w-2xl mx-auto"
          >
            多角的な視点でテクノロジーを捉え、革新的なソリューションを提供します
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
