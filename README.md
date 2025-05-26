This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## メール送信機能の設定（Resend）

このプロジェクトは、**Resend**を使用したお問い合わせフォームのメール送信機能を搭載しています。

### Resendの特徴

- **月3,000通まで無料**
- **高い配信率**と信頼性
- **開発者フレンドリー**なAPI
- **簡単な設定**
- **詳細な分析機能**

### 設定手順

#### 1. Resendアカウントの作成

1. [https://resend.com/signup](https://resend.com/signup) にアクセス
2. メールアドレスとパスワードでアカウント作成
3. または GitHub/Google アカウントでサインアップ

#### 2. API キーの取得

1. Resendダッシュボードにログイン
2. 左メニューの「API Keys」をクリック
3. 「Create API Key」ボタンをクリック
4. 名前を入力（例：`angle-cs-contact-form`）
5. 「Full access」を選択
6. 「Add」をクリック
7. 表示されたAPI キー（`re_` で始まる文字列）をコピー

#### 3. 環境変数の設定

プロジェクトルートに `.env.local` ファイルを作成し、以下を設定：

```bash
# 必須: メールの送信先アドレス
TO_EMAIL=your-email@example.com

# 必須: Resend API キー
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxx

# オプション: 送信者メールアドレス（独自ドメイン使用時）
FROM_EMAIL=contact@yourdomain.com

# オプション: ドメイン名
DOMAIN=yourdomain.com
```

#### 4. ドメイン設定（オプション）

独自ドメインを使用する場合：

1. Resendダッシュボードで「Domains」をクリック
2. 「Add Domain」で独自ドメインを追加
3. DNS設定を行う：
   - **SPF レコード**: `v=spf1 include:_spf.resend.com ~all`
   - **DKIM レコード**: Resendが提供する値を設定
   - **DMARC レコード**: `v=DMARC1; p=none;`

### Cloudflareでの設定

#### 1. 環境変数の設定

Cloudflare Pagesの管理画面で以下を設定：

1. プロジェクトの「Settings」→「Environment variables」
2. 以下の変数を追加：
   - `TO_EMAIL`: あなたのメールアドレス
   - `RESEND_API_KEY`: ResendのAPI キー
   - `FROM_EMAIL`: 送信者アドレス（オプション）
   - `DOMAIN`: ドメイン名（オプション）

#### 2. ビルド設定

- **Build command**: `npm run build`
- **Build output directory**: `.next`
- **Root directory**: `/`

### テスト方法

#### 開発環境でのテスト

1. 開発サーバーを起動: `npm run dev`
2. お問い合わせフォームに入力して送信
3. コンソールにメール内容が出力されることを確認

#### 本番環境でのテスト

1. Cloudflare Pagesにデプロイ
2. 環境変数を設定
3. お問い合わせフォームからテスト送信
4. 指定したメールアドレスにメールが届くことを確認

### トラブルシューティング

#### よくある問題

1. **API キーエラー**
   - API キーが正しく設定されているか確認
   - `re_` で始まる文字列であることを確認

2. **メールが届かない**
   - 迷惑メールフォルダを確認
   - FROM_EMAILのドメインが認証済みか確認

3. **送信エラー**
   - Resendダッシュボードのログを確認
   - 環境変数が正しく設定されているか確認

#### サポート

- [Resend Documentation](https://resend.com/docs)
- [Resend Support](https://resend.com/support)

### 料金について

- **無料プラン**: 月3,000通まで
- **Pro プラン**: $20/月で月50,000通まで
- 一般的なお問い合わせフォームなら無料プランで十分です

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Cloudflare Pages

このプロジェクトはCloudflare Pagesでのデプロイに最適化されています。

1. Cloudflare Pagesにプロジェクトを接続
2. ビルド設定:
   - Build command: `npm run build`
   - Build output directory: `.next`
3. 環境変数を設定
4. デプロイ

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
