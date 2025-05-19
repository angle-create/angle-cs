# 株式会社 angle コーポレートサイト設計ドキュメント

## 1. 目的・コンセプト
- **タグライン**: Technology × Design で課題を解決する *angle*
- WebGL 空間に angle を象徴する 3D モチーフ（コンパス、矢印、レイヤー、ライトレイ等）が浮遊
- スクロール連動で各セクションへズームイン  
  - Mission / Vision  
  - Service 領域 (Web3, AI, XR…)  
  - Project 事例  
  - Culture & Member  
  - Recruit  
  - Contact
- シングルページでストーリーを体験させる構成

---

## 2. IA（情報設計）／セクション構成
| 番号 | セクション | 概要 | 3D モチーフ例 |
|------|-----------|------|---------------|
| 1 | Hero | Catch Copy・CTA | コンパス |
| 2 | About Us | Mission / Vision / 数字で見る angle | 矢印 |
| 3 | Services | 領域別サービス紹介 | レイヤー |
| 4 | Works | プロジェクト事例 | モニター |
| 5 | Culture | Value・制度・メンバー | ハート / 人型 |
| 6 | Recruit | 募集職種・Wantedly リンク | ドア |
| 7 | Contact | フォーム or 外部リンク | 封筒 |
| 8 | Footer | ロゴ・SNS・Copyright | ― |

---

## 3. 技術スタック
- **フレームワーク**: Next.js 13 (App Router)
- **3D**: three.js + @react-three/fiber + @react-three/drei
- **アニメーション**: react-spring または framer-motion
- **スタイリング**: Tailwind CSS + daisyUI
- **フォーム**: React Hook Form + Zod
- **デプロイ**: Vercel（SSR / ISR）
- **CI/CD**: GitHub Actions（lint, test, deploy）

---

## 4. コンポーネント設計（抜粋）
```text
src/
├─ docs/
│  ├─ design_doc.md
│  └─ requrement.md
├─ components/
│  ├─ layout/
│  │  ├─ Navbar.tsx
│  │  └─ Footer.tsx
│  ├─ three/
│  │  ├─ SceneCanvas.tsx
│  │  ├─ CameraRig.tsx
│  │  ├─ motifs/
│  │  │  ├─ Compass.tsx
│  │  │  ├─ Arrow.tsx
│  │  │  └─ Monitor.tsx
│  │  └─ Lights.tsx
│  ├─ sections/
│  │  ├─ HeroSection.tsx
│  │  ├─ AboutSection.tsx
│  │  ├─ ServicesSection.tsx
│  │  ├─ WorksSection.tsx
│  │  ├─ CultureSection.tsx
│  │  ├─ RecruitSection.tsx
│  │  └─ ContactSection.tsx
│  └─ ui/
├─ hooks/ useScrollRatio.ts
├─ pages/ もしくは app/
└─ public/ (画像・GLB モデル)
```

---

## 5. 3D・スクロール実装イメージ
1. **Canvas** は 1 枚のみ。`CameraRig` 内で `useScrollRatio()` を使い  
   `lerp()` で `position` / `target` を補間しカメラを制御
2. 3D モチーフは Z 軸上に等間隔で配置（例: z = 0, -20, -40 …）
3. 各 HTML セクションの高さを **100 vh** に設定し、スクロール量と Z 座標を 1:1 対応
4. テキスト要素は HTML レイヤー（Portals）で配置し、3D ズームイン時にフェードイン

---

## 6. UI／ビジュアルガイド
| カテゴリ | 値 |
|----------|----|
| Primary | `#2257FF` (angle Blue) |
| Accent  | `#14E3B2` (Neon Green) |
| Dark    | `#0A0A0A` |
| Light   | `#F9FAFB` |
| フォント | Inter + Noto Sans JP |
| モーション | 200–500 ms, `easeOutQuart` |
| トーン | シンプル & フラット、余白広め |

---

## 7. 開発ロードマップ（概算）
| ステップ | 作業 | 工数 |
|----------|------|------|
| 0 | リポジトリセットアップ (Next.js, Tailwind, ESLint, Prettier) | 0.5日 |
| 1 | 3D Canvas & CameraRig PoC | 1日 |
| 2 | ヒーローセクション実装 | 1日 |
| 3 | About / Services / Works 実装 | 2–3日 |
| 4 | Culture / Recruit / Contact 実装 | 1.5日 |
| 5 | レスポンシブ・アクセシビリティ調整 | 1日 |
| 6 | SEO / OG タグ設定・最終 QA | 0.5日 |
| **合計** | ― | **約 1 週間** *(デザイン・3D モデル並行)* |

---
