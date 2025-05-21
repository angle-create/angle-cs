"use client";
import { motion } from "framer-motion";
import { Eye, Brain, Hammer } from "lucide-react";

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative h-screen flex items-center justify-center bg-white"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2
            className="text-4xl md:text-5xl font-bold text-black mb-12 text-center"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            About Us
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3
                className="text-2xl font-bold text-green-600 mb-4"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Mission
              </h3>
              <p
                className="text-black/80 text-lg"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                私たちはテクノロジーを多角的な視点で捉え、
                最新技術を駆使しながら、
                常にユーザー体験を最優先に考えたソリューションを提供します。
              </p>
            </div>

            <div>
              <h3
                className="text-2xl font-bold text-green-600 mb-4"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Vision
              </h3>
              <p
                className="text-black/80 text-lg"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                多角的な発想と先進技術で、 変化の時代に対応しながら
                ユーザーに寄り添うサービスを築いていきます。
              </p>
            </div>
          </div>

          <div className="mt-16">
            <h3
              className="text-2xl font-bold text-green-600 mb-8 text-center"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Our Principles
            </h3>
            <p
              className="text-black/80 text-lg text-center mb-8"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              一人ひとりに寄り添う、私たちの3つの姿勢
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="border border-green-100 hover:border-green-300 p-8 rounded-lg shadow-sm hover:shadow transition-all duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12 mb-6 rounded-full bg-green-50 text-green-600">
                  <Eye size={24} strokeWidth={2} />
                </div>
                <h4
                  className="text-xl font-bold mb-3 text-black"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Your Perspective First
                </h4>
                <p
                  className="text-sm text-black/60 mb-2"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  相手の視点から
                </p>
                <p
                  className="text-black/80"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  課題の本質を見極めるために、まずは「あなたの視点」で考えます。
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="border border-green-100 hover:border-green-300 p-8 rounded-lg shadow-sm hover:shadow transition-all duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12 mb-6 rounded-full bg-green-50 text-green-600">
                  <Brain size={24} strokeWidth={2} />
                </div>
                <h4
                  className="text-xl font-bold mb-3 text-black"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Flexible Thinking
                </h4>
                <p
                  className="text-sm text-black/60 mb-2"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  柔軟な発想
                </p>
                <p
                  className="text-black/80"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  テンプレートではなく、状況に合わせた「最適解」を提案します。
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="border border-green-100 hover:border-green-300 p-8 rounded-lg shadow-sm hover:shadow transition-all duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12 mb-6 rounded-full bg-green-50 text-green-600">
                  <Hammer size={24} strokeWidth={2} />
                </div>
                <h4
                  className="text-xl font-bold mb-3 text-black"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Crafted With Care
                </h4>
                <p
                  className="text-sm text-black/60 mb-2"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  ていねいな仕事
                </p>
                <p
                  className="text-black/80"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  小さなこだわりの積み重ねが、大きな信頼につながると信じています。
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
