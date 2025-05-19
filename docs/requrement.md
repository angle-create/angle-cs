  # scramberry風Webサイト再現仕様書

  ## 概要

  three.jsを用いた3D背景と、スクロール連動で各セクションにズームインするUIを持つWebサイトをReactで再現します。
  参考サイト：[scramberry公式サイト](https://scramberry.io/ja/)

  ---

  ## 要件

  1. **背景**
    - three.jsで3D空間を構築
    - 複数の3Dオブジェクト（カード、天秤、チャットバブル等）が浮遊
    - スクロールに応じてカメラが各オブジェクトにズームインし、該当セクションのテキストが表示される

  2. **UI/レイアウト**
    - 上部にナビゲーションバー（ロゴ、メニュー、言語切替）
    - 画面下部に「WALLETアプリ公開中」ボタン
    - 各セクションで日本語テキストが表示される

  3. **参考サイト**
    - [scramberry公式サイト](https://scramberry.io/ja/)

  ---

  ## 実装方針

  - **フロントエンドフレームワーク**: React
  - **3D描画**: three.js（React用ラッパー`@react-three/fiber`推奨）
  - **スクロール連動**: スクロール量に応じてカメラ位置・角度をアニメーション
  - **UI**: CSSまたはUIフレームワーク（MUI, Chakra UI等）

  ---

  ## ディレクトリ構成例

  ```
  src/
  ├─ components/
  │  ├─ ThreeBackground.jsx   // three.js背景
  │  ├─ Navbar.jsx            // ナビゲーションバー
  │  ├─ SectionText.jsx       // セクションごとのテキスト
  │  └─ WalletButton.jsx      // WALLETアプリボタン
  ├─ App.jsx
  └─ index.js
  ```

  ---

  ## サンプルコード

  ### ThreeBackground.jsx（雰囲気サンプル）

  ```jsx
  import { Canvas, useFrame } from '@react-three/fiber';
  import { useRef } from 'react';

  function FloatingCard({ position }) {
    // ここでカードや天秤などの3Dモデルを配置
    return (
      <mesh position={position}>
        <boxGeometry args={[2, 1, 0.1]} />
        <meshStandardMaterial color="#fff" />
      </mesh>
    );
  }

  export default function ThreeBackground({ scroll }) {
    const cameraRef = useRef();

    useFrame(() => {
      // scroll値に応じてカメラ位置を補間
      if (cameraRef.current) {
        cameraRef.current.position.z = 10 - scroll * 5; // 例
      }
    });

    return (
      <Canvas camera={{ position: [0, 0, 10], ref: cameraRef }}>
        <ambientLight />
        <FloatingCard position={[0, 0, 0]} />
        {/* 他の3Dオブジェクトも配置 */}
      </Canvas>
    );
  }
  ```

  ### スクロール連動例

  ```jsx
  import { useState, useEffect } from 'react';
  import ThreeBackground from './components/ThreeBackground';

  function App() {
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
      const onScroll = () => {
        setScroll(window.scrollY / window.innerHeight);
      };
      window.addEventListener('scroll', onScroll);
      return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
      <>
        <Navbar />
        <ThreeBackground scroll={scroll} />
        <SectionText scroll={scroll} />
        <WalletButton />
      </>
    );
  }
  ```

  ---