import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import CookieAccept from "@/components/CookieAccept";
import HeroSection from "@/components/project/HeroSection";
import getProject from "@/actions/getProject";
import type { Project } from "@/types/appwrite.d";
import IdeaSection from "@/components/project/IdeaSection";
import InspirationSection from "@/components/project/InspirationSection";
import FeaturesSection from "@/components/project/FeaturesSection";
import DevelopmentContentSection from "@/components/project/DevelopmentContentSection";

export default function Project() {
  const location = useLocation();
  const { id } = location.state || {}; // Get ID from state
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    const fetchProject = async () => {
      if (id) {
        const projectData = await getProject(id);
        setProject(projectData[0]);
      }
    };
    fetchProject();
  }, [id]);

  return (
    <>
      <Navbar />
      {project ? (
        <>
          <HeroSection
            title={project ? project.title : "Loading..."}
            description={project ? project.description : ""}
            status={project ? project.status.status : ""}
            statusDescription={project ? project.status.description : ""}
            updatedAt={project ? project.$updatedAt : ""}
            projectStatusHist={project ? project.projectStatusHist : []}
            tags={project ? project.tags : []}
          />
          <IdeaSection idea={project ? project.idea : ""} />
          <InspirationSection
            inspiration={project ? project.inspiration : ""}
            name={project ? project.name : ""}
          />
          <FeaturesSection features={project ? project.features : []} />
          <DevelopmentContentSection />
        </>
      ) : (
        <p>Loading...</p>
      )}
      <ContactSection />
      <FooterSection />
      <CookieAccept />
    </>
  );
}
