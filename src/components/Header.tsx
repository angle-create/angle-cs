import React from "react";

const menu = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Works", href: "#works" },
  { label: "Contact", href: "#contact" },
];

export const Header = () => (
  <header
    className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur border-b border-black/10"
    data-oid="3o1dc38"
  >
    <nav
      className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3"
      data-oid="sr8ixwx"
    >
      <span
        className="font-bold text-xl tracking-tight text-black"
        style={{ fontFamily: "Montserrat, sans-serif" }}
        data-oid="nh.2.v5"
      >
        angle
      </span>
      <ul className="flex gap-6" data-oid=".vvj6zi">
        {menu.map((item) => (
          <li key={item.label} data-oid=":75rc-d">
            <a
              href={item.href}
              className="text-black font-medium hover:text-blue-600 transition-colors px-2 py-1 rounded"
              style={{ fontFamily: "Montserrat, sans-serif" }}
              data-oid="mcy:eh:"
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
