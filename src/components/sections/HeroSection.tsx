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
      {/* 背景のターミナル（画面サイズに応じて可変） */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden opacity-10 z-0">
        <div
          className="w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[70%] 
                        h-[60vh] sm:h-[65vh] md:h-[70vh] lg:h-[75vh] 
                        p-3 sm:p-4 md:p-6 
                        font-mono text-black border border-gray-500 rounded-md bg-gray-100 shadow-md"
        >
          <div className="flex items-center gap-2 mb-4 border-b border-gray-400 pb-2">
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500" />
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500" />
            <span className="ml-2 sm:ml-4 text-gray-700 font-mono text-xs sm:text-sm">
              angle@terminal:~
            </span>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="text-xs sm:text-sm md:text-base"
          >
            <p>Welcome to Angle Terminal v1.0.0</p>
            <p>Loading system modules...</p>
            <p className="mt-2">
              {text}
              <motion.span
                className="inline-block w-1 sm:w-2 h-3 sm:h-4 bg-black ml-1"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
              />
            </p>
          </motion.div>
        </div>
      </div>

      {/* メインコンテンツ（上に配置、3行表示） */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center w-full px-4 -mt-16 sm:-mt-12 md:-mt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-8 sm:mb-12 md:mb-16"
        >
          <h1 className="font-bold text-gray-800 drop-shadow-lg leading-tight">
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-2 sm:mb-3">
              Angle
            </div>
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-green-600 mb-2 sm:mb-3">
              ×
            </div>
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              Technology
            </div>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mt-6 sm:mt-8 px-4"
          >
            多角的な視点でテクノロジーを捉え革新的なソリューションを提供します
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
