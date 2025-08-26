import { notFound } from 'next/navigation';
import { portfolioData } from '@/data/portfolioData';
import { getReadmeContent, extractRepoInfo } from '@/utils/github';
import ProjectDetail from '@/components/ProjectDetail';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = portfolioData.find(item => item.id === slug);
  
  if (!project) {
    notFound();
  }

  let readmeContent = '';
  let error = null;

  try {
    readmeContent = await getReadmeContent(project.githubUrl);
  } catch (err) {
    error = err instanceof Error ? err.message : 'READMEの取得に失敗しました';
  }

  return (
    <ProjectDetail 
      project={project} 
      readmeContent={readmeContent} 
      error={error}
    />
  );
}
