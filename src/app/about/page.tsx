"use client";
import React from "react";
import { motion } from "framer-motion";
import { Users, Target, Award, Heart } from "lucide-react";

const AboutPage = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Mission",
      description:
        "最新のテクノロジーを活用して、お客様のビジネスを次のレベルへと導きます。",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team",
      description:
        "経験豊富なエンジニアとデザイナーが、お客様の成功のために協力します。",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality",
      description:
        "高品質なソリューションの提供を通じて、長期的なパートナーシップを築きます。",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Passion",
      description:
        "技術への情熱と創造性を持って、革新的なソリューションを生み出します。",
    },
  ];

  const stats = [
    { number: "100+", label: "プロジェクト完了" },
    { number: "50+", label: "満足したクライアント" },
    { number: "5+", label: "年の経験" },
    { number: "24/7", label: "サポート体制" },
  ];

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
              About <span className="text-green-600">Angle Technology</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              私たちは革新的なテクノロジーソリューションを提供し、
              お客様のビジネスの成長と成功をサポートする専門チームです。
            </p>
          </motion.div>
        </div>
      </section>

      {/* 統計セクション */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 価値観セクション */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              私たちの価値観
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              お客様との信頼関係を築き、共に成長していくための基本理念です。
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-2"
              >
                <div className="text-green-600 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ストーリーセクション */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                私たちのストーリー
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Angle
                  Technologyは、テクノロジーの力でビジネスの可能性を広げることを使命として設立されました。
                  私たちは常に最新の技術トレンドを追求し、お客様のニーズに合わせたカスタムソリューションを提供しています。
                </p>
                <p>
                  創業以来、私たちは数多くのプロジェクトを成功に導き、
                  お客様との長期的なパートナーシップを築いてきました。
                  技術的な専門知識と創造性を組み合わせ、革新的なソリューションを生み出し続けています。
                </p>
                <p>
                  今後も、お客様のビジネス成長をサポートし、
                  テクノロジーの進歩と共に進化し続ける企業として歩んでまいります。
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">私たちの約束</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3" />
                    高品質なソリューションの提供
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3" />
                    透明性のあるコミュニケーション
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3" />
                    継続的なサポートとメンテナンス
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3" />
                    お客様の成功を第一に考える姿勢
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
