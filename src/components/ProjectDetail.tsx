'use client';

import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { PortfolioItem } from '@/data/portfolioData';

interface ProjectDetailProps {
  project: PortfolioItem;
  readmeContent: string;
  error: string | null;
}

export default function ProjectDetail({ project, readmeContent, error }: ProjectDetailProps) {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* ヘッダー */}
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <Link
                href="/"
                className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
              >
                ← ポートフォリオ一覧に戻る
              </Link>
              <h1 className="text-3xl font-bold text-gray-900 mt-2">
                {project.title}
              </h1>
            </div>
            <div className="flex gap-2">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-md hover:bg-gray-800 transition-colors duration-200"
              >
                GitHub
              </a>
              {project.externalUrl && (
                <a
                  href={project.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors duration-200"
                >
                  外部リンク
                </a>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* プロジェクト情報 */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            プロジェクト概要
          </h2>
          <p className="text-gray-600 mb-4">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* README表示 */}
        <div className="bg-white rounded-lg shadow-sm p-6 text-gray-900">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            README
          </h2>
          
          {error ? (
            <div className="bg-red-50 border border-red-200 rounded-md p-4">
              <div className="flex">
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-red-800">
                    READMEの取得に失敗しました
                  </h3>
                  <div className="mt-2 text-sm text-red-700">
                    <p className="mb-2">{error}</p>
                    <div className="space-y-2">
                      <p>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-red-600 hover:text-red-500 underline"
                        >
                          GitHubで直接確認する
                        </a>
                      </p>
                      <p>
                        <a
                          href={`${project.githubUrl}/blob/main/README.md`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-red-600 hover:text-red-500 underline"
                        >
                          README.mdファイルを直接見る
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : readmeContent ? (
            <div className="prose max-w-none prose-headings:text-gray-900 prose-p:text-gray-800 prose-strong:text-gray-900 prose-a:text-blue-600 hover:prose-a:text-blue-700 prose-code:text-gray-800">
              <ReactMarkdown 
                remarkPlugins={[remarkGfm]}
                components={{
                  code({ inline, className, children, ...props }: { inline?: boolean; className?: string; children?: React.ReactNode } & React.HTMLAttributes<HTMLElement>) {
                    const isInline = inline;
                    return (
                      <code
                        className={`${className ?? ''} ${
                          isInline
                            ? 'bg-gray-100 text-gray-800 px-1 py-0.5 rounded text-sm' 
                            : 'block bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto'
                        }`}
                        {...props}
                      >
                        {children as React.ReactNode}
                      </code>
                    );
                  },
                  a({ href, children, ...props }) {
                    return (
                      <a
                        href={href}
                        className="text-blue-600 hover:text-blue-800 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                        {...props}
                      >
                        {children}
                      </a>
                    );
                  }
                }}
              >
                {readmeContent}
              </ReactMarkdown>
            </div>
          ) : (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
