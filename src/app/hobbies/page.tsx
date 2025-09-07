import { hobbies } from '@/data/profile';

export default function Hobbies() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
      {/* ヘッダー */}
      <section className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              趣味
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              私の趣味や興味のある分野についてご紹介します
            </p>
          </div>
        </div>
      </section>

      {/* メインコンテンツ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hobbies.map((hobby) => (
            <div
              key={hobby.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="p-8">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {hobby.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {hobby.title}
                  </h2>
                  <p className="text-gray-600 text-lg">
                    {hobby.description}
                  </p>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    具体的な活動内容：
                  </h3>
                  <ul className="space-y-2">
                    {hobby.details.map((detail, index) => (
                      <li
                        key={index}
                        className="flex items-start space-x-3 text-gray-700"
                      >
                        <span className="text-blue-500 mt-1">•</span>
                        <span className="text-sm leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 統計セクション */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              趣味の統計
            </h2>
            <p className="text-xl text-purple-100">
              私の趣味活動の実績をご紹介します
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">
                {hobbies.length}
              </div>
              <div className="text-purple-100 text-lg">
                趣味の分野
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">
                30+
              </div>
              <div className="text-purple-100 text-lg">
                制作したプロジェクト
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">
                2年+
              </div>
              <div className="text-purple-100 text-lg">
                プログラミング経験
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            一緒に何かを作りませんか？
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            同じ趣味を持つ方や、新しいプロジェクトに興味のある方とお話しできたら嬉しいです
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/profile"
              className="inline-flex items-center px-8 py-3 bg-purple-600 text-white text-lg font-medium rounded-lg hover:bg-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              プロフィールを見る
            </a>
            <a
              href="/"
              className="inline-flex items-center px-8 py-3 bg-transparent text-purple-600 text-lg font-medium rounded-lg hover:bg-purple-50 transition-all duration-200 border-2 border-purple-600"
            >
              プロジェクトを見る
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
