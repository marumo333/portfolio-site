export interface Skill {
  id: string;
  name: string;
  usage: string[];
  summary: string;
}

export interface ExternalLink {
  id: string;
  label: string;
  url: string;
}

export interface Internship {
  id: string;
  company: string;
  duration: string;
  summary: string;
}

export const skills: Skill[] = [
  { id: 'cpp', name: 'C++', usage: ['趣味'], summary: 'ETロボコンなどの組み込み開発で使用。' },
  { id: 'php', name: 'PHP', usage: ['趣味'], summary: '個人開発等で使用。' },
  { id: 'ci', name: 'CI (GitHub Actions, etc)', usage: ['趣味'], summary: '個人開発等で使用。' },
  { id: 'docker', name: 'Docker', usage: ['趣味'], summary: '個人開発において使用。' },
  { id: 'htmlcss', name: 'HTML/CSS', usage: ['インターン', '趣味'], summary: 'インターンのWebサイト制作や個人開発のWebアプリ/サイト制作で使用。' },
  { id: 'python', name: 'Python', usage: ['学校の授業'], summary: '大学の講義におけるデータ解析等で使用。' },
  { id: 'javascript', name: 'JavaScript', usage: ['趣味'], summary: '個人開発で使用（Vue.js, Node.js, Next.js, Reactなど）。' },
  { id: 'typescript', name: 'TypeScript', usage: ['趣味'], summary: '個人開発において使用。' },
  { id: 'rdbms', name: 'RDBMS (PostgreSQL, MySQL, etc)', usage: ['趣味'], summary: 'Supabaseなどの個人開発で使用。' },
  { id: 'ruby', name: 'Ruby', usage: ['インターン', '趣味'], summary: 'Ruby on Railsを個人開発およびインターンで使用。' },
  { id: 'vcs', name: 'ソースコード管理', usage: ['学校の授業', 'インターン', '趣味'], summary: 'Git等のVCSと連携し、GitHubで個人/チーム開発に使用。' },
  { id: 'cloud', name: 'サーバ構築 (クラウド)', usage: ['趣味'], summary: '個人/チーム開発のクラウド上のサーバ構築にてAWSを使用。' },
  { id: 'r', name: 'R', usage: ['学校の授業'], summary: '大学のデータサイエンス講義にてデータ分析で使用。' },
];

export const links: ExternalLink[] = [
  { id: 'github', label: 'GitHub', url: 'https://github.com/marumo333' },
  { id: 'qiita', label: 'Qiita', url: 'https://qiita.com/marumo333' },
];

export const internships: Internship[] = [
  {
    id: 'jprs',
    company: '株式会社日本レジストリサービス',
    duration: '2週間（1ヶ月以内）',
    summary: 'インターネットの歴史・技術の講義を受講後、Webサイトを制作し発表。',
  },
  {
    id: 'kokusai-systems',
    company: '株式会社国際システムズ',
    duration: '2日間（1週間以内）',
    summary: 'アルゴリズム講義の後、RPAの実習を実施。',
  },
  {
    id: 'genie',
    company: '株式会社ジーニー',
    duration: '1日',
    summary: '企業説明後、カレンダーアプリのフロント/バックエンド機能改善を実施。',
  },
  {
    id: 'kubell',
    company: '株式会社kubell',
    duration: '1ヶ月以内',
    summary: '2週間でモデルユーザーのヒアリングやプロダクト開発を通して、チャットアプリ・PRDの作成を交え、開発の上流工程から実装まで幅広くプロダクト志向やユーザー目線でのプロダクト開発の経験を得られました。',
  },
];


