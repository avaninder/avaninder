import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github, Linkedin } from "lucide-react";

type Experience = {
  company: string;
  role: string;
  location: string;
  start: string;
  end: string;
  logo: string;
  description: string;
};

const experiences: Experience[] = [
  {
    company: "Mach Industries",
    role: "Software Engineering Intern",
    location: "Huntington Beach, CA",
    start: "June 2026",
    end: "August 2026",
    logo: "/machindustries_logo.jpg",
    description:
      "Improved GNSS-denied, vision-based localization with GMSL Cameras.",
  },
  {
    company: "Dartmouth College, LISP Lab",
    role: "Research Intern",
    location: "Hanover, NH",
    start: "June 2025",
    end: "December 2025",
    logo: "/dartmouth_logo.jpg",
    description:
      "Developed per-path importance and graph-trimming methods for Path Complex Networks.",
  },
  {
    company: "RIKEN, Nishina Center",
    role: "Visiting Researcher",
    location: "Tokyo, Japan",
    start: "July 2025",
    end: "August 2025",
    logo: "/riken_logo.jpg",
    description:
      "Ran a 9Be(p,γ)10B beamline experiment and used data analysis to determine reaction rates.",
  },
  {
    company: "VERTEX Robotics (FTC 15534)",
    role: "Team Captain",
    location: "Exeter, NH",
    start: "2022",
    end: "2026",
    logo: "/ftcvertex_logo.jpg",
    description:
      "Led a 4-time World Championship-qualifying team (2023 Worlds finalist).",
  },
];

type Project = {
  title: string;
  description: ReactNode;
  projectUrl: string;
  icon?: string;
  iconWidth?: number;
  iconHeight?: number;
};

const projects: Project[] = [
  {
    title: "Zephyrus VTOL",
    description:
      "A three-rotor Vertical Takeoff-Landing drone, with autonomous flight capability. Supported by Phillips Exeter Academy.",
    projectUrl: "/senior_project",
    icon: "/zephyrus_outline.png",
    iconWidth: 3296,
    iconHeight: 928,
  },
  {
    title: "SRS Robotics",
    description:
      "I cofounded SRS Robotics, and developed the SRSHub, a high-performance sensor-reading board.",
    projectUrl: "https://srsrobotics.com",
    icon: "/srs_outline.png",
    iconWidth: 2493,
    iconHeight: 2078,
  },
  {
    title: "Polaris Flight Computer",
    description:
      "Featuring an ultra-precise barometer and 6-DOF IMU, the Polaris FC is intended for rocketry and UAV applications with an STM32H7 MCU and support for 5 servos or ESCs.",
    projectUrl: "https://github.com/charizardavi/Polaris",
    icon: "/polaris_outline.png",
    iconWidth: 3296,
    iconHeight: 1881,
  },
  {
    title: "GimbalFOC",
    description: (
      <>
        A camera stabilization gimbal using a BLDC motor and custom PCBs, sponsored by{" "}
        <a
          href="https://www.pcbway.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bn-inline-link"
        >
          PCBWay
        </a>
        .
      </>
    ),
    projectUrl: "https://github.com/charizardavi/GimbalFOC",
    icon: "/gimbal_outline.png",
    iconWidth: 2001,
    iconHeight: 2417,
  },
  {
    title: "Vertices Path Generator",
    description:
      "A user interface to design and generate trajectories for the Vertices Path Follower, created by 15534 VERTEX.",
    projectUrl: "https://vertices-path-gen.vercel.app",
    icon: "/vertex_outline.png",
    iconWidth: 2631,
    iconHeight: 2450,
  },
];

const featuredPhotos = [
  { file: "IMG_0216.jpg", alt: "Bangkok skyline at dusk" },
  { file: "IMG_1441.jpg", alt: "Glass office tower against a clear sky" },
  { file: "IMG_1541.jpg", alt: "NTT Docomo Yoyogi tower over the treeline" },
  { file: "IMG_1987.jpg", alt: "City lights at night from above" },
];

export default function Home() {
  return (
    <div className="bn-page min-h-screen">
      <div className="bn-wrap">
        <header className="bn-hero">
          <h1 className="bn-name">
            avaninder<span className="dot">.</span>bhaghayath
          </h1>
          <p className="bn-subtitle">EE &amp; CS @ Yale</p>
          <p className="bn-lede">
            I work on robotics, from embedded systems to computer vision. 
          </p>
        </header>

        <section className="bn-section" aria-labelledby="projects-heading">
          <div className="bn-section-head">
            <h2 id="projects-heading">Projects</h2>
          </div>
          {projects.map((project) => {
            const isExternal = project.projectUrl.startsWith("http");
            return (
              <div className="bn-project" key={project.title}>
                {project.icon ? (
                  <div className="bn-project-icon">
                    <Image
                      src={project.icon}
                      alt=""
                      width={project.iconWidth}
                      height={project.iconHeight}
                      sizes="230px"
                    />
                  </div>
                ) : (
                  <div className="bn-project-icon-spacer" aria-hidden="true" />
                )}
                <div className="bn-project-body">
                  <Link
                    href={project.projectUrl}
                    className="bn-project-title"
                    {...(isExternal && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                  >
                    {project.title}
                    <ArrowUpRight aria-hidden="true" />
                  </Link>
                  <p>{project.description}</p>
                </div>
              </div>
            );
          })}
        </section>

        <section className="bn-section" aria-labelledby="experience-heading">
          <div className="bn-section-head">
            <h2 id="experience-heading">Experience</h2>
          </div>
          {experiences.map((exp) => (
            <div className="bn-exp" key={exp.company}>
              <div className="bn-exp-logo">
                <Image
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  fill
                  sizes="48px"
                />
              </div>
              <div className="bn-exp-body">
                <div className="bn-exp-row">
                  <h3>{exp.company}</h3>
                  <span className="bn-exp-dates">
                    {exp.start} &ndash; {exp.end}
                  </span>
                </div>
                <p className="bn-exp-role">
                  {exp.role} &middot; {exp.location}
                </p>
                <p className="desc">{exp.description}</p>
              </div>
            </div>
          ))}
        </section>

        <section className="bn-section" aria-labelledby="photography-heading">
          <div className="bn-section-head">
            <h2 id="photography-heading">Photography</h2>
          </div>
          <div className="bn-photo-grid">
            {featuredPhotos.map((photo) => (
              <Link href="/photography" key={photo.file}>
                <Image
                  src={`/photography/cities/${photo.file}`}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 720px) 50vw, 25vw"
                  quality={75}
                />
              </Link>
            ))}
          </div>
          <div className="bn-photo-more">
            <Link href="/photography">
              View all photography <ArrowUpRight aria-hidden="true" size={14} />
            </Link>
          </div>
        </section>

        <section className="bn-closing">
          <Image
            src="/headshot.jpg"
            alt="Avaninder Bhaghayath"
            width={304}
            height={384}
          />
          <p>
            Hey! I&apos;m Avaninder, and I&apos;m currently studying EE & CS at Yale. My background is in competitive robotics, and I&apos;m continuing to put those skills to use across industries. If you want to reach out, my contact info is on LinkedIn (below).
          </p>
        </section>

        <footer className="bn-footer">
          <p>&copy; 2026 Avaninder Bhaghayath</p>
          <div className="bn-footer-links">
            <a
              href="https://github.com/avaninder"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={13} style={{ display: "inline", marginRight: 4, verticalAlign: -2 }} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/avaninder"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={13} style={{ display: "inline", marginRight: 4, verticalAlign: -2 }} />
              LinkedIn
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
