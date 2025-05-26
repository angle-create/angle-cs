import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

interface EmailRequest {
  name: string;
  email: string;
  message: string;
}

// Resend APIを使用したメール送信
async function sendEmailViaResend(emailData: {
  to: string;
  subject: string;
  html: string;
  text: string;
  from: string;
  replyTo: string;
}) {
  const RESEND_API_KEY = process.env.RESEND_API_KEY;

  if (!RESEND_API_KEY) {
    throw new Error("RESEND_API_KEYが設定されていません");
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: emailData.from,
      to: [emailData.to],
      subject: emailData.subject,
      html: emailData.html,
      text: emailData.text,
      reply_to: emailData.replyTo,
    }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(
      `Resend API Error: ${response.status} - ${
        errorData.message || "Unknown error"
      }`
    );
  }

  return response.json();
}

export async function POST(request: NextRequest) {
  try {
    const body: EmailRequest = await request.json();
    const { name, email, message } = body;

    // バリデーション
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "すべてのフィールドが必要です" },
        { status: 400 }
      );
    }

    // メールアドレスの簡単なバリデーション
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "有効なメールアドレスを入力してください" },
        { status: 400 }
      );
    }

    // 環境変数からメール設定を取得
    const TO_EMAIL = process.env.TO_EMAIL;
    const FROM_EMAIL =
      process.env.FROM_EMAIL || `contact@${process.env.DOMAIN || "resend.dev"}`;

    if (!TO_EMAIL) {
      console.error("TO_EMAIL環境変数が設定されていません");
      return NextResponse.json(
        { error: "メール設定が正しくありません" },
        { status: 500 }
      );
    }

    // メール内容を構造化
    const emailData = {
      to: TO_EMAIL,
      from: FROM_EMAIL,
      replyTo: email, // 送信者のメールアドレスを返信先に設定
      subject: `【お問い合わせ】${name}様からのメッセージ`,
      html: `
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f8f9fa;">
          <div style="background: linear-gradient(135deg, #14E3B2 0%, #0EA5E9 100%); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px; font-weight: 600;">
              お問い合わせフォーム
            </h1>
          </div>
          
          <div style="padding: 30px; background-color: white; margin: 0;">
            <div style="background-color: #f1f5f9; padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #14E3B2;">
              <h2 style="margin: 0 0 15px 0; color: #1e293b; font-size: 18px;">送信者情報</h2>
              <p style="margin: 5px 0; color: #475569;"><strong>お名前:</strong> ${name}</p>
              <p style="margin: 5px 0; color: #475569;"><strong>メールアドレス:</strong> <a href="mailto:${email}" style="color: #14E3B2; text-decoration: none;">${email}</a></p>
            </div>
            
            <div style="background-color: white; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
              <h2 style="margin: 0 0 15px 0; color: #1e293b; font-size: 18px;">メッセージ内容</h2>
              <div style="background-color: #f8fafc; padding: 15px; border-radius: 6px; border-left: 3px solid #14E3B2;">
                <p style="white-space: pre-wrap; line-height: 1.6; margin: 0; color: #334155;">${message}</p>
              </div>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; text-align: center;">
              <p style="color: #64748b; font-size: 14px; margin: 5px 0;">
                送信日時: ${new Date().toLocaleString("ja-JP", {
                  timeZone: "Asia/Tokyo",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
              <p style="color: #64748b; font-size: 12px; margin: 5px 0;">
                このメールはお問い合わせフォームから自動送信されました
              </p>
              <div style="margin-top: 15px; padding: 10px; background-color: #ecfdf5; border-radius: 6px; border: 1px solid #bbf7d0;">
                <p style="color: #166534; font-size: 12px; margin: 0;">
                  💡 返信する場合は、このメールに直接返信してください
                </p>
              </div>
            </div>
          </div>
          
          <div style="background-color: #f1f5f9; padding: 20px; text-align: center; border-top: 1px solid #e2e8f0;">
            <p style="color: #64748b; font-size: 12px; margin: 0;">
              Powered by <a href="https://resend.com" style="color: #14E3B2; text-decoration: none;">Resend</a>
            </p>
          </div>
        </div>
      `,
      text: `
【お問い合わせフォーム】

送信者情報:
お名前: ${name}
メールアドレス: ${email}

メッセージ内容:
${message}

---
送信日時: ${new Date().toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" })}
このメールはお問い合わせフォームから自動送信されました。
返信する場合は、送信者のメールアドレス（${email}）に直接返信してください。

Powered by Resend
      `.trim(),
    };

    // 開発環境では、コンソールにログを出力
    if (process.env.NODE_ENV === "development") {
      console.log("=== Resend メール送信内容 ===");
      console.log("To:", emailData.to);
      console.log("From:", emailData.from);
      console.log("Reply-To:", emailData.replyTo);
      console.log("Subject:", emailData.subject);
      console.log("Text:", emailData.text);
      console.log("=====================");

      return NextResponse.json(
        {
          message: "メールが正常に送信されました（開発環境）",
          service: "Resend",
          preview: {
            to: emailData.to,
            from: emailData.from,
            subject: emailData.subject,
          },
        },
        { status: 200 }
      );
    }

    // Resendを使用してメール送信
    try {
      const result = await sendEmailViaResend(emailData);

      return NextResponse.json(
        {
          message: "メールが正常に送信されました",
          service: "Resend",
          emailId: result.id,
          details: result,
        },
        { status: 200 }
      );
    } catch (emailError) {
      console.error("Resend送信エラー:", emailError);
      return NextResponse.json(
        {
          error: "メール送信に失敗しました",
          service: "Resend",
          details:
            emailError instanceof Error ? emailError.message : "Unknown error",
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("API エラー:", error);
    return NextResponse.json(
      { error: "サーバーエラーが発生しました" },
      { status: 500 }
    );
  }
}
