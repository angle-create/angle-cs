"use client";
import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Database,
  ArrowRight,
  Lightbulb,
  Code,
  Rocket,
} from "lucide-react";
import Link from "next/link";

export const ServiceSection = () => {
  const collaborations = [
    {
      icon: <Lightbulb className="w-10 h-10" />,
      title: "アイデア × デザイン",
      description:
        "あなたの想いを形にする。ユーザー体験を重視したデザインで、アイデアを魅力的な形に変換します。",
      features: ["UX/UIデザイン", "プロトタイピング", "ユーザーテスト"],
      color: "from-blue-500 to-blue-600",
      shadowColor: "rgba(59, 130, 246, 0.3)",
    },
    {
      icon: <Code className="w-10 h-10" />,
      title: "構想 × 開発",
      description:
        "技術的な実現可能性とビジネス価値を両立。最新技術で確実に動くシステムを構築します。",
      features: ["フルスタック開発", "API設計", "パフォーマンス最適化"],
      color: "from-green-500 to-green-600",
      shadowColor: "rgba(34, 197, 94, 0.3)",
    },
    {
      icon: <Rocket className="w-10 h-10" />,
      title: "挑戦 × 成長",
      description:
        "継続的な改善とスケーリング。一緒に成長し続けるパートナーシップを築きます。",
      features: ["運用サポート", "機能拡張", "成果分析"],
      color: "from-purple-500 to-purple-600",
      shadowColor: "rgba(147, 51, 234, 0.3)",
    },
  ];

  return (
    <section id="service" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-7xl mx-auto"
        >
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
              Your Ideas × Our Technology
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
              異なる視点が出会うとき、革新が生まれます
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {collaborations.map((collab, index) => (
              <motion.div
                key={collab.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 group hover:-translate-y-3 border border-gray-100/50"
                style={{
                  boxShadow: `0 10px 40px rgba(0, 0, 0, 0.1), 0 0 20px ${collab.shadowColor}`,
                }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.15 + 0.2 }}
                  viewport={{ once: true }}
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${collab.color} flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg`}
                >
                  {collab.icon}
                </motion.div>

                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                  viewport={{ once: true }}
                  className="text-2xl sm:text-3xl font-black text-gray-800 mb-4 tracking-tight"
                  style={{
                    fontFamily: "system-ui, -apple-system, sans-serif",
                  }}
                >
                  {collab.title}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 + 0.4 }}
                  viewport={{ once: true }}
                  className="text-gray-600 mb-6 leading-relaxed text-lg font-light"
                  style={{
                    fontFamily: "system-ui, -apple-system, sans-serif",
                    letterSpacing: "0.01em",
                    lineHeight: "1.6",
                  }}
                >
                  {collab.description}
                </motion.p>

                <motion.ul
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 + 0.5 }}
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  {collab.features.map((feature, featureIndex) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.15 + 0.6 + featureIndex * 0.1,
                      }}
                      viewport={{ once: true }}
                      className="text-gray-500 flex items-center font-medium"
                      style={{
                        fontFamily: "system-ui, -apple-system, sans-serif",
                      }}
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-green-500 rounded-full mr-3 shadow-sm" />
                      {feature}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link
              href="/service"
              className="inline-flex items-center bg-gradient-to-r from-green-500 to-green-600 text-white px-12 py-5 rounded-2xl font-bold text-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 group"
              style={{
                fontFamily: "system-ui, -apple-system, sans-serif",
                letterSpacing: "0.02em",
              }}
            >
              協力プロセスを見る
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
