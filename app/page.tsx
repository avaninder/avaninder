"use client";

import Image from "next/image";
import Navbar from "@/components/navbar";
import { Typewriter } from "@/components/Typewriter";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { ChevronsDown } from "lucide-react";

export default function Home() {
  const [showArrow, setShowArrow] = useState(true);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      console.log("scrolled");
      if (scrollContainerRef.current.scrollTop > 10) {
        setShowArrow(false);
        console.log("false");
      } else {
        setShowArrow(true);
        console.log("true");
      }
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div
      className="w-screen h-screen overflow-x-hidden overflow-y-auto"
      ref={scrollContainerRef}
    >
      <Navbar />
      <div className="h-full w-screen relative">
        <div className="relative flex justify-center items-end h-screen">
          {showArrow && (
            <div className="z-10 animate-bounce mb-[10vh] md:mb-[5vh]">
              <ChevronsDown size={100} />
            </div>
          )}
        </div>

        <div className="absolute top-0 left-0 z-10 p-8 text-white text-4xl font-bold">
          <Typewriter speed={50} text="Hey there, I'm Avaninder" />
        </div>
        <Image
          src="/polaris_img_home_new.png"
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
        <main className="min-h-screen text-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-24">
              <Link href="/projects" className="block group">
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
                    <div className="z-10 p-8 text-white text-4xl font-bold">
                      <Typewriter speed={50} text="Check out my projects" />
                    </div>
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
