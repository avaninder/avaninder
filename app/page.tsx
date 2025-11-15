"use client";

import Image from "next/image";
import Navbar from "@/components/navbar";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Hey there, I&apos;m Avaninder
          </h1>
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
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                  quality={70}
                />
              </div>
              <div className="relative">
                <Image
                  src="/photography/pcbs/IMG_0378.jpg"
                  alt="Photography"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                  quality={70}
                />
              </div>
              <div className="relative">
                <Image
                  src="/photography/other/IMG_0238.jpg"
                  alt="Photography"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                  quality={70}
                />
              </div>
              <div className="relative">
                <Image
                  src="/photography/cities/IMG_1987.jpg"
                  alt="Photography"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                  quality={70}
                />
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-4 sm:p-6 md:p-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">Photography</h2>
              <p className="text-sm sm:text-base text-gray-300 flex items-center gap-2">
                View gallery <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </p>
            </div>
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-4 sm:p-6 md:p-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">SRS Robotics</h2>
              <p className="text-sm sm:text-base text-gray-300 flex items-center gap-2">
                Visit website <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-4 sm:p-6 md:p-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">VERTEX Robotics</h2>
              <p className="text-sm sm:text-base text-gray-300 flex items-center gap-2">
                Watch on YouTube <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </p>
            </div>
          </Link>

        </div>
      </main>
    </div>
  );
}
