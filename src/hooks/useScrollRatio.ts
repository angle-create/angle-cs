import { useEffect, useState } from "react";

export const useScrollRatio = () => {
  const [scrollRatio, setScrollRatio] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const ratio = currentScroll / scrollHeight;
      setScrollRatio(ratio);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 初期値の設定

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollRatio;
};
