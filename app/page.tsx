import Image from "next/image";
import Navbar from "@/components/navbar";
import { Typewriter } from "@/components/Typewriter";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen h-screen overflow-x-hidden overflow-y-auto">
      <Navbar />
      <div className="h-full w-screen relative">
        <div className="absolute top-0 left-0 z-10 p-8 text-white text-4xl font-bold">
          <Typewriter speed={50} text="Hey there, I'm Avaninder" />
        </div>
        <Image
          src="/srshub_img.png"
          alt="Render of PCB"
          fill
          style={{
            objectFit: "cover",
          }}
          sizes="100vw"
          priority
        ></Image>
      </div>
      <div className="h-[100vh]">
        <div className="z-10 p-8 text-white text-4xl font-bold">
          <Typewriter speed={50} text="Check out my projects" />
        </div>
        <main className="min-h-screen text-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-24">
              <Link
                href="/projects"
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className={`flex flex-col lg:flex-row gap-8 items-center`}>
                  <div className="w-full lg:w-1/2">
                    <Image
                      src="/srshub_img_2.png"
                      alt="projects"
                      width={600}
                      height={400}
                      className="rounded-3xl shadow-lg transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="w-full lg:w-1/2 space-y-4">
                    <p className="text-gray-300 text-lg group-hover:text-white transition-colors duration-300">
                      Take a look at some of the projects I have worked on over
                      the last few years, and my journey in engineering!
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
