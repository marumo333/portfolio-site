import Link from 'next/link';
import { skills, links, internships } from '@/data/profile';
import SkillCard from '@/components/SkillCard';
import InternshipItem from '@/components/InternshipItem';

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-900">プロフィール</h1>
            <Link href="/" className="text-blue-600 hover:text-blue-800">トップへ戻る</Link>
          </div>
        </div>
      </header>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        {/* Links */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">関連リンク</h2>
          <div className="flex flex-wrap gap-3">
            {links.map((l) => (
              <a key={l.id} href={l.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                {l.label}
              </a>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">プログラミングスキル</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((s) => (
              <SkillCard key={s.id} skill={s} />
            ))}
          </div>
        </div>

        {/* Internships */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">インターン・開発アルバイト経験</h2>
          <div className="space-y-4">
            {internships.map((i) => (
              <InternshipItem key={i.id} item={i} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}



