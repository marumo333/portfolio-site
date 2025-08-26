## Runners Free - フリーランス向けECプラットフォーム

地方のフリーランス需要を鑑み、フリーランス向けのECプラットフォームです。フリーランサーが自分の商品やサービスを販売し、購入者との取引を行うことができるマーケットプレイスアプリケーションです。

### 特徴
- フリーランス特化: 地方フリーランサーの販売機会創出
- 商品管理: 商品の投稿、編集、削除機能
- カート機能: 商品をカートに追加して一括購入
- 決済機能: Stripe決済による安全な取引
- ユーザー認証: Supabase Authによるセキュアな認証
- レビュー機能: 商品レビューの投稿・閲覧機能 ✨ NEW
- 購入履歴管理: マイページでの購入履歴確認機能 ✨ NEW
- レスポンシブデザイン: PC・スマートフォン対応

### 技術スタック
- フロントエンド: Next.js 14, React 18, TypeScript, TailwindCSS, Mantine UI
- バックエンド・インフラ: Supabase, PostgreSQL, Prisma
- 決済・外部サービス: Stripe, DeepL API
- 開発・デプロイ: Vercel, ESLint, PostCSS

### 構成（抜粋）
```
runners-free/
├── app/
│   ├── api/
│   │   ├── checkout/
│   │   │   ├── create-session/
│   │   │   └── success/
│   │   ├── review/
│   │   └── translate/
│   ├── auth/
│   ├── cart/
│   ├── components/
│   ├── context/
│   ├── dashboard/
│   ├── image/
│   │   └── [id]/review/
│   ├── login/
│   ├── post/
│   ├── register/
│   ├── review/
│   ├── search/
│   ├── checkout/
│   │   └── success/
│   ├── types/
│   └── globals.css
├── libs/
├── prisma/
│   └── schema.prisma
├── public/
├── utils/
├── next.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

### 環境変数（例）
```
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Database (Prisma - Supabase PostgreSQL)
DATABASE_URL=postgresql://postgres:[password]@db.[project-id].supabase.co:5432/postgres

# Stripe
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# DeepL API
DEEPL_API_KEY=your-deepl-api-key

# その他
NEXT_PUBLIC_BASE_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret
```

### セットアップ（抜粋）
```bash
git clone https://github.com/marumo333/runners-free.git
cd runners-free
npm install
cp .env.example .env.local
npx prisma generate
npx prisma db pull
npx prisma db push
npm run dev
```

### 実装ハイライト
- 価格文字列を Stripe 用数値へ正規化
- Supabase JOIN 結果の正規化と型安全なデータマッピング
- Stripe 決済後の購入履歴保存と UI 連携
- Next.js 15 Suspense 対応


