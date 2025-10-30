import Navbar from "@/components/navbar";
import ZephyrusShowcase from "@/components/zephyrus";
import Image from "next/image";

export default function SeniorProject() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <div className="relative h-[70vh] md:h-[80vh] w-full">
        <Image
          src="/zephyrus_preview.png"
          alt="Zephyrus Drone"
          fill
          className="object-cover"
          sizes="100vw"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
          <div className="inline-block px-4 py-2 bg-blue-600/80 backdrop-blur-sm text-white text-sm font-semibold rounded-full mb-6">
            Fall 2025 Senior Project
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-6 text-center">
            Zephyrus
          </h1>
          <p className="text-xl md:text-3xl text-gray-200 text-center max-w-4xl mb-8">
            Autonomous Solar-Powered VTOL Drone
          </p>
          <p className="text-lg md:text-xl text-gray-300 text-center max-w-3xl">
            A three-rotor Vertical Takeoff and Landing drone with autonomous flight capability and solar panels for extended flight time
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          Build Progress
        </h2>
        <ZephyrusShowcase />
      </div>
    </div>
  );
}
