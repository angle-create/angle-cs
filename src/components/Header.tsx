"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const menu = [
  { label: "About", href: "/about" },
  { label: "Service", href: "/service" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-black/10"
            : "bg-white/90 backdrop-blur border-b border-black/5"
        }`}
      >
        <nav className="max-w-7xl mx-auto flex items-center px-4 sm:px-6 py-3 sm:py-4">
          {/* ロゴ */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <Link href="/" className="block md:ml-8 lg:ml-12">
              <Image
                src="/logo.png"
                alt="angle logo"
                width={48}
                height={48}
                className="h-8 sm:h-10 md:h-12 w-auto object-contain"
                priority={true}
              />
            </Link>
          </motion.div>

          {/* 中央のスペーサー（デスクトップ用） */}
          <div className="hidden md:block md:flex-1" />

          {/* デスクトップメニュー */}
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex items-center gap-1 lg:gap-2 md:mr-8 lg:mr-12"
          >
            {menu.map((item, index) => (
              <motion.li
                key={item.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="relative text-black font-medium hover:text-green-600 transition-all duration-300 px-3 lg:px-4 py-2 rounded-lg hover:bg-green-50 group"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full group-hover:left-0" />
                </Link>
              </motion.li>
            ))}
          </motion.ul>

          {/* モバイルメニューボタン */}
          <motion.button
            type="button"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 ml-auto"
            aria-label="メニューを開く"
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} className="text-black" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} className="text-black" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </nav>
      </header>

      {/* モバイルメニューオーバーレイ */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* 背景オーバーレイ */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              onClick={closeMenu}
            />

            {/* メニューパネル */}
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 200,
                duration: 0.4,
              }}
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 md:hidden"
            >
              <div className="flex flex-col h-full">
                {/* メニューヘッダー */}
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                  <h2
                    className="text-xl font-bold text-black"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    Menu
                  </h2>
                  <button
                    type="button"
                    onClick={closeMenu}
                    className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                    aria-label="メニューを閉じる"
                  >
                    <X size={20} className="text-gray-600" />
                  </button>
                </div>

                {/* メニューアイテム */}
                <nav className="flex-1 px-6 py-8">
                  <ul className="space-y-2">
                    {menu.map((item, index) => (
                      <motion.li
                        key={item.label}
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                          duration: 0.3,
                          delay: 0.1 + index * 0.1,
                        }}
                      >
                        <Link
                          href={item.href}
                          onClick={closeMenu}
                          className="flex items-center px-4 py-3 text-lg font-medium text-black hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200 group"
                          style={{ fontFamily: "Montserrat, sans-serif" }}
                        >
                          <span className="relative">
                            {item.label}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full" />
                          </span>
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                {/* メニューフッター */}
                <div className="p-6 border-t border-gray-100">
                  <p
                    className="text-sm text-gray-500 text-center"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    © 2024 Angle Technology
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
