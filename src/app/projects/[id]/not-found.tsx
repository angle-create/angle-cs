import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/sections/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen flex items-center justify-center bg-white">
        <div className="text-center px-4">
          <h1
            className="text-6xl font-bold text-black mb-4"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            404
          </h1>
          <h2
            className="text-2xl font-bold text-black mb-4"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            プロジェクトが見つかりません
          </h2>
          <p
            className="text-black/80 mb-8 max-w-md mx-auto"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            お探しのプロジェクトは存在しないか、削除された可能性があります。
          </p>
          <Link
            href="/#works"
            className="inline-block bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-600/90 transition-colors"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Works一覧に戻る
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
