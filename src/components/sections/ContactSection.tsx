"use client";
import { motion } from "framer-motion";
import { Mail, Phone, ArrowRight } from "lucide-react";
import Link from "next/link";

export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-r from-green-600 to-green-700"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            お気軽にお問い合わせください
          </h2>

          <p
            className="text-xl text-green-100 mb-12 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            プロジェクトのご相談、お見積もり、技術的なご質問など、
            どんなことでもお気軽にお問い合わせください。
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white"
            >
              <Mail className="w-8 h-8 mx-auto mb-4" />
              <h3
                className="text-lg font-bold mb-2"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                メールでのお問い合わせ
              </h3>
              <p
                className="text-green-100 mb-4"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                info@angle-tech.com
              </p>
              <p
                className="text-sm text-green-200"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                24時間受付中
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white"
            >
              <Phone className="w-8 h-8 mx-auto mb-4" />
              <h3
                className="text-lg font-bold mb-2"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                お電話でのお問い合わせ
              </h3>
              <p
                className="text-green-100 mb-4"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                03-1234-5678
              </p>
              <p
                className="text-sm text-green-200"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                平日 9:00-18:00
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 transition-colors duration-200 shadow-lg group"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              お問い合わせフォームへ
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
