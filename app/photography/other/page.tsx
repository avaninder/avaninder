"use client";

import Navbar from "@/components/navbar";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
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
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const handlePrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null && selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null && selectedImageIndex < images.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="min-h-screen text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Other</h1>
          
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {images.map((image, index) => (
              <div
                key={index}
                className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-lg"
                onClick={() => setSelectedImageIndex(index)}
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

      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImageIndex(null)}
        >
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <Image
              src={`/photography/other/${images[selectedImageIndex]}`}
              alt="Selected photo"
              width={1920}
              height={1080}
              className="max-w-full max-h-full w-auto h-auto object-contain"
              quality={85}
              priority
            />
            {selectedImageIndex > 0 && (
              <div className="hidden">
                <Image
                  src={`/photography/other/${images[selectedImageIndex - 1]}`}
                  alt="Preload previous"
                  width={1920}
                  height={1080}
                  quality={85}
                  priority
                />
              </div>
            )}
            {selectedImageIndex < images.length - 1 && (
              <div className="hidden">
                <Image
                  src={`/photography/other/${images[selectedImageIndex + 1]}`}
                  alt="Preload next"
                  width={1920}
                  height={1080}
                  quality={85}
                  priority
                />
              </div>
            )}
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              onClick={() => setSelectedImageIndex(null)}
            >
              <X size={32} />
            </button>
            {selectedImageIndex > 0 && (
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black/50 hover:bg-black/70 rounded-full p-2 sm:p-3"
                onClick={handlePrevious}
              >
                <ChevronLeft size={32} className="sm:w-12 sm:h-12" />
              </button>
            )}
            {selectedImageIndex < images.length - 1 && (
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black/50 hover:bg-black/70 rounded-full p-2 sm:p-3"
                onClick={handleNext}
              >
                <ChevronRight size={32} className="sm:w-12 sm:h-12" />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

