import { portfolioData } from '@/data/portfolioData';
import PortfolioCard from '@/components/PortfolioCard';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* ヘッダー */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-start justify-between">
            <div className="text-left w-full">
              <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">
                ポートフォリオ
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto text-center">
                自作アプリや開発物をまとめたポートフォリオサイトです。<br />
                各作品の詳細はGitHubのREADMEから自動取得しています。
              </p>
              {/* モバイルでも表示するプロフィールボタン */}
              <div className="mt-4 flex justify-center sm:hidden">
                <a
                  href="/profile"
                  className="inline-flex items-center px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-md hover:bg-gray-800 transition-colors duration-200"
                >
              My skills
                </a>
              </div>
            </div>
            <div className="hidden sm:block">
              <a
                href="/profile"
                className="inline-flex items-center px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-md hover:bg-gray-800 transition-colors duration-200"
              >
            My Skills
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            プロジェクト一覧
          </h2>
          <p className="text-gray-600">
            {portfolioData.length}件のプロジェクト
          </p>
        </div>

        {/* ポートフォリオグリッド */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            <p>&copy; 2024 ポートフォリオサイト. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
