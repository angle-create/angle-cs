import React from "react";

const menu = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Works", href: "#works" },
  { label: "Contact", href: "#contact" },
];

export const Header = () => (
  <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur border-b border-black/10">
    <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
      <span className="font-bold text-xl tracking-tight text-black">
        <a href="/">
          <img src="/logo.png" alt="angle logo" className="h-13" />
        </a>
      </span>
      <ul className="flex gap-6">
        {menu.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="text-black font-medium hover:text-blue-600 transition-colors px-2 py-1 rounded"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

export default Header;
