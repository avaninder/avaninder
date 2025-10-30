"use client";

import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";

export default function Photography() {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <Navbar />
      <div className="flex-1 text-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-3 h-full">
          
          <Link href="/photography/cityscapes" className="relative group overflow-hidden">
            <div className="absolute inset-0 z-10 flex items-center justify-center">
              <h2 className="text-5xl md:text-6xl font-bold text-white z-20 transition-transform duration-300 group-hover:scale-110">
                CITYSCAPES
              </h2>
            </div>
            <div className="absolute inset-0 bg-black/40 z-10 transition-opacity duration-300 group-hover:opacity-20"></div>
            <Image
              src="/photography/cities/IMG_0216.jpg"
              alt="Cityscapes"
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              sizes="(max-width: 1024px) 100vw, 33vw"
              priority
              quality={75}
            />
          </Link>

          <Link href="/photography/pcbs" className="relative group overflow-hidden">
            <div className="absolute inset-0 z-10 flex items-center justify-center">
              <h2 className="text-5xl md:text-6xl font-bold text-white z-20 transition-transform duration-300 group-hover:scale-110">
                PCBs
              </h2>
            </div>
            <div className="absolute inset-0 bg-black/40 z-10 transition-opacity duration-300 group-hover:opacity-20"></div>
            <Image
              src="/photography/pcbs/IMG_0378.jpg"
              alt="PCBs"
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              sizes="(max-width: 1024px) 100vw, 33vw"
              priority
              quality={75}
            />
          </Link>

          <Link href="/photography/other" className="relative group overflow-hidden">
            <div className="absolute inset-0 z-10 flex items-center justify-center">
              <h2 className="text-5xl md:text-6xl font-bold text-white z-20 transition-transform duration-300 group-hover:scale-110">
                OTHER
              </h2>
            </div>
            <div className="absolute inset-0 bg-black/40 z-10 transition-opacity duration-300 group-hover:opacity-20"></div>
            <Image
              src="/photography/other/IMG_0238.jpg"
              alt="Other"
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              sizes="(max-width: 1024px) 100vw, 33vw"
              priority
              quality={75}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

