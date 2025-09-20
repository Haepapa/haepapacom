import { Helmet } from 'react-helmet-async';
import { Project } from '@/types/appwrite.d';

interface ProjectSEOProps {
  project: Project;
  baseUrl?: string;
}

export default function ProjectSEO({ project, baseUrl = 'https://your-domain.com' }: ProjectSEOProps) {
  const projectUrl = `${baseUrl}/project/${project.$id}`;
  const title = `${project.title} | Haepapa Projects`;
  const description = project.description || `Explore ${project.title} - an innovative project by Haepapa showcasing modern web development techniques.`;
  const keywords = project.tags?.map(tag => tag.tag).join(', ') || 'web development, project, portfolio';
  const lastModified = new Date(project.$updatedAt).toISOString();
  
  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={projectUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="article" />
      <meta property="og:url" content={projectUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${baseUrl}/src/assets/haepapa_logo.svg`} />
      <meta property="og:site_name" content="Haepapa Projects" />
      <meta property="article:author" content="Haepapa" />
      <meta property="article:published_time" content={project.$updatedAt} />
      <meta property="article:modified_time" content={lastModified} />
      <meta property="article:tag" content={keywords} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={projectUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${baseUrl}/src/assets/haepapa_logo.svg`} />
      <meta name="twitter:creator" content="@haepapa" />
      
      {/* Additional SEO tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      
      {/* Structured Data for Project */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          name: project.title,
          description: project.description,
          url: projectUrl,
          author: {
            '@type': 'Person',
            name: 'Haepapa',
            url: baseUrl
          },
          dateCreated: project.$updatedAt,
          dateModified: lastModified,
          keywords: keywords,
          about: project.tags?.map(tag => ({
            '@type': 'Thing',
            name: tag.tag
          })) || [],
          programmingLanguage: project.technologies?.map(tech => ({
            '@type': 'ComputerLanguage',
            name: tech.name,
            url: tech.link
          })) || []
        })}
      </script>
    </Helmet>
  );
}