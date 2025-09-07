import { portfolioData } from '@/data/portfolioData';
import PortfolioCard from '@/components/PortfolioCard';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* ヒーローセクション */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                ポートフォリオ
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              自作アプリや開発物をまとめたポートフォリオサイトです。<br />
              各作品の詳細はGitHubのREADMEから自動取得しています。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/profile"
                className="inline-flex items-center px-8 py-3 bg-blue-600 text-white text-lg font-medium rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                スキルを見る
              </Link>
              <Link
                href="/experience"
                className="inline-flex items-center px-8 py-3 bg-white text-gray-700 text-lg font-medium rounded-lg hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl border border-gray-200"
              >
                経歴を見る
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* プロジェクトセクション */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              プロジェクト一覧
            </h2>
            <p className="text-xl text-gray-600">
              {portfolioData.length}件のプロジェクト
            </p>
          </div>

          {/* ポートフォリオグリッド */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.map((item) => (
              <PortfolioCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            お気軽にお問い合わせください
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            プロジェクトのご相談やご質問がございましたら、お気軽にお声がけください。
          </p>
          <Link
            href="/profile"
            className="inline-flex items-center px-8 py-3 bg-white text-blue-600 text-lg font-medium rounded-lg hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            プロフィールを見る
          </Link>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <p className="text-gray-400">&copy; 2025 ポートフォリオサイト. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
