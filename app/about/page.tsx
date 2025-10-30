import Image from "next/image";
import Navbar from "@/components/navbar";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="min-h-screen text-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          <div className="relative h-[60vh] md:h-[70vh] rounded-3xl overflow-hidden mb-12">
            <Image
              src="/riken_pic.jpg"
              alt="Profile picture"
              fill
              sizes="100vw"
              className="object-cover"
              priority
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 md:p-16">
              <h1 className="text-6xl md:text-8xl font-bold text-white mb-4">
                About Me
              </h1>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Hi, I&apos;m Avaninder
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  I&apos;m a high school student at Phillips Exeter Academy with a
                  passion for engineering and tinkering. I&apos;ve done FIRST
                  Robotics for 7 years, and have explored several fields in
                  engineering from electrical engineering to programming!
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-black font-bold px-8 py-4 rounded-full hover:bg-gray-200 transition-all mt-6 group"
              >
                Get In Touch
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-64 rounded-2xl overflow-hidden">
                <Image
                  src="/polaris_img_home_new.png"
                  alt="Project 1"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  quality={80}
                />
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden">
                <Image
                  src="/photography/pcbs/IMG_0378.jpg"
                  alt="Photography"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  quality={80}
                />
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden col-span-2">
                <Image
                  src="/photography/cities/IMG_1987.jpg"
                  alt="Cityscape"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={80}
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

