"use client";
import { motion } from "framer-motion";

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative h-screen flex items-center justify-center bg-white"
      data-oid="z10qvq9"
    >
      <div className="container mx-auto px-4" data-oid="errksv6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
          data-oid="4yi4ti2"
        >
          <h2
            className="text-4xl md:text-5xl font-bold text-black mb-12 text-center"
            style={{ fontFamily: "Montserrat, sans-serif" }}
            data-oid="qra_y5j"
          >
            About Us
          </h2>

          <div className="grid md:grid-cols-2 gap-12" data-oid="5yv-ksk">
            <div data-oid="jnqog6b">
              <h3
                className="text-2xl font-bold text-green-600 mb-4"
                style={{ fontFamily: "Montserrat, sans-serif" }}
                data-oid="0y0-e-y"
              >
                Mission
              </h3>
              <p
                className="text-black/80 text-lg"
                style={{ fontFamily: "Montserrat, sans-serif" }}
                data-oid="i7ow8v7"
              >
                テクノロジーとデザインの力で、人々の生活をより豊かにする。
                私たちは、最新技術を活用しながら、ユーザー体験を最重視した
                ソリューションを提供します。
              </p>
            </div>

            <div data-oid="1u1w:sz">
              <h3
                className="text-2xl font-bold text-green-600 mb-4"
                style={{ fontFamily: "Montserrat, sans-serif" }}
                data-oid="s:-ts45"
              >
                Vision
              </h3>
              <p
                className="text-black/80 text-lg"
                style={{ fontFamily: "Montserrat, sans-serif" }}
                data-oid="r35ehv8"
              >
                2030年までに、テクノロジーとデザインの融合により、
                100万人の生活にポジティブな影響を与える。
                持続可能な社会の実現に貢献します。
              </p>
            </div>
          </div>

          <div className="mt-16" data-oid="enr3dhv">
            <h3
              className="text-2xl font-bold text-green-600 mb-8 text-center"
              style={{ fontFamily: "Montserrat, sans-serif" }}
              data-oid="2o6bzes"
            >
              数字で見る angle
            </h3>
            <div
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
              data-oid="tqzv3st"
            >
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
                  data-oid="e:q7d3c"
                >
                  <div
                    className="text-4xl font-bold text-black mb-2"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                    data-oid="hbwyadt"
                  >
                    {stat.number}
                  </div>
                  <div
                    className="text-black/60"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                    data-oid="28.uhjb"
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
