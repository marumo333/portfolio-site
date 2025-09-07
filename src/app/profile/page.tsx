import { skills, links, internships } from '@/data/profile';
import SkillCard from '@/components/SkillCard';
import InternshipItem from '@/components/InternshipItem';

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* ヘッダー */}
      <section className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              スキル一覧
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              私が習得しているプログラミングスキルとインターン経験をご紹介します
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Links */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">関連リンク</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {links.map((l) => (
              <a 
                key={l.id} 
                href={l.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            プログラミングスキル
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((s) => (
              <SkillCard key={s.id} skill={s} />
            ))}
          </div>
        </div>

        {/* Internships */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            インターン・開発アルバイト経験
          </h2>
          <div className="space-y-6">
            {internships.map((i) => (
              <InternshipItem key={i.id} item={i} />
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
            経歴や趣味についてもご覧ください
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/experience"
              className="inline-flex items-center px-8 py-3 bg-white text-blue-600 text-lg font-medium rounded-lg hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              経歴を見る
            </a>
            <a
              href="/hobbies"
              className="inline-flex items-center px-8 py-3 bg-transparent text-white text-lg font-medium rounded-lg hover:bg-white/10 transition-all duration-200 border-2 border-white"
            >
              趣味を見る
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}



