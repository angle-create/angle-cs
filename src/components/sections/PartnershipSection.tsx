"use client";
import { motion } from "framer-motion";
import {
  MessageCircle,
  Lightbulb,
  Cog,
  Rocket,
  ArrowRight,
} from "lucide-react";

export const PartnershipSection = () => {
  const steps = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "出会い",
      subtitle: "Listen & Understand",
      description: "あなたの想いや課題を深く理解することから始まります。",
      color: "from-blue-500 to-blue-600",
      delay: 0.1,
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "発想",
      subtitle: "Ideate & Design",
      description: "共に考え、新しいアイデアを形にしていきます。",
      color: "from-yellow-500 to-orange-500",
      delay: 0.2,
    },
    {
      icon: <Cog className="w-8 h-8" />,
      title: "創造",
      subtitle: "Build & Iterate",
      description: "技術と創意工夫で、理想を現実に変えていきます。",
      color: "from-green-500 to-green-600",
      delay: 0.3,
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "飛躍",
      subtitle: "Launch & Grow",
      description: "一緒に成長し、さらなる高みを目指します。",
      color: "from-purple-500 to-purple-600",
      delay: 0.4,
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <motion.div
          initial={{ scale: 0, rotate: 0 }}
          whileInView={{ scale: 1, rotate: 180 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          viewport={{ once: true }}
          className="absolute top-20 left-20 w-64 h-64 rounded-full bg-green-400"
        />
        <motion.div
          initial={{ scale: 0, rotate: 0 }}
          whileInView={{ scale: 1, rotate: -180 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          viewport={{ once: true }}
          className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-blue-400"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl mx-auto"
        >
          {/* ヘッダー */}
          <div className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-800 mb-6 tracking-tight"
              style={{
                fontFamily: "system-ui, -apple-system, sans-serif",
                textShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
              }}
            >
              Partnership Journey
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto font-light tracking-wide"
              style={{
                fontFamily: "system-ui, -apple-system, sans-serif",
                letterSpacing: "0.02em",
                lineHeight: "1.6",
              }}
            >
              ひとりでは見えない景色を、ふたりで見に行きましょう
            </motion.p>
          </div>

          {/* プロセスステップ */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: step.delay }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* 接続線（最後以外） */}
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: step.delay + 0.5 }}
                    viewport={{ once: true }}
                    className="hidden lg:block absolute top-16 left-full w-8 h-0.5 bg-gradient-to-r from-green-400 to-green-500 transform origin-left"
                  />
                )}

                <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 border border-gray-100/50 text-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: step.delay + 0.2 }}
                    viewport={{ once: true }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center text-white mb-6 mx-auto group-hover:scale-110 transition-transform duration-500 shadow-lg`}
                  >
                    {step.icon}
                  </motion.div>

                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: step.delay + 0.3 }}
                    viewport={{ once: true }}
                    className="text-2xl font-black text-gray-800 mb-2 tracking-tight"
                    style={{
                      fontFamily: "system-ui, -apple-system, sans-serif",
                    }}
                  >
                    {step.title}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: step.delay + 0.4 }}
                    viewport={{ once: true }}
                    className="text-sm font-medium text-green-600 mb-4 tracking-wide"
                    style={{
                      fontFamily: "system-ui, -apple-system, sans-serif",
                    }}
                  >
                    {step.subtitle}
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: step.delay + 0.5 }}
                    viewport={{ once: true }}
                    className="text-gray-600 leading-relaxed font-light"
                    style={{
                      fontFamily: "system-ui, -apple-system, sans-serif",
                      letterSpacing: "0.01em",
                      lineHeight: "1.6",
                    }}
                  >
                    {step.description}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 中央のメッセージ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-r from-green-500 to-green-600 rounded-3xl p-12 text-white shadow-2xl"
          >
            <h3
              className="text-3xl sm:text-4xl font-black mb-4 tracking-tight"
              style={{
                fontFamily: "system-ui, -apple-system, sans-serif",
                textShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
              }}
            >
              1 + 1 = ∞
            </h3>
            <p
              className="text-xl sm:text-2xl font-light tracking-wide max-w-2xl mx-auto"
              style={{
                fontFamily: "system-ui, -apple-system, sans-serif",
                letterSpacing: "0.02em",
                lineHeight: "1.6",
              }}
            >
              あなたのアイデアと私たちの技術が出会うとき、
              無限の可能性が生まれます。
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
