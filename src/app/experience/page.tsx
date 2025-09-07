import { experiences, education } from '@/data/profile';

export default function Experience() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* ヘッダー */}
      <section className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              経歴
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              私の学業、活動、趣味についてご紹介します
            </p>
          </div>
        </div>
      </section>

      {/* メインコンテンツ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* 学歴セクション */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">学歴</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={edu.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-lg">
                          {index + 1}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-600 mb-1">学校種別</h3>
                          <p className="text-xl font-bold text-gray-900">{edu.schoolType}</p>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-600 mb-1">学校名</h3>
                          <p className="text-xl font-bold text-blue-600">{edu.schoolName}</p>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-600 mb-1">学部・学科</h3>
                          <p className="text-lg text-gray-900">{edu.department}</p>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-600 mb-1">専攻・プログラム</h3>
                          <p className="text-lg text-gray-900">{edu.program}</p>
                        </div>
                        <div className="md:col-span-2">
                          <h3 className="text-lg font-semibold text-gray-600 mb-1">卒業見込み</h3>
                          <p className="text-xl font-bold text-green-600">{edu.graduationYear}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* その他の経歴セクション */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">その他の経歴</h2>
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div
                key={experience.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-lg">
                          {index + 1}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        {experience.category}
                      </h2>
                      <h3 className="text-xl font-semibold text-blue-600 mb-4">
                        {experience.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-lg">
                        {experience.content}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            もっと詳しく知りたい方は
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            スキルやプロジェクトについてもご覧ください
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/profile"
              className="inline-flex items-center px-8 py-3 bg-white text-blue-600 text-lg font-medium rounded-lg hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              スキルを見る
            </a>
            <a
              href="/"
              className="inline-flex items-center px-8 py-3 bg-transparent text-white text-lg font-medium rounded-lg hover:bg-white/10 transition-all duration-200 border-2 border-white"
            >
              プロジェクトを見る
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
