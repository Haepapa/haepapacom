import React from "react";

interface TechnologyGridProps {
  technologies: string[];
}

// Map technology names to image paths, alt text, and website URL
const techImageMap: Record<
  string,
  { light: string; dark: string; alt: string; url: string }
> = {
  Go: {
    light: "/images/tech/golang_icon.png",
    dark: "/images/tech/golang_icon_dark.png",
    alt: "Go logo",
    url: "https://go.dev/",
  },
  "Appwrite SDK for Go": {
    light: "/images/tech/appwrite_icon.png",
    dark: "/images/tech/appwrite_icon_dark.png",
    alt: "Appwrite SDK for Go logo",
    url: "https://appwrite.io/",
  },
  GitHub: {
    light: "/images/tech/github_icon.png",
    dark: "/images/tech/github_icon_dark.png",
    alt: "GitHub logo",
    url: "https://github.com/",
  },
  // Add more technologies here as needed
};

const TechnologyGrid: React.FC<TechnologyGridProps> = ({ technologies }) => (
  <div className="flex flex-wrap" style={{ gap: "1.5rem" }}>
    {technologies.map((tech) => {
      const img = techImageMap[tech];
      if (!img) return null;
      return (
        <div className="flex flex-col items-center" key={tech}>
          <a
            href={img.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex flex-col items-center"
          >
            <div className="light:block dark:hidden">
              <img
                src={img.light}
                alt={img.alt}
                className="h-16 object-contain mx-auto"
                loading="lazy"
              />
            </div>
            <div className="hidden dark:block">
              <img
                src={img.dark}
                alt={img.alt + " dark"}
                className="h-16 object-contain mx-auto"
                loading="lazy"
              />
            </div>
            <span className="text-sm font-normal text-center no-underline transition-colors cursor-pointer hover:text-light-main dark:hover:text-dark-main">
              {tech}
            </span>
          </a>
        </div>
      );
    })}
  </div>
);

export default TechnologyGrid;
