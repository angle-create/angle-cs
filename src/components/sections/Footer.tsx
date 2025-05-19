import React from "react";

export const Footer = () => (
  <footer
    className="w-full bg-white border-t border-gray-200 py-8 text-center"
    style={{ fontFamily: "Montserrat, sans-serif" }}
    aria-label="サイトのフッター"
    data-oid="o12rpth"
  >
    <div data-oid="jie3_aq">
      <span
        style={{ fontWeight: 700, fontSize: "1.1rem", color: "#111" }}
        data-oid=".5._:w."
      >
        © {new Date().getFullYear()} angle inc.
      </span>
    </div>
  </footer>
);

export default Footer;
