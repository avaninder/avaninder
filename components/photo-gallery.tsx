"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

export type Photo = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

function columnsForWidth(width: number) {
  if (width >= 1024) return 3;
  if (width >= 640) return 2;
  return 1;
}

// Shortest-column-first bin packing, using each photo's aspect ratio as a
// stand-in for its rendered height (columns all render at equal width).
function distribute(photos: Photo[], columnCount: number) {
  const columns: Photo[][] = Array.from({ length: columnCount }, () => []);
  const heights = new Array(columnCount).fill(0);

  for (const photo of photos) {
    let shortest = 0;
    for (let i = 1; i < columnCount; i++) {
      if (heights[i] < heights[shortest]) shortest = i;
    }
    columns[shortest].push(photo);
    heights[shortest] += photo.height / photo.width;
  }

  return columns;
}

export default function PhotoGallery({ photos }: { photos: Photo[] }) {
  const [columnCount, setColumnCount] = useState(3);
  const [selected, setSelected] = useState<Photo | null>(null);

  useEffect(() => {
    const update = () => setColumnCount(columnsForWidth(window.innerWidth));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    if (!selected) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [selected]);

  const columns = distribute(photos, columnCount);

  return (
    <>
      <div className="bn-gallery">
        {columns.map((column, i) => (
          <div className="bn-gallery-col" key={i}>
            {column.map((photo) => (
              <button
                key={photo.src}
                type="button"
                onClick={() => setSelected(photo)}
                aria-label={`Open ${photo.alt}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  quality={75}
                />
              </button>
            ))}
          </div>
        ))}
      </div>

      {selected && (
        <div
          className="bn-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={selected.alt}
          onClick={() => setSelected(null)}
        >
          <button
            type="button"
            className="bn-lightbox-close"
            aria-label="Close"
            onClick={() => setSelected(null)}
          >
            <X size={22} />
          </button>
          <Image
            key={selected.src}
            src={selected.src}
            alt={selected.alt}
            width={selected.width}
            height={selected.height}
            sizes="90vw"
            quality={90}
            priority
            className="bn-lightbox-image"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
