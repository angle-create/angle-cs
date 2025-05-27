"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Calendar, Users, User } from "lucide-react";
import type { Project } from "@/types/project";

interface ProjectDetailContentProps {
  project: Project;
}

export default function ProjectDetailContent({
  project,
}: ProjectDetailContentProps) {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* 戻るボタン */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            href="/#works"
            className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            <ArrowLeft size={20} />
            Works に戻る
          </Link>
        </motion.div>

        {/* プロジェクトヘッダー */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1
            className="text-4xl md:text-6xl font-bold text-black mb-6"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            {project.title}
          </h1>
          <p
            className="text-xl text-black/80 max-w-3xl mx-auto mb-8"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            {project.description}
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {project.tags.map((tag, index) => (
              <span
                key={`${project.id}-tag-${index}`}
                className="px-4 py-2 bg-green-600/10 text-green-600 rounded-full text-sm font-medium"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* プロジェクト概要カード */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-12"
        >
          <h2
            className="text-2xl font-bold text-black mb-6"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            プロジェクト概要
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center gap-3">
              <Calendar className="text-green-600" size={24} />
              <div>
                <p
                  className="text-sm text-black/60"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  開発期間
                </p>
                <p
                  className="font-medium text-black"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {project.duration}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Users className="text-green-600" size={24} />
              <div>
                <p
                  className="text-sm text-black/60"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  チーム規模
                </p>
                <p
                  className="font-medium text-black"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {project.teamSize}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <User className="text-green-600" size={24} />
              <div>
                <p
                  className="text-sm text-black/60"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  担当役割
                </p>
                <p
                  className="font-medium text-black"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {project.role}
                </p>
              </div>
            </div>
          </div>
          <p
            className="text-black/80 leading-relaxed"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            {project.detailedDescription}
          </p>
        </motion.div>

        {/* カードグリッド */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* 技術スタック */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8"
          >
            <h3
              className="text-xl font-bold text-black mb-6"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              技術スタック
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {project.technologies.map((tech, index) => (
                <div
                  key={`${project.id}-tech-${index}`}
                  className="bg-green-50 text-green-700 px-3 py-2 rounded-lg text-sm font-medium text-center"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {tech}
                </div>
              ))}
            </div>
          </motion.div>

          {/* 主要機能 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8"
          >
            <h3
              className="text-xl font-bold text-black mb-6"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              主要機能
            </h3>
            <ul className="space-y-3">
              {project.features.map((feature, index) => (
                <li
                  key={`${project.id}-feature-${index}`}
                  className="flex items-start gap-3"
                >
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                  <span
                    className="text-black/80"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* 技術的課題 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8"
          >
            <h3
              className="text-xl font-bold text-black mb-6"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              技術的課題
            </h3>
            <ul className="space-y-3">
              {project.challenges.map((challenge, index) => (
                <li
                  key={`${project.id}-challenge-${index}`}
                  className="flex items-start gap-3"
                >
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                  <span
                    className="text-black/80"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    {challenge}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* 成果・結果 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8"
          >
            <h3
              className="text-xl font-bold text-black mb-6"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              成果・結果
            </h3>
            <ul className="space-y-3">
              {project.results.map((result, index) => (
                <li
                  key={`${project.id}-result-${index}`}
                  className="flex items-start gap-3"
                >
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                  <span
                    className="text-black/80"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    {result}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* 他のプロジェクト */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-center"
        >
          <Link
            href="/projects"
            className="inline-block bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-600/90 transition-colors"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            他のプロジェクトも見る
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
