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
      data-oid="ydgsmhm"
    >
      <div className="container mx-auto px-4" data-oid="zdgthwi">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto bg-white rounded-2xl p-8 shadow border border-gray-100"
          data-oid="5.mcszu"
        >
          <h2
            className="text-4xl md:text-5xl font-bold text-black mb-8 text-center"
            style={{ fontFamily: "Montserrat, sans-serif" }}
            data-oid="yptg2lb"
          >
            Contact
          </h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
            data-oid="p1ioyr."
          >
            <div data-oid="vc7:.j:">
              <input
                type="text"
                placeholder="お名前"
                {...register("name")}
                className="w-full px-4 py-3 rounded bg-white text-black border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#14E3B2]"
                style={{ fontFamily: "Montserrat, sans-serif" }}
                data-oid="nciwh8z"
              />

              {errors.name && (
                <p
                  className="text-[#14E3B2] text-sm mt-1"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                  data-oid="p-.km4:"
                >
                  {errors.name.message}
                </p>
              )}
            </div>
            <div data-oid=".aqusk7">
              <input
                type="email"
                placeholder="メールアドレス"
                {...register("email")}
                className="w-full px-4 py-3 rounded bg-white text-black border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#14E3B2]"
                style={{ fontFamily: "Montserrat, sans-serif" }}
                data-oid="y7fx4lm"
              />

              {errors.email && (
                <p
                  className="text-[#14E3B2] text-sm mt-1"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                  data-oid="uk7h271"
                >
                  {errors.email.message}
                </p>
              )}
            </div>
            <div data-oid="rvyy_a-">
              <textarea
                placeholder="メッセージ"
                rows={5}
                {...register("message")}
                className="w-full px-4 py-3 rounded bg-white text-black border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#14E3B2]"
                style={{ fontFamily: "Montserrat, sans-serif" }}
                data-oid="tm:o79x"
              />

              {errors.message && (
                <p
                  className="text-[#14E3B2] text-sm mt-1"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                  data-oid="k2fcmr:"
                >
                  {errors.message.message}
                </p>
              )}
            </div>
            <div className="text-center" data-oid="_:8u-ft">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#14E3B2] text-[#0A0A0A] px-8 py-3 rounded-full font-bold text-lg hover:bg-[#14E3B2]/90 transition-colors disabled:opacity-60"
                style={{ fontFamily: "Montserrat, sans-serif" }}
                data-oid="r7gd-go"
              >
                {isSubmitting ? "送信中..." : "送信する"}
              </button>
              {isSubmitSuccessful && (
                <p
                  className="text-[#14E3B2] text-sm mt-4"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                  data-oid="403h3qb"
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
