"use client";
import { motion } from "framer-motion";
import { Target } from "lucide-react";
import Link from "next/link";

export const AboutSection = () => {
  return (
    <section id="about" className="relative py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-8"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            About Us
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
            className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-8 md:p-12"
          >
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-green-600 text-white">
              <Target className="w-8 h-8" />
            </div>

            <h3
              className="text-2xl md:text-3xl font-bold text-green-600 mb-6"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Our Mission
            </h3>

            <p
              className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              最新のテクノロジーを活用して、お客様のビジネスを次のレベルへと導きます。
              私たちは革新的なソリューションを提供し、お客様の成功をサポートします。
            </p>

            <Link
              href="/about"
              className="inline-flex items-center bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              詳しく見る
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
