"use client";
import { motion } from "framer-motion";
import { Users } from "lucide-react";
import Link from "next/link";

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative py-24 bg-gradient-to-br from-[#fafaf7] via-[#f5f5f2] to-[#f0f0ed]"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-5xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-16 shadow-xl border border-white/20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center justify-center w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg"
            >
              <Users className="w-10 h-10" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl md:text-6xl font-black text-green-600 mb-8 tracking-tight"
              style={{
                fontFamily: "system-ui, -apple-system, sans-serif",
                textShadow: "0 4px 20px rgba(34, 197, 94, 0.2)",
              }}
            >
              Together We Create
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-700 text-xl sm:text-2xl md:text-3xl leading-relaxed mb-12 font-light tracking-wide max-w-4xl mx-auto"
              style={{
                fontFamily: "system-ui, -apple-system, sans-serif",
                letterSpacing: "0.02em",
                lineHeight: "1.6",
              }}
            >
              あなたのアイデアと私たちのテクノロジーが出会うとき、
              想像を超える価値が生まれます。 一緒に未来を創造しましょう。
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <Link
                href="/about"
                className="inline-flex items-center bg-gradient-to-r from-green-500 to-green-600 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                style={{
                  fontFamily: "system-ui, -apple-system, sans-serif",
                  letterSpacing: "0.02em",
                }}
              >
                パートナーシップについて
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
