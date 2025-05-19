"use client";
import { motion } from "framer-motion";

const works = [
  {
    title: "NFT Marketplace",
    description:
      "アーティスト向けNFTマーケットプレイスの開発。ブロックチェーン技術を活用し、アート作品の取引を安全かつ効率的に実現。",
    image: "/works/nft-marketplace.jpg",
    tags: ["Web3", "NFT", "Blockchain"],
  },
  {
    title: "AI Chatbot",
    description:
      "自然言語処理を活用したカスタマーサポートチャットボット。24時間365日のサポートを実現し、顧客満足度を向上。",
    image: "/works/ai-chatbot.jpg",
    tags: ["AI", "NLP", "Customer Support"],
  },
  {
    title: "VR Training",
    description:
      "製造業向けVRトレーニングシステム。安全で効率的な作業訓練を実現し、教育コストを削減。",
    image: "/works/vr-training.jpg",
    tags: ["XR", "VR", "Training"],
  },
];

export const WorksSection = () => {
  return (
    <section
      id="works"
      className="relative h-screen flex items-center justify-center bg-white"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2
            className="text-4xl md:text-5xl font-bold text-black mb-16 text-center"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Works
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {works.map((work, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow border border-gray-100"
              >
                <div className="aspect-video bg-white/10">
                  {/* 画像は後で追加 */}
                </div>
                <div className="p-6">
                  <h3
                    className="text-xl font-bold text-green-600 mb-2"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    {work.title}
                  </h3>
                  <p
                    className="text-black/80 text-sm mb-4"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    {work.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {work.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-green-600/10 text-green-600 rounded-full text-sm"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <a
              href="#contact"
              className="inline-block bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-600/90 transition-colors"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              プロジェクトについて詳しく
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
