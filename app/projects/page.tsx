import Image from "next/image";
import Navbar from "@/components/navbar";
import ProjectShowcase from "@/components/project-showcase";

export default function Home() {
  return (
    <div className="w-screen h-screen overflow-x-hidden overflow-y-auto">
      <Navbar />
      <div className="h-[55vh] w-screen relative">
        <Image
          src="/all_pcb_render.png"
          alt="Render of PCB"
          fill
          style={{
            objectFit: "cover",
          }}
          sizes="100vw"
          priority
        ></Image>
      </div>
      <main className="min-h-screen text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">My Projects</h1>
        <ProjectShowcase />
      </div>
    </main>
    </div>
  );
}
