"use client";
import { motion } from "framer-motion";
import { Mail, Phone, ArrowRight } from "lucide-react";
import Link from "next/link";

export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-green-500 via-green-600 to-green-700 relative overflow-hidden"
    >
      {/* 背景装飾 */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <motion.div
          initial={{ scale: 0, rotate: 0 }}
          whileInView={{ scale: 1, rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          viewport={{ once: true }}
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-white"
        />
        <motion.div
          initial={{ scale: 0, rotate: 0 }}
          whileInView={{ scale: 1, rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          viewport={{ once: true }}
          className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-white"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-5xl mx-auto text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-8 tracking-tight"
            style={{
              fontFamily: "system-ui, -apple-system, sans-serif",
              textShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
            }}
          >
            お気軽にお問い合わせください
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl sm:text-2xl text-green-100 mb-16 max-w-4xl mx-auto leading-relaxed font-light tracking-wide"
            style={{
              fontFamily: "system-ui, -apple-system, sans-serif",
              letterSpacing: "0.02em",
              lineHeight: "1.6",
            }}
          >
            プロジェクトのご相談、お見積もり、技術的なご質問など、
            どんなことでもお気軽にお問い合わせください。
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white/15 backdrop-blur-md rounded-3xl p-8 text-white border border-white/20 hover:bg-white/20 transition-all duration-300 group"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
              >
                <Mail className="w-8 h-8" />
              </motion.div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="text-xl sm:text-2xl font-black mb-4 tracking-tight"
                style={{
                  fontFamily: "system-ui, -apple-system, sans-serif",
                }}
              >
                メールでのお問い合わせ
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-green-100 mb-4 text-lg font-medium"
                style={{
                  fontFamily: "system-ui, -apple-system, sans-serif",
                }}
              >
                info@angle-tech.com
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                className="text-green-200 font-light"
                style={{
                  fontFamily: "system-ui, -apple-system, sans-serif",
                }}
              >
                24時間受付中
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white/15 backdrop-blur-md rounded-3xl p-8 text-white border border-white/20 hover:bg-white/20 transition-all duration-300 group"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
              >
                <Phone className="w-8 h-8" />
              </motion.div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-xl sm:text-2xl font-black mb-4 tracking-tight"
                style={{
                  fontFamily: "system-ui, -apple-system, sans-serif",
                }}
              >
                お電話でのお問い合わせ
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                className="text-green-100 mb-4 text-lg font-medium"
                style={{
                  fontFamily: "system-ui, -apple-system, sans-serif",
                }}
              >
                03-1234-5678
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="text-green-200 font-light"
                style={{
                  fontFamily: "system-ui, -apple-system, sans-serif",
                }}
              >
                平日 9:00-18:00
              </motion.p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center bg-white text-green-600 px-12 py-5 rounded-2xl font-black text-xl hover:bg-gray-50 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 group"
              style={{
                fontFamily: "system-ui, -apple-system, sans-serif",
                letterSpacing: "0.02em",
              }}
            >
              お問い合わせフォームへ
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
