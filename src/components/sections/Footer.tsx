import React from "react";

export const Footer = () => (
  <footer
    className="w-full bg-white border-t border-gray-200 py-8 text-center"
    style={{ fontFamily: "Montserrat, sans-serif" }}
    aria-label="サイトのフッター"
    data-oid="dmwmpuk"
  >
    <div data-oid="1bss0d1">
      <span
        style={{ fontWeight: 700, fontSize: "1.1rem", color: "#111" }}
        data-oid="deg_u3_"
      >
        © {new Date().getFullYear()} angle inc.
      </span>
    </div>
  </footer>
);

export default Footer;
