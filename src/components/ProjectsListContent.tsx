"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import type { Project } from "@/types/project";

interface ProjectsListContentProps {
  projects: Project[];
}

export default function ProjectsListContent({
  projects,
}: ProjectsListContentProps) {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* ページヘッダー */}
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
            All Projects
          </h1>
          <p
            className="text-xl text-black/80 max-w-3xl mx-auto"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            これまでに手がけたプロジェクトの一覧です。各プロジェクトの詳細をご覧いただけます。
          </p>
        </motion.div>

        {/* プロジェクトグリッド */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
            >
              {/* プロジェクト画像エリア */}
              <div className="aspect-video bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center relative overflow-hidden">
                <div className="text-green-600 font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                  {project.title}
                </div>
                <div className="absolute inset-0 bg-green-600/0 group-hover:bg-green-600/5 transition-colors duration-300" />
              </div>

              {/* プロジェクト情報 */}
              <div className="p-6">
                <h3
                  className="text-xl font-bold text-green-600 mb-3"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-black/80 text-sm mb-4 line-clamp-3"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {project.description}
                </p>

                {/* タグ */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={`${project.id}-tag-${tagIndex}`}
                      className="px-3 py-1 bg-green-600/10 text-green-600 rounded-full text-xs font-medium"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span
                      className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                {/* プロジェクト詳細情報 */}
                <div className="grid grid-cols-2 gap-4 mb-4 text-xs">
                  <div>
                    <p
                      className="text-black/60"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      期間
                    </p>
                    <p
                      className="font-medium text-black"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      {project.duration}
                    </p>
                  </div>
                  <div>
                    <p
                      className="text-black/60"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      チーム
                    </p>
                    <p
                      className="font-medium text-black"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      {project.teamSize}
                    </p>
                  </div>
                </div>

                {/* 詳細ボタン */}
                <Link
                  href={`/projects/${project.id}`}
                  className="block w-full bg-green-600 text-white text-center px-4 py-3 rounded-lg text-sm font-medium hover:bg-green-600/90 transition-colors group-hover:bg-green-700"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  詳細を見る
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 戻るボタン */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <Link
            href="/#works"
            className="inline-block bg-gray-100 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-colors"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            ← Worksセクションに戻る
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
