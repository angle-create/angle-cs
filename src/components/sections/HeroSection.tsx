"use client";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[100vh] flex flex-col items-center justify-center bg-[#fafaf7] overflow-hidden">
      {/* SVG鹿 */}

      {/* テキスト・UI */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center w-full px-4 mt-8">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 drop-shadow-lg">
          Angle <span className="text-green-600">×</span> Technology
        </h1>
      </div>
    </section>
  );
}
