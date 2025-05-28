"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";

const NewsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "すべて" },
    { id: "technology", label: "技術" },
    { id: "company", label: "会社" },
    { id: "project", label: "プロジェクト" },
    { id: "event", label: "イベント" },
  ];

  const newsItems = [
    {
      id: 1,
      title: "Next.js 14の新機能を活用したプロジェクトを開始",
      excerpt:
        "最新のNext.js 14の機能を活用して、より高速で効率的なウェブアプリケーションの開発を開始しました。",
      date: "2024-01-15",
      readTime: "5分",
      category: "technology",
      image: "/api/placeholder/400/250",
      featured: true,
    },
    {
      id: 2,
      title: "新オフィス開設のお知らせ",
      excerpt:
        "事業拡大に伴い、東京都渋谷区に新しいオフィスを開設いたします。より良いサービス提供を目指します。",
      date: "2024-01-10",
      readTime: "3分",
      category: "company",
      image: "/api/placeholder/400/250",
      featured: false,
    },
    {
      id: 3,
      title: "大手企業向けECサイトリニューアルプロジェクト完了",
      excerpt:
        "6ヶ月間にわたる大規模ECサイトのリニューアルプロジェクトが無事完了しました。",
      date: "2024-01-05",
      readTime: "7分",
      category: "project",
      image: "/api/placeholder/400/250",
      featured: true,
    },
    {
      id: 4,
      title: "技術勉強会「React最新動向」を開催",
      excerpt:
        "社内外のエンジニアを対象とした技術勉強会を開催し、Reactの最新動向について共有しました。",
      date: "2023-12-28",
      readTime: "4分",
      category: "event",
      image: "/api/placeholder/400/250",
      featured: false,
    },
    {
      id: 5,
      title: "AI技術を活用した新サービスの開発開始",
      excerpt:
        "機械学習とAI技術を活用した革新的なサービスの開発プロジェクトを開始いたします。",
      date: "2023-12-20",
      readTime: "6分",
      category: "technology",
      image: "/api/placeholder/400/250",
      featured: false,
    },
    {
      id: 6,
      title: "年末年始休業のお知らせ",
      excerpt:
        "2023年12月29日から2024年1月3日まで年末年始休業とさせていただきます。",
      date: "2023-12-15",
      readTime: "2分",
      category: "company",
      image: "/api/placeholder/400/250",
      featured: false,
    },
  ];

  const filteredNews =
    selectedCategory === "all"
      ? newsItems
      : newsItems.filter((item) => item.category === selectedCategory);

  const featuredNews = newsItems.filter((item) => item.featured);
  const regularNews = filteredNews.filter((item) => !item.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-20">
      {/* ヒーローセクション */}
      <section className="pt-4 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Latest <span className="text-green-600">News</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Angle
              Technologyの最新情報、技術動向、プロジェクト成果をお届けします。
            </p>
          </motion.div>
        </div>
      </section>

      {/* カテゴリフィルター */}
      <section className="pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                type="button"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-green-600 text-white shadow-lg"
                    : "bg-white text-gray-600 hover:bg-green-50 hover:text-green-600 shadow-md"
                }`}
              >
                {category.label}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* 注目記事 */}
      {selectedCategory === "all" && featuredNews.length > 0 && (
        <section className="pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center"
            >
              注目記事
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
              {featuredNews.slice(0, 2).map((item, index) => (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-2"
                >
                  <div className="aspect-video bg-gradient-to-r from-green-400 to-green-600 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        注目
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
                      <div className="flex items-center gap-1">
                        <Tag className="w-4 h-4" />
                        {
                          categories.find((cat) => cat.id === item.category)
                            ?.label
                        }
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-200">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed mb-4">
                      {item.excerpt}
                    </p>

                    <button
                      type="button"
                      className="flex items-center text-green-600 font-medium hover:text-green-700 transition-colors duration-200 group-hover:translate-x-2"
                    >
                      続きを読む
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 記事一覧 */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center"
          >
            {selectedCategory === "all"
              ? "すべての記事"
              : `${
                  categories.find((cat) => cat.id === selectedCategory)?.label
                }の記事`}
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(selectedCategory === "all" ? regularNews : filteredNews).map(
              (item, index) => (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-2"
                >
                  <div className="aspect-video bg-gradient-to-r from-gray-400 to-gray-600 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/10" />
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

                    <div className="mb-3">
                      <span className="bg-green-100 text-green-600 px-2 py-1 rounded text-sm font-medium">
                        {
                          categories.find((cat) => cat.id === item.category)
                            ?.label
                        }
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-200">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                      {item.excerpt}
                    </p>

                    <button
                      type="button"
                      className="flex items-center text-green-600 font-medium hover:text-green-700 transition-colors duration-200 group-hover:translate-x-2"
                    >
                      続きを読む
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </motion.article>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;
