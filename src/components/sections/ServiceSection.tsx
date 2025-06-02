"use client";
import { motion } from "framer-motion";
import { Globe, Smartphone, Database, ArrowRight } from "lucide-react";
import Link from "next/link";

export const ServiceSection = () => {
  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "ウェブ開発",
      description:
        "レスポンシブで高性能なウェブサイトとウェブアプリケーションの開発",
      features: ["React/Next.js", "TypeScript", "SEO最適化"],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "モバイルアプリ開発",
      description:
        "iOS・Android対応のネイティブ・クロスプラットフォームアプリ開発",
      features: ["React Native", "Flutter", "Swift"],
      color: "from-green-500 to-green-600",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "バックエンド開発",
      description: "スケーラブルで安全なサーバーサイドシステムの構築",
      features: ["API設計", "クラウド構築", "データベース設計"],
      color: "from-purple-500 to-purple-600",
    },
  ];

  return (
    <section id="service" className="py-20 bg-gray-50">
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
              Our Services
            </h2>
            <p
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              最新のテクノロジーを活用した包括的なソリューションを提供します
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
              >
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {service.icon}
                </div>

                <h3
                  className="text-xl font-bold text-gray-900 mb-3"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {service.title}
                </h3>

                <p
                  className="text-gray-600 mb-4 leading-relaxed"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {service.description}
                </p>

                <ul className="space-y-1 mb-4">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-sm text-gray-500 flex items-center"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link
              href="/service"
              className="inline-flex items-center bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200 group"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              すべてのサービスを見る
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
