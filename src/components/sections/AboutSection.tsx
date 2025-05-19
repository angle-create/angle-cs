"use client";
import { motion } from "framer-motion";

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative h-screen flex items-center justify-center bg-white"
      data-oid="6sms9o3"
    >
      <div className="container mx-auto px-4" data-oid="jsirdkw">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
          data-oid="7zkk-49"
        >
          <h2
            className="text-4xl md:text-5xl font-bold text-black mb-12 text-center"
            style={{ fontFamily: "Montserrat, sans-serif" }}
            data-oid="js2st.4"
          >
            About Us
          </h2>

          <div className="grid md:grid-cols-2 gap-12" data-oid="is2to1i">
            <div data-oid="puw3oa3">
              <h3
                className="text-2xl font-bold text-green-600 mb-4"
                style={{ fontFamily: "Montserrat, sans-serif" }}
                data-oid="h.sc1pa"
              >
                Mission
              </h3>
              <p
                className="text-black/80 text-lg"
                style={{ fontFamily: "Montserrat, sans-serif" }}
                data-oid="618madt"
              >
                テクノロジーとデザインの力で、人々の生活をより豊かにする。
                私たちは、最新技術を活用しながら、ユーザー体験を最重視した
                ソリューションを提供します。
              </p>
            </div>

            <div data-oid="td8j:y5">
              <h3
                className="text-2xl font-bold text-green-600 mb-4"
                style={{ fontFamily: "Montserrat, sans-serif" }}
                data-oid="1:_5.o1"
              >
                Vision
              </h3>
              <p
                className="text-black/80 text-lg"
                style={{ fontFamily: "Montserrat, sans-serif" }}
                data-oid="v-mk7:2"
              >
                2030年までに、テクノロジーとデザインの融合により、
                100万人の生活にポジティブな影響を与える。
                持続可能な社会の実現に貢献します。
              </p>
            </div>
          </div>

          <div className="mt-16" data-oid="rvlx0fp">
            <h3
              className="text-2xl font-bold text-green-600 mb-8 text-center"
              style={{ fontFamily: "Montserrat, sans-serif" }}
              data-oid="p8altzl"
            >
              数字で見る angle
            </h3>
            <div
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
              data-oid="tyx7v2i"
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
                  data-oid="y2wtsgu"
                >
                  <div
                    className="text-4xl font-bold text-black mb-2"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                    data-oid="tm6d0-v"
                  >
                    {stat.number}
                  </div>
                  <div
                    className="text-black/60"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                    data-oid="qlqpttl"
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
