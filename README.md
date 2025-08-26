## ポートフォリオサイト（Next.js / TypeScript / Tailwind CSS）

このリポジトリは、複数の個人プロジェクトを一覧・詳細表示するポートフォリオサイトです。各プロジェクトの詳細は、GitHub の README を取得して表示します。

### 技術スタック（本サイト）
- Next.js 15（App Router）
- TypeScript
- Tailwind CSS v4
- react-markdown, remark-gfm

### セットアップ
```bash
npm install
npm run dev
# http://localhost:3000
```

### スクリプト
```bash
npm run dev
npm run build
npm run start
npm run lint
```

### 主な画面
- `/` トップ（一覧）
- `/project/[id]` プロジェクト詳細（GitHub README を表示）
- `/profile` プロフィール

### データ定義
- `src/data/portfolioData.ts` にプロジェクト情報（タイトル、説明、GitHub、外部リンク、タグ、注目フラグ）を定義

---

## 掲載プロジェクト（概要）
- Fast-Map: ルート検索アプリ（Google Maps / Next.js）
- Seller: 商品管理・翻訳・決済対応（Next.js / Supabase / Prisma / Stripe）
- Customer: 商品閲覧・購入（Next.js / Supabase / Stripe）
- Runners Free: フリーランス向けEC（レビュー・購入履歴・Stripe・Supabase）

各プロジェクトの詳細READMEは、サイト内の「詳細を見る」または各GitHubリポジトリをご確認ください。

Runners Free の詳細ドキュメントは `docs/runners-free.md` に分離しました。

---

## ライセンス / お問い合わせ
- 本ポートフォリオは MIT ライセンス
- ご質問・ご提案は Issues へお願いします
