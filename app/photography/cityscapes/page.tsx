"use client";

import Navbar from "@/components/navbar";
import { X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const images = [
  "IMG_0216.jpg",
  "IMG_1386.jpg",
  "IMG_1387.jpg",
  "IMG_1390.jpg",
  "IMG_1439.jpg",
  "IMG_1441.jpg",
  "IMG_1445.jpg",
  "IMG_1454.jpg",
  "IMG_1459.jpg",
  "IMG_1460.jpg",
  "IMG_1486.jpg",
  "IMG_1541.jpg",
  "IMG_1545.jpg",
  "IMG_1548.jpg",
  "IMG_1987.jpg",
  "IMG_2227.jpg",
];

export default function Cityscapes() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="min-h-screen text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Cityscapes</h1>
          
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {images.map((image, index) => (
              <div
                key={index}
                className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-lg"
                onClick={() => setSelectedImage(`/photography/cities/${image}`)}
              >
                <Image
                  src={`/photography/cities/${image}`}
                  alt={`Cityscape ${index + 1}`}
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
              alt="Selected cityscape"
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

