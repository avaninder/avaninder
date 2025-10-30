"use client";

import Navbar from "@/components/navbar";
import { X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const images = [
  "IMG_0238.jpg",
  "IMG_0262.jpg",
  "IMG_0265.jpg",
  "IMG_0276.jpg",
  "IMG_0301.jpg",
  "IMG_0332.jpg",
  "IMG_1188.jpg",
  "IMG_1198.jpg",
  "IMG_1392.jpg",
  "IMG_1400.jpg",
  "IMG_1536.jpg",
  "IMG_1682.jpg",
  "IMG_1734.jpg",
];

export default function Other() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="w-screen h-screen overflow-x-hidden overflow-y-auto">
      <Navbar />
      <div className="min-h-screen text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Other</h1>
          
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {images.map((image, index) => (
              <div
                key={index}
                className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-lg"
                onClick={() => setSelectedImage(`/photography/other/${image}`)}
              >
                <Image
                  src={`/photography/other/${image}`}
                  alt={`Photo ${index + 1}`}
                  width={800}
                  height={600}
                  className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                  loading={index < 6 ? "eager" : "lazy"}
                  quality={75}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCWAAf/2Q=="
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <Image
              src={selectedImage}
              alt="Selected photo"
              width={1920}
              height={1080}
              className="max-w-full max-h-full w-auto h-auto object-contain"
              quality={85}
              priority
            />
            <button
              className="absolute top-4 right-4 text-white text-4xl font-bold hover:text-gray-300"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

