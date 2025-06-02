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
    },
    {
      id: 2,
      title: "新オフィス開設のお知らせ",
      excerpt: "事業拡大に伴い、東京都渋谷区に新しいオフィスを開設いたします。",
      date: "2024-01-10",
      readTime: "3分",
      category: "会社",
    },
    {
      id: 3,
      title: "大手企業向けECサイトリニューアルプロジェクト完了",
      excerpt:
        "6ヶ月間にわたる大規模ECサイトのリニューアルプロジェクトが無事完了しました。",
      date: "2024-01-05",
      readTime: "7分",
      category: "プロジェクト",
    },
    {
      id: 4,
      title: "技術勉強会「React最新動向」を開催",
      excerpt:
        "社内外のエンジニアを対象とした技術勉強会を開催し、Reactの最新動向について共有しました。",
      date: "2023-12-28",
      readTime: "4分",
      category: "イベント",
    },
    {
      id: 5,
      title: "AI技術を活用した新サービスの開発開始",
      excerpt:
        "機械学習とAI技術を活用した革新的なサービスの開発プロジェクトを開始いたします。",
      date: "2023-12-20",
      readTime: "6分",
      category: "技術",
    },
  ];

  return (
    <section id="news" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Latest News
            </h2>
            <p
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Angle Technologyの最新情報をお届けします
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {newsItems.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-2 border border-gray-100"
              >
                <div className="aspect-video bg-gradient-to-r from-green-400 to-green-600 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/10" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 text-green-600 px-2 py-1 rounded text-sm font-medium">
                      {item.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(item.date).toLocaleDateString("ja-JP")}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {item.readTime}
                    </div>
                  </div>

                  <h3
                    className="text-lg font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-200 line-clamp-2"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    {item.title}
                  </h3>

                  <p
                    className="text-gray-600 leading-relaxed mb-4 text-sm line-clamp-3"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    {item.excerpt}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link
              href="/news"
              className="inline-flex items-center bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200 group"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              すべてのニュースを見る
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
