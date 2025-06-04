"use client";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

export const NewsSection = () => {
  // ニュースデータ（実際のプロジェクトでは外部データソースから取得）
  const newsItems = [
    {
      id: 1,
      title: "Next.js 14の新機能を活用したプロジェクトを開始",
      excerpt:
        "最新のNext.js 14の機能を活用して、より高速で効率的なウェブアプリケーションの開発を開始しました。",
      date: "2024-01-15",
      readTime: "5分",
      category: "技術",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      id: 2,
      title: "新オフィス開設のお知らせ",
      excerpt: "事業拡大に伴い、東京都渋谷区に新しいオフィスを開設いたします。",
      date: "2024-01-10",
      readTime: "3分",
      category: "会社",
      gradient: "from-green-500 to-green-600",
    },
    {
      id: 3,
      title: "大手企業向けECサイトリニューアルプロジェクト完了",
      excerpt:
        "6ヶ月間にわたる大規模ECサイトのリニューアルプロジェクトが無事完了しました。",
      date: "2024-01-05",
      readTime: "7分",
      category: "プロジェクト",
      gradient: "from-purple-500 to-purple-600",
    },
    {
      id: 4,
      title: "技術勉強会「React最新動向」を開催",
      excerpt:
        "社内外のエンジニアを対象とした技術勉強会を開催し、Reactの最新動向について共有しました。",
      date: "2023-12-28",
      readTime: "4分",
      category: "イベント",
      gradient: "from-orange-500 to-orange-600",
    },
    {
      id: 5,
      title: "AI技術を活用した新サービスの開発開始",
      excerpt:
        "機械学習とAI技術を活用した革新的なサービスの開発プロジェクトを開始いたします。",
      date: "2023-12-20",
      readTime: "6分",
      category: "技術",
      gradient: "from-teal-500 to-teal-600",
    },
  ];

  return (
    <section
      id="news"
      className="py-24 bg-gradient-to-br from-[#fafaf7] via-[#f5f5f2] to-[#f0f0ed]"
    >
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
              Success Stories
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
              パートナーシップから生まれた成果をご紹介します
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {newsItems.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group hover:-translate-y-3 border border-white/50"
              >
                <div
                  className={`aspect-video bg-gradient-to-r ${item.gradient} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black/10" />
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                    viewport={{ once: true }}
                    className="absolute top-6 left-6"
                  >
                    <span className="bg-white/95 text-gray-800 px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      {item.category}
                    </span>
                  </motion.div>
                </div>

                <div className="p-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-6 text-sm text-gray-500 mb-4"
                  >
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span
                        style={{
                          fontFamily: "system-ui, -apple-system, sans-serif",
                        }}
                      >
                        {new Date(item.date).toLocaleDateString("ja-JP")}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span
                        style={{
                          fontFamily: "system-ui, -apple-system, sans-serif",
                        }}
                      >
                        {item.readTime}
                      </span>
                    </div>
                  </motion.div>

                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                    viewport={{ once: true }}
                    className="text-xl sm:text-2xl font-black text-gray-800 mb-4 group-hover:text-green-600 transition-colors duration-300 line-clamp-2 tracking-tight"
                    style={{
                      fontFamily: "system-ui, -apple-system, sans-serif",
                    }}
                  >
                    {item.title}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                    viewport={{ once: true }}
                    className="text-gray-600 leading-relaxed text-base line-clamp-3 font-light"
                    style={{
                      fontFamily: "system-ui, -apple-system, sans-serif",
                      letterSpacing: "0.01em",
                      lineHeight: "1.6",
                    }}
                  >
                    {item.excerpt}
                  </motion.p>
                </div>
              </motion.article>
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
              href="/news"
              className="inline-flex items-center bg-gradient-to-r from-green-500 to-green-600 text-white px-12 py-5 rounded-2xl font-bold text-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 group"
              style={{
                fontFamily: "system-ui, -apple-system, sans-serif",
                letterSpacing: "0.02em",
              }}
            >
              すべてのニュースを見る
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
