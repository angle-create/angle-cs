"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/data/projects";

export const WorksSection = () => {
  return (
    <section
      id="works"
      className="relative min-h-screen flex items-center justify-center bg-white py-16 sm:py-20"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-7xl mx-auto"
        >
          <h2
            className="text-4xl md:text-5xl font-bold text-black mb-16 text-center"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Works
          </h2>

          {/* デスクトップ：グリッド表示 */}
          <div className="hidden md:grid md:grid-cols-3 gap-8 mb-16">
            {projects.slice(0, 3).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-video bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center">
                  <div className="text-green-600 font-bold text-lg">
                    {project.title}
                  </div>
                </div>
                <div className="p-6">
                  <h3
                    className="text-xl font-bold text-green-600 mb-2"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-black/80 text-sm mb-4"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={`${project.id}-${tag}-${tagIndex}`}
                        className="px-3 py-1 bg-green-600/10 text-green-600 rounded-full text-sm"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/projects/${project.id}`}
                    className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-600/90 transition-colors"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    詳細を見る
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* モバイル・タブレット：横スクロール */}
          <div className="md:hidden mb-16">
            <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="min-w-[280px] sm:min-w-[320px] bg-white rounded-2xl overflow-hidden shadow border border-gray-100 hover:shadow-lg transition-all duration-300 snap-center"
                >
                  <div className="aspect-video bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center">
                    <div className="text-green-600 font-bold text-lg">
                      {project.title}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3
                      className="text-xl font-bold text-green-600 mb-2"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      {project.title}
                    </h3>
                    <p
                      className="text-black/80 text-sm mb-4"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={`${project.id}-mobile-${tag}-${tagIndex}`}
                          className="px-3 py-1 bg-green-600/10 text-green-600 rounded-full text-sm"
                          style={{ fontFamily: "Montserrat, sans-serif" }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/projects/${project.id}`}
                      className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-600/90 transition-colors"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      詳細を見る
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link
              href="/projects"
              className="inline-block bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-600/90 transition-colors"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              プロジェクトについて詳しく
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
