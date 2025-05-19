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
    data-oid="a1zpnhu"
  >
    <nav
      className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3"
      data-oid="8_rn13b"
    >
      <span
        className="font-bold text-xl tracking-tight text-black"
        style={{ fontFamily: "Montserrat, sans-serif" }}
        data-oid="hrsg05w"
      >
        angle
      </span>
      <ul className="flex gap-6" data-oid="nouf7jv">
        {menu.map((item) => (
          <li key={item.label} data-oid="h2mhqc:">
            <a
              href={item.href}
              className="text-black font-medium hover:text-blue-600 transition-colors px-2 py-1 rounded"
              style={{ fontFamily: "Montserrat, sans-serif" }}
              data-oid="2hr29du"
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
