"use client";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";

const schema = z.object({
  name: z.string().min(1, "お名前は必須です"),
  email: z.string().email("有効なメールアドレスを入力してください"),
  message: z.string().min(1, "メッセージは必須です"),
});

type FormData = z.infer<typeof schema>;

export const ContactSection = () => {
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      setSubmitStatus("idle");
      setErrorMessage("");

      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "メール送信に失敗しました");
      }

      setSubmitStatus("success");
      reset();

      // 3秒後にメッセージを非表示にする
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 3000);
    } catch (error) {
      console.error("送信エラー:", error);
      setSubmitStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "メール送信に失敗しました"
      );

      // 5秒後にエラーメッセージを非表示にする
      setTimeout(() => {
        setSubmitStatus("idle");
        setErrorMessage("");
      }, 5000);
    }
  };

  return (
    <section
      id="contact"
      className="relative h-screen flex items-center justify-center bg-white"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto bg-white rounded-2xl p-8 shadow border border-gray-100"
        >
          <h2
            className="text-4xl md:text-5xl font-bold text-black mb-8 text-center"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Contact
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="お名前"
                {...register("name")}
                className="w-full px-4 py-3 rounded bg-white text-black border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#14E3B2]"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              />

              {errors.name && (
                <p
                  className="text-[#14E3B2] text-sm mt-1"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {errors.name.message}
                </p>
              )}
            </div>
            <div>
              <input
                type="email"
                placeholder="メールアドレス"
                {...register("email")}
                className="w-full px-4 py-3 rounded bg-white text-black border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#14E3B2]"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              />

              {errors.email && (
                <p
                  className="text-[#14E3B2] text-sm mt-1"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <textarea
                placeholder="メッセージ"
                rows={5}
                {...register("message")}
                className="w-full px-4 py-3 rounded bg-white text-black border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#14E3B2]"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              />

              {errors.message && (
                <p
                  className="text-[#14E3B2] text-sm mt-1"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {errors.message.message}
                </p>
              )}
            </div>
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#14E3B2] text-[#0A0A0A] px-8 py-3 rounded-full font-bold text-lg hover:bg-[#14E3B2]/90 transition-colors disabled:opacity-60"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                {isSubmitting ? "送信中..." : "送信する"}
              </button>

              {submitStatus === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-[#14E3B2] text-sm mt-4"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  メールが正常に送信されました！
                </motion.p>
              )}

              {submitStatus === "error" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-sm mt-4"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {errorMessage}
                </motion.p>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
