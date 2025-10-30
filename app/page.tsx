"use client";

import Image from "next/image";
import Navbar from "@/components/navbar";
import Link from "next/link";
import { ArrowUpRight, Camera } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4">
            Hey there, I&apos;m Avaninder
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-400">
            Engineer • Designer • Photographer
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          <Link 
            href="/projects"
            className="relative group overflow-hidden rounded-3xl bg-gray-900 h-[300px] sm:h-[400px] md:h-[600px]"
          >
            <Image
              src="/polaris_img_home_new.png"
              alt="Featured project"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
              quality={85}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-4 sm:p-6 md:p-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">Featured Projects</h2>
              <p className="text-sm sm:text-base text-gray-300 flex items-center gap-2">
                View my work <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </p>
            </div>
          </Link>

          <Link 
            href="/photography"
            className="relative group overflow-hidden rounded-3xl bg-gray-900 h-[300px] sm:h-[400px] md:h-[600px]"
          >
            <div className="absolute inset-0 grid grid-cols-2 gap-1 p-1">
              <div className="relative">
                <Image
                  src="/photography/cities/IMG_0216.jpg"
                  alt="Photography"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 33vw"
                  quality={70}
                />
              </div>
              <div className="relative">
                <Image
                  src="/photography/pcbs/IMG_0378.jpg"
                  alt="Photography"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 33vw"
                  quality={70}
                />
              </div>
              <div className="relative">
                <Image
                  src="/photography/other/IMG_0238.jpg"
                  alt="Photography"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 33vw"
                  quality={70}
                />
              </div>
              <div className="relative">
                <Image
                  src="/photography/cities/IMG_1987.jpg"
                  alt="Photography"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 33vw"
                  quality={70}
                />
              </div>
            </div>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-300" />
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Camera className="w-12 h-12 text-white mb-2" />
              <p className="text-white text-xl font-bold">Photography</p>
            </div>
          </Link>

          <Link
            href="/about"
            className="relative overflow-hidden rounded-3xl md:col-span-2 bg-gradient-to-br from-blue-600 to-purple-600 p-6 sm:p-8 group hover:from-blue-700 hover:to-purple-700 transition-all h-auto min-h-[200px] sm:h-[250px]"
          >
            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">About Me</h3>
              <p className="text-white/90 text-sm sm:text-base mb-3 sm:mb-4">
                High school student at Phillips Exeter Academy with a passion for engineering, robotics, and photography.
              </p>
              <p className="text-white flex items-center gap-2 text-sm sm:text-base">
                Learn more <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </p>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          </Link>

          <Link
            href="https://srsrobotics.com"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group overflow-hidden rounded-3xl bg-gray-900 h-[250px] sm:h-[300px]"
          >
            <Image
              src="/srs_website_preview.png"
              alt="SRS Robotics"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={75}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1">SRS Robotics</h3>
              <p className="text-gray-300 text-xs sm:text-sm flex items-center gap-1">
                Visit website <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </p>
            </div>
          </Link>

          <Link
            href="https://www.youtube.com/@ftcvertex"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group overflow-hidden rounded-3xl bg-gray-900 h-[250px] sm:h-[300px] md:h-[350px]"
          >
            <Image
              src="/vertex_thumbnail.png"
              alt="VERTEX Robotics"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={75}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 p-4 sm:p-6 md:p-8">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">VERTEX Robotics</h3>
              <p className="text-sm sm:text-base text-gray-300 flex items-center gap-2">
                Watch on YouTube <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </p>
            </div>
          </Link>

          <Link
            href="/contact"
            className="relative group overflow-hidden rounded-3xl md:col-span-2 bg-white text-black p-6 sm:p-8 hover:bg-gray-100 transition-colors h-auto min-h-[150px] sm:h-[200px]"
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">Get in touch</h3>
            <p className="text-gray-600 text-base sm:text-lg flex items-center gap-2">
              Send me a message! <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </p>
          </Link>

        </div>
      </main>
    </div>
  );
}
