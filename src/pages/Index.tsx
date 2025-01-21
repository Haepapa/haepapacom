import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Index() {
  const contactUsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // contact scroll
  const scrollToContactUs = () => {
    if (contactUsRef.current) {
      contactUsRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
      console.log("contactUsRef is null");
    }
  };

  // project scroll
  const scrollToProjects = () => {
    console.log("scrollToProjects called");
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
      console.log("projectsRef is null");
    }
  };

  useEffect(() => {
    if (location.hash === "#contact") {
      setTimeout(scrollToContactUs, 100);
    } else if (location.hash === "#projects") {
      setTimeout(scrollToProjects, 100);
    }
  }, [location]);

  return (
    <>
      <Navbar
        scrollToContactUs={scrollToContactUs}
        scrollToProjects={scrollToProjects}
      />
      <HeroSection scrollToProjects={scrollToProjects} />
      <AboutSection />
      <div ref={projectsRef}>
        <ProjectsSection />
      </div>
      <div ref={contactUsRef}>
        <ContactSection />
      </div>
      <FooterSection />
    </>
  );
}
