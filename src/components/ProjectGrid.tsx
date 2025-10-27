import { useState, useMemo } from "react";

interface Project {
  slug: string;
  title: string;
  description: string;
  status: string;
  tags: string[];
  image?: string;
  image_dark?: string;
  draft?: boolean;
}

interface ProjectGridProps {
  projects: Project[];
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  const [selectedTag, setSelectedTag] = useState<string>("all");

  // Get all unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    projects.forEach((project) => {
      project.tags.forEach((tag) => tags.add(tag));
    });
    return ["all", ...Array.from(tags).sort()];
  }, [projects]);

  // Filter projects by tag
  const filteredProjects = useMemo(() => {
    if (selectedTag === "all") {
      return projects.filter((p) => !p.draft);
    }
    return projects.filter((p) => !p.draft && p.tags.includes(selectedTag));
  }, [projects, selectedTag]);

  return (
    <div>
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2 mb-8">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-4 py-2 rounded-full text-sm transition-all ${
              selectedTag === tag
                ? "bg-light-main dark:bg-dark-main text-light-button-text dark:text-dark-button-text"
                : "border border-light-grey dark:border-dark-outline hover:border-light-outline dark:hover:border-dark-main"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <a
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group block bg-light-surface dark:bg-dark-surface border border-light-grey dark:border-dark-outline rounded-lg overflow-hidden hover:border-light-grey dark:hover:border-dark-main transition-all hover:shadow-lg"
          >
            {project.image && (
              <div className="aspect-video overflow-hidden flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-contain h-full w-full group-hover:scale-105 transition-transform duration-300 block dark:hidden"
                  style={{ maxHeight: "120px" }}
                />
                <img
                  src={project.image_dark}
                  alt={project.title}
                  className="object-contain h-full w-full group-hover:scale-105 transition-transform duration-300 hidden dark:block"
                  style={{ maxHeight: "120px" }}
                />
              </div>
            )}
            <div className="p-6">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-bold dark:group-hover:text-dark-main transition-colors">
                  {project.title}
                </h3>
                <span className="px-2 py-1 text-xs bg-light-main dark:bg-dark-main text-light-button-text dark:text-dark-button-text rounded">
                  {project.status}
                </span>
              </div>
              <p className="text-sm text-light-grey dark:text-dark-grey mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs border border-light-outline dark:border-dark-outline rounded"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 3 && (
                  <span className="px-2 py-1 text-xs text-light-grey dark:text-dark-grey">
                    +{project.tags.length - 3} more
                  </span>
                )}
              </div>
            </div>
          </a>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12 text-light-grey dark:text-dark-grey">
          No projects found with the selected filter.
        </div>
      )}
    </div>
  );
}
