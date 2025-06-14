import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "nft-marketplace",
    title: "NFT Marketplace",
    description:
      "アーティスト向けNFTマーケットプレイスの開発。ブロックチェーン技術を活用し、アート作品の取引を安全かつ効率的に実現。",
    image: "/works/nft-marketplace.jpg",
    tags: ["Web3", "NFT", "Blockchain"],
    detailedDescription:
      "このプロジェクトは、デジタルアーティストが自分の作品をNFTとして販売できるマーケットプレイスの開発でした。Ethereum ブロックチェーン上でスマートコントラクトを実装し、安全で透明性の高い取引システムを構築しました。",
    technologies: [
      "React",
      "TypeScript",
      "Solidity",
      "Web3.js",
      "IPFS",
      "MetaMask",
      "Hardhat",
      "OpenZeppelin",
    ],
    features: [
      "NFT作品のミント機能",
      "マーケットプレイス機能",
      "ウォレット連携",
      "ロイヤリティ設定",
      "オークション機能",
      "作品検索・フィルタリング",
    ],
    challenges: [
      "ガス料金の最適化",
      "スマートコントラクトのセキュリティ",
      "IPFSでのメタデータ管理",
      "ユーザビリティの向上",
    ],
    results: [
      "月間取引量1000ETH達成",
      "登録アーティスト数500名突破",
      "ガス料金を従来比30%削減",
      "セキュリティ監査をクリア",
    ],
    duration: "6ヶ月",
    teamSize: "5名",
    role: "フルスタック開発者・ブロックチェーン開発",
    gallery: [
      "/works/nft-marketplace-1.jpg",
      "/works/nft-marketplace-2.jpg",
      "/works/nft-marketplace-3.jpg",
    ],
  },
  {
    id: "ai-chatbot",
    title: "AI Chatbot",
    description:
      "自然言語処理を活用したカスタマーサポートチャットボット。24時間365日のサポートを実現し、顧客満足度を向上。",
    image: "/works/ai-chatbot.jpg",
    tags: ["AI", "NLP", "Customer Support"],
    detailedDescription:
      "企業のカスタマーサポート業務を自動化するAIチャットボットシステムの開発。自然言語処理技術を活用し、顧客の問い合わせに対して適切な回答を提供できるシステムを構築しました。",
    technologies: [
      "Python",
      "TensorFlow",
      "BERT",
      "FastAPI",
      "React",
      "PostgreSQL",
      "Redis",
      "Docker",
    ],
    features: [
      "自然言語理解",
      "意図分類",
      "エンティティ抽出",
      "対話管理",
      "学習機能",
      "管理ダッシュボード",
    ],
    challenges: [
      "日本語の自然言語処理精度向上",
      "文脈理解の実装",
      "リアルタイム応答の最適化",
      "継続学習システムの構築",
    ],
    results: [
      "問い合わせ対応時間を80%短縮",
      "顧客満足度スコア4.5/5達成",
      "サポートコストを60%削減",
      "回答精度95%を実現",
    ],
    duration: "4ヶ月",
    teamSize: "4名",
    role: "AI/ML エンジニア・バックエンド開発",
    gallery: [
      "/works/ai-chatbot-1.jpg",
      "/works/ai-chatbot-2.jpg",
      "/works/ai-chatbot-3.jpg",
    ],
  },
  {
    id: "vr-training",
    title: "VR Training",
    description:
      "製造業向けVRトレーニングシステム。安全で効率的な作業訓練を実現し、教育コストを削減。",
    image: "/works/vr-training.jpg",
    tags: ["XR", "VR", "Training"],
    detailedDescription:
      "製造業の現場作業員向けVRトレーニングシステムの開発。危険な作業環境を仮想空間で再現し、安全かつ効率的な訓練を可能にするシステムを構築しました。",
    technologies: [
      "Unity",
      "C#",
      "Oculus SDK",
      "SteamVR",
      "Blender",
      "Node.js",
      "MongoDB",
      "WebRTC",
    ],
    features: [
      "リアルな作業環境の再現",
      "ハンドトラッキング",
      "進捗管理システム",
      "マルチユーザー対応",
      "パフォーマンス評価",
      "シナリオエディター",
    ],
    challenges: [
      "リアルタイム物理演算の最適化",
      "VR酔いの軽減",
      "高精度なハンドトラッキング",
      "大規模環境の描画最適化",
    ],
    results: [
      "訓練時間を50%短縮",
      "事故発生率を70%削減",
      "訓練コストを40%削減",
      "受講者満足度4.8/5達成",
    ],
    duration: "8ヶ月",
    teamSize: "6名",
    role: "VR開発者・3Dエンジニア",
    gallery: [
      "/works/vr-training-1.jpg",
      "/works/vr-training-2.jpg",
      "/works/vr-training-3.jpg",
    ],
  },
  {
    id: "iot-dashboard",
    title: "IoT Dashboard",
    description:
      "工場設備のリアルタイム監視システム。IoTセンサーからのデータを可視化し、予防保全を実現。",
    image: "/works/iot-dashboard.jpg",
    tags: ["IoT", "Dashboard", "Analytics"],
    detailedDescription:
      "製造業の工場設備を監視するIoTダッシュボードシステムの開発。各種センサーからのデータをリアルタイムで収集・分析し、設備の異常を早期発見できるシステムを構築しました。",
    technologies: [
      "React",
      "TypeScript",
      "D3.js",
      "Node.js",
      "InfluxDB",
      "Grafana",
      "MQTT",
      "AWS IoT",
    ],
    features: [
      "リアルタイムデータ可視化",
      "異常検知アラート",
      "予測分析",
      "レポート生成",
      "モバイル対応",
      "カスタムダッシュボード",
    ],
    challenges: [
      "大量データのリアルタイム処理",
      "異常検知アルゴリズムの精度向上",
      "レスポンシブデザインの実装",
      "データセキュリティの確保",
    ],
    results: [
      "設備稼働率を15%向上",
      "予防保全により故障を80%削減",
      "メンテナンスコストを30%削減",
      "データ処理速度を10倍向上",
    ],
    duration: "5ヶ月",
    teamSize: "5名",
    role: "フロントエンド開発者・データエンジニア",
    gallery: [
      "/works/iot-dashboard-1.jpg",
      "/works/iot-dashboard-2.jpg",
      "/works/iot-dashboard-3.jpg",
    ],
  },
  {
    id: "mobile-app",
    title: "Mobile App",
    description:
      "健康管理アプリケーション。日々の活動データを記録・分析し、ユーザーの健康促進をサポート。",
    image: "/works/mobile-app.jpg",
    tags: ["Mobile", "Health", "Analytics"],
    detailedDescription:
      "ユーザーの健康管理をサポートするモバイルアプリケーションの開発。歩数、心拍数、睡眠データなどを統合的に管理し、パーソナライズされた健康アドバイスを提供するシステムを構築しました。",
    technologies: [
      "React Native",
      "TypeScript",
      "Firebase",
      "HealthKit",
      "Google Fit",
      "Chart.js",
      "Redux",
      "Expo",
    ],
    features: [
      "活動データ自動記録",
      "健康スコア算出",
      "目標設定・達成管理",
      "ソーシャル機能",
      "パーソナライズ通知",
      "データエクスポート",
    ],
    challenges: [
      "バッテリー消費の最適化",
      "デバイス間データ同期",
      "プライバシー保護",
      "ユーザーエンゲージメント向上",
    ],
    results: [
      "ダウンロード数10万件突破",
      "日次アクティブユーザー率70%",
      "ユーザー継続率6ヶ月で60%",
      "App Store評価4.7/5達成",
    ],
    duration: "7ヶ月",
    teamSize: "4名",
    role: "モバイルアプリ開発者・UI/UXデザイン",
    gallery: [
      "/works/mobile-app-1.jpg",
      "/works/mobile-app-2.jpg",
      "/works/mobile-app-3.jpg",
    ],
  },
];
