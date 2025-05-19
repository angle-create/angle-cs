"use client";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema = z.object({
  name: z.string().min(1, "お名前は必須です"),
  email: z.string().email("有効なメールアドレスを入力してください"),
  message: z.string().min(1, "メッセージは必須です"),
});

type FormData = z.infer<typeof schema>;

export const ContactSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    // ここでAPI送信などを実装
    await new Promise((r) => setTimeout(r, 1000));
    reset();
  };

  return (
    <section
      id="contact"
      className="relative h-screen flex items-center justify-center bg-white"
      data-oid="ud42rte"
    >
      <div className="container mx-auto px-4" data-oid="yh6w8rv">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto bg-white rounded-2xl p-8 shadow border border-gray-100"
          data-oid="8a.wwh-"
        >
          <h2
            className="text-4xl md:text-5xl font-bold text-black mb-8 text-center"
            style={{ fontFamily: "Montserrat, sans-serif" }}
            data-oid="vg_spc_"
          >
            Contact
          </h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
            data-oid="r.oyuli"
          >
            <div data-oid="ucb:9x4">
              <input
                type="text"
                placeholder="お名前"
                {...register("name")}
                className="w-full px-4 py-3 rounded bg-white text-black border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#14E3B2]"
                style={{ fontFamily: "Montserrat, sans-serif" }}
                data-oid="s33cipx"
              />

              {errors.name && (
                <p
                  className="text-[#14E3B2] text-sm mt-1"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                  data-oid="bytt-sb"
                >
                  {errors.name.message}
                </p>
              )}
            </div>
            <div data-oid="dek667r">
              <input
                type="email"
                placeholder="メールアドレス"
                {...register("email")}
                className="w-full px-4 py-3 rounded bg-white text-black border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#14E3B2]"
                style={{ fontFamily: "Montserrat, sans-serif" }}
                data-oid="cv31zi1"
              />

              {errors.email && (
                <p
                  className="text-[#14E3B2] text-sm mt-1"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                  data-oid="-oqqzj."
                >
                  {errors.email.message}
                </p>
              )}
            </div>
            <div data-oid="g_fu6ip">
              <textarea
                placeholder="メッセージ"
                rows={5}
                {...register("message")}
                className="w-full px-4 py-3 rounded bg-white text-black border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#14E3B2]"
                style={{ fontFamily: "Montserrat, sans-serif" }}
                data-oid="hx3l8ey"
              />

              {errors.message && (
                <p
                  className="text-[#14E3B2] text-sm mt-1"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                  data-oid="iot.vkg"
                >
                  {errors.message.message}
                </p>
              )}
            </div>
            <div className="text-center" data-oid="yrv:am7">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#14E3B2] text-[#0A0A0A] px-8 py-3 rounded-full font-bold text-lg hover:bg-[#14E3B2]/90 transition-colors disabled:opacity-60"
                style={{ fontFamily: "Montserrat, sans-serif" }}
                data-oid="xmtxsyh"
              >
                {isSubmitting ? "送信中..." : "送信する"}
              </button>
              {isSubmitSuccessful && (
                <p
                  className="text-[#14E3B2] text-sm mt-4"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                  data-oid="c6hqi2g"
                >
                  送信が完了しました！
                </p>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
