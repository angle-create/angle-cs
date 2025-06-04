"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [colorIndex, setColorIndex] = useState(0);

  const colors = [
    "text-red-600",
    "text-blue-600",
    "text-purple-600",
    "text-pink-600",
    "text-indigo-600",
    "text-orange-600",
    "text-yellow-600",
    "text-teal-600",
  ];

  const colorShadows = [
    "rgba(220, 38, 38, 0.3)", // red
    "rgba(37, 99, 235, 0.3)", // blue
    "rgba(147, 51, 234, 0.3)", // purple
    "rgba(236, 72, 153, 0.3)", // pink
    "rgba(99, 102, 241, 0.3)", // indigo
    "rgba(249, 115, 22, 0.3)", // orange
    "rgba(234, 179, 8, 0.3)", // yellow
    "rgba(20, 184, 166, 0.3)", // teal
  ];

  const getColorShadow = (index: number, opacity: number = 0.3) => {
    const baseColors = [
      "220, 38, 38", // red
      "37, 99, 235", // blue
      "147, 51, 234", // purple
      "236, 72, 153", // pink
      "99, 102, 241", // indigo
      "249, 115, 22", // orange
      "234, 179, 8", // yellow
      "20, 184, 166", // teal
    ];
    return `rgba(${baseColors[index]}, ${opacity})`;
  };

  useEffect(() => {
    const colorInterval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 1500);

    return () => clearInterval(colorInterval);
  }, [colors.length]);

  return (
    <section className="relative w-full h-[100vh] flex flex-col items-center justify-center bg-gradient-to-br from-[#fafaf7] via-[#f5f5f2] to-[#f0f0ed] overflow-hidden">
      {/* 背景の装飾的な要素 */}
      <div className="absolute inset-0 w-full h-full overflow-hidden opacity-5 z-0">
        {/* 左側の円 */}
        <motion.div
          initial={{ scale: 0, x: -100 }}
          animate={{ scale: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute left-10 top-1/4 w-64 h-64 rounded-full bg-blue-400"
        />
        {/* 右側の円 */}
        <motion.div
          initial={{ scale: 0, x: 100 }}
          animate={{ scale: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.7 }}
          className="absolute right-10 top-1/3 w-48 h-48 rounded-full bg-green-400"
        />
        {/* 重なり合う部分を表現する楕円 */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 1.2 }}
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-purple-400"
        />
      </div>

      {/* メインコンテンツ */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center w-full px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-12 sm:mb-16 md:mb-20"
        >
          {/* タイトル部分 - 2つの要素が組み合わさることを表現 */}
          <div className="flex flex-col items-center mb-12">
            <div
              className="flex items-center justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-8"
              style={{ alignItems: "center" }}
            >
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-green-600 tracking-tight"
                style={{
                  textShadow:
                    "0 4px 20px rgba(34, 197, 94, 0.3), 0 0 40px rgba(34, 197, 94, 0.1)",
                  fontFamily: "system-ui, -apple-system, sans-serif",
                }}
              >
                Angle
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-green-600 font-light flex items-center justify-center"
                style={{
                  textShadow: "0 2px 10px rgba(34, 197, 94, 0.4)",
                  height: "1em",
                  lineHeight: "1",
                }}
              >
                ×
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black ${colors[colorIndex]} tracking-tight transition-all duration-500`}
                style={{
                  textShadow: `0 4px 20px ${getColorShadow(
                    colorIndex
                  )}, 0 0 40px ${getColorShadow(colorIndex, 0.1)}`,
                  fontFamily: "system-ui, -apple-system, sans-serif",
                }}
              >
                You
              </motion.div>
            </div>
          </div>

          {/* キャッチコピー */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="text-center"
          >
            <p
              className="text-2xl sm:text-3xl md:text-4xl text-gray-800 font-light max-w-4xl mx-auto leading-relaxed px-4 mb-6 tracking-wide"
              style={{
                fontFamily: "system-ui, -apple-system, sans-serif",
                textShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                letterSpacing: "0.02em",
              }}
            >
              企みは、ひとりよりふたりが面白い。
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* 下部の装飾的な波 */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden opacity-20">
        <svg
          className="relative block w-full h-20"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="currentColor"
            className="text-blue-100"
          />
        </svg>
      </div>
    </section>
  );
}
