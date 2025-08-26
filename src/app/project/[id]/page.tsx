import { notFound } from 'next/navigation';
import { portfolioData } from '@/data/portfolioData';
import ProjectDetail from '@/components/ProjectDetail';
import { getReadmeContent } from '@/utils/github';

interface PageProps {
  params: Promise<{ id: string }> | { id: string };
}

export default async function ProjectPage({ params }: PageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const project = portfolioData.find((p) => p.id === resolved.id);

  if (!project) {
    notFound();
  }

  let readmeContent = '';
  let error: string | null = null;

  try {
    readmeContent = await getReadmeContent(project.githubUrl);
  } catch (e: unknown) {
    if (e instanceof Error) {
      error = e.message;
    } else {
      error = '不明なエラーが発生しました';
    }
  }

  return (
    <ProjectDetail project={project} readmeContent={readmeContent} error={error} />
  );
}

export async function generateStaticParams() {
  return portfolioData.map((p) => ({ id: p.id }));
}

