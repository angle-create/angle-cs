"use client";
import { motion } from "framer-motion";

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
              数字で見る angle
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "50+", label: "プロジェクト数" },
                { number: "30+", label: "企業パートナー" },
                { number: "100%", label: "顧客満足度" },
                { number: "24/7", label: "サポート体制" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div
                    className="text-4xl font-bold text-black mb-2"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    {stat.number}
                  </div>
                  <div
                    className="text-black/60"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
