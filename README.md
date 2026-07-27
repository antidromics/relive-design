# RE-LIVE / 地域住環境情報設計

`relive-design.com` 全体を管理するAstroプロジェクトです。

## URL構成

- `/` 地域住環境情報設計
- `/about/` プロフィール・活動
- `/atlas/` 都市住環境図鑑
- `/blog/` 個人ブログ
- `/research/` 調査方法・論文
- `/theme/` RE-LIVE Design System

## 動作環境

- Node.js 22.12以上
- npm

## ローカル起動

```bash
npm install
npm run dev
```

ブラウザで `http://localhost:4321/` を開きます。

## 本番ビルド

```bash
npm run build
npm run preview
```

生成先は `dist/` です。

## Git初期設定

```bash
git init
git add .
git commit -m "Initial Astro project"
git branch -M main
git remote add origin https://github.com/<YOUR_ACCOUNT>/<YOUR_REPOSITORY>.git
git push -u origin main
```

## Cloudflare Pages設定

- Production branch: `main`
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: 未指定（リポジトリ直下）
- Node.js: 22系

この初期版は静的サイトとして構成しているため、Cloudflareアダプターや
`wrangler.jsonc` は不要です。SSR、D1、Pages Functionsなどを導入するときに追加します。

## コンテンツ管理

Astro 6のContent Collectionsを使用します。

- 都市: `src/content/atlas/`
- ブログ: `src/content/blog/`
- 研究: `src/content/research/`

スキーマは `src/content.config.ts` で定義しています。
