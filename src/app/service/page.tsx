"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Smartphone,
  Globe,
  Database,
  Shield,
  Zap,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const ServicePage = () => {
  const services = [
    {
      icon: <Globe className="w-12 h-12" />,
      title: "ウェブ開発",
      description:
        "レスポンシブで高性能なウェブサイトとウェブアプリケーションの開発",
      features: ["React/Next.js", "Node.js", "TypeScript", "SEO最適化"],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "モバイルアプリ開発",
      description:
        "iOS・Android対応のネイティブ・クロスプラットフォームアプリ開発",
      features: ["React Native", "Flutter", "Swift", "Kotlin"],
      color: "from-green-500 to-green-600",
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: "バックエンド開発",
      description: "スケーラブルで安全なサーバーサイドシステムの構築",
      features: [
        "API設計",
        "データベース設計",
        "クラウド構築",
        "マイクロサービス",
      ],
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "セキュリティ",
      description: "包括的なセキュリティ監査とセキュアなシステム設計",
      features: ["脆弱性診断", "セキュリティ設計", "認証システム", "暗号化"],
      color: "from-red-500 to-red-600",
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "パフォーマンス最適化",
      description: "アプリケーションの速度とパフォーマンスの向上",
      features: ["コード最適化", "キャッシュ戦略", "CDN設定", "監視システム"],
      color: "from-yellow-500 to-yellow-600",
    },
    {
      icon: <Code className="w-12 h-12" />,
      title: "技術コンサルティング",
      description: "技術戦略の立案と最適な技術スタックの選定支援",
      features: [
        "技術選定",
        "アーキテクチャ設計",
        "開発プロセス",
        "チーム支援",
      ],
      color: "from-indigo-500 to-indigo-600",
    },
  ];

  const process = [
    {
      step: "01",
      title: "要件ヒアリング",
      description:
        "お客様のニーズと目標を詳しくお聞きし、最適なソリューションを提案します。",
    },
    {
      step: "02",
      title: "設計・企画",
      description: "技術仕様書の作成とプロジェクトの詳細な計画を立案します。",
    },
    {
      step: "03",
      title: "開発・実装",
      description: "最新の技術とベストプラクティスを用いて開発を進めます。",
    },
    {
      step: "04",
      title: "テスト・検証",
      description: "品質保証のための包括的なテストと動作検証を実施します。",
    },
    {
      step: "05",
      title: "デプロイ・運用",
      description: "本番環境への展開と継続的な運用サポートを提供します。",
    },
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
              Our <span className="text-green-600">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              最新のテクノロジーを活用した包括的なソリューションで、
              お客様のビジネス成長をサポートします。
            </p>
          </motion.div>
        </div>
      </section>

      {/* サービス一覧 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 border border-gray-100"
              >
                <div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  className="flex items-center text-green-600 font-medium hover:text-green-700 transition-colors duration-200 group-hover:translate-x-2"
                >
                  詳細を見る
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 開発プロセス */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              開発プロセス
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              お客様との密接な連携により、高品質なソリューションを確実にお届けします。
            </p>
          </motion.div>

          <div className="relative">
            {/* プロセスライン */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-green-200 transform -translate-y-1/2" />

            <div className="grid md:grid-cols-5 gap-8">
              {process.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative text-center"
                >
                  {/* ステップ番号 */}
                  <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 relative z-10">
                    {item.step}
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA セクション */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              プロジェクトを始めませんか？
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              お客様のアイデアを現実にするお手伝いをさせてください。
              無料相談からスタートできます。
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 transition-colors duration-200 shadow-lg"
            >
              無料相談を申し込む
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;
