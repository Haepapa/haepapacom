import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import CookieAccept from "@/components/CookieAccept";
import HeroSection from "@/components/project/HeroSection";
import getProject from "@/actions/getProject";
import type { Project } from "@/types/appwrite.d";

export default function Project() {
  const { id } = useParams<{ id: string }>();
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
      <HeroSection />
      {project ? (
        <div>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <ContactSection />
      <FooterSection />
      <CookieAccept />
    </>
  );
}
