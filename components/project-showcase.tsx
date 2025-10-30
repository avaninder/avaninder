import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

type Project = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  hasLink: boolean;
  category: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Zephyrus Autonomous Solar VTOL",
    description:
      "My fall term Senior Project at Phillips Exeter Academy: a three-rotor Vertical Takeoff-Landing drone, with autonomous flight capability and solar panels for extended flight time.",
    imageUrl: "/zephyrus_preview.png",
    projectUrl: "/senior_project",
    hasLink: true,
    category: "Robotics",
    featured: true,
  },
  {
    id: 7,
    title: "SRS Robotics",
    description:
      "I cofounded SRS Robotics, a company that brings high-performance and intuitive components to educational robotics. We currently sell the SRS Hub and SRS Tracker, featuring advanced sensor integration and odometry capabilities.",
    imageUrl: "/srs_tracker_and_hub.png",
    projectUrl: "https://srsrobotics.com",
    hasLink: true,
    category: "Hardware",
    featured: true,
  },
  {
    id: 5,
    title: "Polaris Flight Computer",
    description:
      "Featuring an ultra-precise barometer and 6-DOF IMU, the Polaris FC is intended for rocketry and UAV applications with an STM32H7 MCU and support for 5 servos or ESCs.",
    imageUrl: "/polaris_top_down.png",
    projectUrl: "https://github.com/charizardavi/Polaris",
    hasLink: true,
    category: "Hardware",
  },
  {
    id: 6,
    title: "GimbalFOC",
    description:
      "A camera stabilization gimbal using a brushless DC motor field-oriented control algorithm for butter-smooth videography, with custom PCBs integrating the encoder and MCU.",
    imageUrl: "/gimbal.png",
    projectUrl: "https://github.com/charizardavi/GimbalFOC",
    hasLink: true,
    category: "Hardware",
  },
  {
    id: 2,
    title: "Autonomous Drone",
    description:
      "Originally built for image classification, I repurposed this drone for acrobatic FPV flight!",
    imageUrl: "/drone.png",
    projectUrl: "https://www.youtube.com/watch?v=J4hC-VmN53E",
    hasLink: true,
    category: "Robotics",
  },
  {
    id: 3,
    title: "Vertices Path Generator",
    description:
      "A user interface to design and generate trajectories for the Vertices Path Follower, created by 15534 VERTEX.",
    imageUrl: "/vertices_path_gen.png",
    projectUrl: "https://vertices-path-gen.vercel.app",
    hasLink: true,
    category: "Software",
  },
  {
    id: 4,
    title: "MacuScan",
    description:
      "A mobile app utilizing a Convolutional Neural Network for analyzing age-related macular degeneration (AMD). This low-cost solution only requires a lens and 3D-printed adapter for a smartphone.",
    imageUrl: "/macuscan.png",
    projectUrl: "https://github.com/charizardavi/MacuScan",
    hasLink: true,
    category: "AI/ML",
  },
  {
    id: 8,
    title: "MyAIDermatologist",
    description:
      "A mobile app that uses a convolutional neural network to detect various skin diseases, increasing accessibility for those without the ability to visit a dermatologist.",
    imageUrl: "/myaidermatologist.png",
    projectUrl: "https://github.com/charizardavi/myaidermatologist",
    hasLink: true,
    category: "AI/ML",
  },
];

export default function ProjectShowcase() {
  const featuredProjects = projects.filter((p) => p.featured);
  const regularProjects = projects.filter((p) => !p.featured);

  return (
    <div className="space-y-16">
      {featuredProjects.length > 0 && (
        <div className="space-y-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8">Featured Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {featuredProjects.map((project) => (
              <Link
                href={project.projectUrl}
                key={project.id}
                {...(project.hasLink && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
                className="group relative overflow-hidden rounded-3xl bg-gray-900 border border-gray-800 hover:border-blue-500 transition-all duration-300"
              >
                <div className="relative h-64 md:h-80">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={85}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
                  <div className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full mb-2 sm:mb-3">
                    {project.category}
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm md:text-base line-clamp-2">
                    {project.description}
                  </p>
                  <div className="mt-3 sm:mt-4 flex items-center gap-2 text-blue-400 text-sm font-semibold">
                    View Project
                    <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="space-y-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8">All Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {regularProjects.map((project) => (
            <Link
              href={project.projectUrl}
              key={project.id}
              {...(project.hasLink && {
                target: "_blank",
                rel: "noopener noreferrer",
              })}
              className="group relative overflow-hidden rounded-2xl bg-gray-900 border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-110">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    quality={75}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                </div>
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 bg-blue-600/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm line-clamp-3 mb-4">
                  {project.description}
                </p>
                <div className="flex items-center gap-2 text-blue-400 text-xs sm:text-sm font-semibold">
                  {project.projectUrl.includes("github") ? (
                    <>
                      <Github className="w-4 h-4" />
                      View on GitHub
                    </>
                  ) : (
                    <>
                      View Project
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
