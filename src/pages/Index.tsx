import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import CookieAccept from "@/components/CookieAccept";

export default function Index() {
  const contactUsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // contact scroll
  const scrollToContactUs = () => {
    if (contactUsRef.current) {
      contactUsRef.current.scrollIntoView({ behavior: "smooth" });
      pulseElement(
        contactUsRef.current.querySelector("h1, h2, h3, h4, h5, h6")
      );
    } else {
      console.log("contactUsRef is null");
    }
  };

  // project scroll
  const scrollToProjects = () => {
    console.log("scrollToProjects called");
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
      pulseElement(projectsRef.current.querySelector("h1, h2, h3, h4, h5, h6"));
    } else {
      console.log("projectsRef is null");
    }
  };

  // hero scroll
  const scrollToHero = () => {
    console.log("scrollToHero called");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const pulseElement = (
    element: Element | null,
    delay: number = 200,
    repetitions: number = 2
  ) => {
    if (element) {
      let count = 0;
      const pulse = () => {
        if (count < repetitions) {
          element.classList.add("pulse");
          element.addEventListener(
            "animationend",
            () => {
              element.classList.remove("pulse");
              count++;
              setTimeout(pulse, delay);
            },
            { once: true }
          );
        }
      };
      pulse();
    }
  };

  useEffect(() => {
    if (location.hash === "#contact") {
      setTimeout(scrollToContactUs, 100);
    } else if (location.hash === "#projects") {
      setTimeout(scrollToProjects, 100);
    } else if (location.pathname === "/") {
      setTimeout(scrollToHero, 100);
    }
  }, [location]);

  return (
    <>
      <Navbar
        scrollToContactUs={scrollToContactUs}
        scrollToProjects={scrollToProjects}
        scrollToHero={scrollToHero}
      />
      <div ref={heroRef}>
        <HeroSection scrollToProjects={scrollToProjects} />
      </div>
      <AboutSection />
      <div ref={projectsRef}>
        <ProjectsSection />
      </div>
      <div ref={contactUsRef}>
        <ContactSection />
      </div>
      <FooterSection />
      <CookieAccept />
    </>
  );
}
