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

export interface Experience {
  id: string;
  category: string;
  title: string;
  content: string;
}

export interface Education {
  id: string;
  schoolType: string;
  schoolName: string;
  department: string;
  program: string;
  graduationYear: string;
}

export interface Hobby {
  id: string;
  title: string;
  description: string;
  icon: string;
  details: string[];
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
  { id: 'go', name: 'Go', usage: ['インターン'], summary: 'バックエンド開発のインターンで使用。' },
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
    summary: '2週間でモデルユーザーのヒアリングやプロダクト開発を通して、チャットアプリ・PRDの作成を交え、開発の上流工程から実装まで幅広くプロダクト志向やユーザー目線でのプロダクト開発の経験を得られました。また、スクラムマスターとしてチームを率いる経験を得られました',
  },
  {
    id: 'kddi-agile',
    company: 'KDDIアジャイル開発センター株式会社',
    duration: '1週間以内',
    summary: '5日間でモデルユーザーに対してのプロダクト開発を1週間で行うチーム開発を経験。チームリーダーとして、チーム開発を牽引。',
  },
  {
    id: 'relic',
    company: '株式会社Relic',
    duration: '1日',
    summary: '1日でアイデアソンから発表まで行いました。',
  },
  {
    id: 'buysell-technologies',
    company: '株式会社BuySell Technologies',
    duration: '1日',
    summary: 'バックエンドをGo、フロントエンドをTypeScriptを用いてチーム開発を経験。',
  },
  {
    id: 'rizap-technologies',
    company: 'RIZAP テクノロジーズ株式会社',
    duration: '1週間以内',
    summary: 'Ruby on Railsを用いてAPI設計から実装までを三日間で担当。API設計やMVCアーキテクチャ設計などの設計書を作成し、チームリーダーとしてAPI実装を行った。',
  }
];

export const education: Education[] = [
  {
    id: 'university',
    schoolType: '大学',
    schoolName: '琉球大学',
    department: '人文社会学部国際法政学科',
    program: '法学プログラム',
    graduationYear: '2027年卒業見込み'
  }
];

export const experiences: Experience[] = [
  {
    id: 'clubs',
    category: '所属している部活・サークル',
    title: '琉球大学柔道部・ロボコンサークル・Dveloop',
    content: '琉球大学柔道部では礼節と精神力を学び、ロボコンサークルではETロボコンなどの競技に参加し技術力を向上させています。Dveloopではチーム開発を通じて実践的なプログラミングスキルを身につけ、最新の技術動向を学んでいます。'
  },
  {
    id: 'hobbies',
    category: '趣味',
    title: '読書・ギター・音楽を聴くこと・ネトフリ・ドライブ',
    content: 'プライベートは私生活アウトドアとインドア半々で過ごしてます。'
  }
];

export const hobbies: Hobby[] = [
  {
    id: 'programming',
    title: '読書',
    description: 'プログラミング学習のための技術書や歴史や情勢が好きなため、歴史書や経済誌を見てます。',
    icon: '📚',
    details: [
      'Webアプリケーション開発（React, Next.js, Vue.js）に関する書籍',
      '歴史や情勢に関する書籍'
    ]
  },
  {
    id: 'guitar',
    title: 'ギター',
    description: 'ギターを弾きながら、音楽を聴くことが好きです',
    icon: '🎸',
    details: [
      'アコースティックギターを弾いてます'
    ]
  },
  {
    id: 'watch-video',
    title: 'ネトフリ',
    description: '色々な作品を日々見てます。',
    icon: '🎥',
    details: [
      '好きなジャンル：',
      'ホラーサスペンス系',
      'アクションサスペンス系',
      'ファンタジー系',
      'ドラマ系',
      'ミステリー系',
    ]
  },{
    id: 'drive',
    title: 'ドライブ',
    description: '車を運転しながら、景色を眺めることが好きです。',
    icon: '🚗',
    details: [
      '車で色々な景色の綺麗な場所を見ながら、ドライブをすることが好きです。'
    ]
  }
];


