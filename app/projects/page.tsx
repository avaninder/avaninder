import Image from "next/image";
import Navbar from "@/components/navbar";
import ProjectShowcase from "@/components/project-showcase";

export default function Projects() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <div className="relative h-[50vh] md:h-[60vh] w-full">
        <Image
          src="/pcb_scatter.jpg"
          alt="PCB Background"
          fill
          className="object-cover"
          sizes="100vw"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 text-center">
            My Projects
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 text-center max-w-2xl">
            Exploring engineering through robotics, electronics, and software
          </p>
        </div>
      </div>

      <main className="min-h-screen text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ProjectShowcase />
        </div>
      </main>
    </div>
  );
}
