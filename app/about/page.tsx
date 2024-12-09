import Image from "next/image";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="w-screen h-screen overflow-x-hidden overflow-y-auto">
      <Navbar />
      <div className="min-h-screen text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="w-full md:w-2/3 relative aspect-video">
              <Image
                src="/esso_img.png"
                alt="Profile picture"
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                className="rounded-3xl object-cover"
                priority
              />
            </div>
            <div className="w-full md:w-1/3">
              <h1 className="text-3xl font-bold mb-4">About Me</h1>
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm a high school student at Phillips Exeter Academy with a passion for engineering and tinkering. I've done FIRST Robotics for 7 years, and have explored several fields in engineering from electrical engineering to programming! 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
