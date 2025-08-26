export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  githubUrl: string;
  externalUrl?: string;
  thumbnail?: string;
  tags: string[];
  featured: boolean;
}

export const portfolioData: PortfolioItem[] = [
  {
    id: "fast-map",
    title: "Fast-Map",
    description: "Google Maps Platformを活用した高速なルート検索アプリケーション。地図表示、最適なルート検索、現在地の自動取得、リアルタイム通知機能を備えた個人開発プロジェクト。",
    githubUrl: "https://github.com/marumo333/fast-map",
    externalUrl: "https://fast-map-five.vercel.app/",
    tags: ["React", "TypeScript", "Next.js", "Google Maps API", "Tailwind CSS", "shadcn/ui"],
    featured: true
  },
  {
    id: "seller",
    title: "Seller - 商品管理システム",
    description: "雑貨屋など多様な商品を取り扱う店舗向けのWebアプリケーション。商品管理、QRコード生成、DeepL APIによる翻訳、購入機能を備えたフルスタック開発プロジェクト。",
    githubUrl: "https://github.com/marumo333/seller",
    externalUrl: "https://seller-weld.vercel.app/",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "Prisma", "Stripe", "DeepL API"],
    featured: true
  },
  {
    id: "customer",
    title: "Customer - 商品閲覧・購入システム",
    description: "QRコードを通じて顧客がスマートフォンから直接商品詳細を確認し、オンラインで閲覧・購入できるシンプルなUI設計のWebアプリケーション。",
    githubUrl: "https://github.com/marumo333/customer",
    externalUrl: "https://customer-gamma-one.vercel.app/",
    tags: ["Next.js", "React", "TypeScript", "Supabase", "Stripe", "DeepL API"],
    featured: false
  },
  {
    id: "choiben-assist",
    title: "ちょい勉アシスト",
    description: "勉強の習慣化に悩むユーザー向けの学習管理ツール。AIによる勉強計画提案と直感的な記録システムで、継続的な学習をサポートするハッカソンプロジェクト。",
    githubUrl: "https://github.com/develoop-official/ChoibenAssist-Front",
    externalUrl: "https://choiben-assist-front.vercel.app/",
    tags: ["Next.js", "React", "TypeScript", "Panda CSS", "FastAPI", "Python", "Supabase", "Gemini API"],
    featured: false
  }
];
