import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import PhotoGallery, { type Photo } from "@/components/photo-gallery";

const photos: Photo[] = [
  { src: "/photography/cities/IMG_0216.jpg", alt: "City skyline at dusk", width: 6000, height: 3368 },
  { src: "/photography/other/IMG_0238.jpg", alt: "Photograph", width: 3502, height: 2194 },
  { src: "/photography/cities/IMG_1386.jpg", alt: "City skyline", width: 3797, height: 1858 },
  { src: "/photography/other/IMG_0262.jpg", alt: "Photograph", width: 2181, height: 2659 },
  { src: "/photography/cities/IMG_1387.jpg", alt: "City street", width: 1422, height: 3741 },
  { src: "/photography/other/IMG_0265.jpg", alt: "Photograph", width: 6000, height: 3368 },
  { src: "/photography/cities/IMG_1390.jpg", alt: "City skyline", width: 6000, height: 4000 },
  { src: "/photography/other/IMG_0276.jpg", alt: "Photograph", width: 6000, height: 3368 },
  { src: "/photography/cities/IMG_1439.jpg", alt: "City tower", width: 4000, height: 6000 },
  { src: "/photography/other/IMG_0301.jpg", alt: "Photograph", width: 6000, height: 1801 },
  { src: "/photography/cities/IMG_1441.jpg", alt: "Glass office tower", width: 4000, height: 6000 },
  { src: "/photography/other/IMG_0332.jpg", alt: "Photograph", width: 2539, height: 3054 },
  { src: "/photography/cities/IMG_1445.jpg", alt: "City tower", width: 4000, height: 6000 },
  { src: "/photography/other/IMG_1188.jpg", alt: "Photograph", width: 6000, height: 4000 },
  { src: "/photography/cities/IMG_1454.jpg", alt: "City tower", width: 4000, height: 6000 },
  { src: "/photography/other/IMG_1198.jpg", alt: "Photograph", width: 4000, height: 6000 },
  { src: "/photography/cities/IMG_1459.jpg", alt: "City tower", width: 4000, height: 6000 },
  { src: "/photography/other/IMG_1392.jpg", alt: "Photograph", width: 6000, height: 1927 },
  { src: "/photography/cities/IMG_1460.jpg", alt: "City skyline", width: 6000, height: 4000 },
  { src: "/photography/other/IMG_1400.jpg", alt: "Photograph", width: 4000, height: 6000 },
  { src: "/photography/cities/IMG_1486.jpg", alt: "City street", width: 2651, height: 1843 },
  { src: "/photography/other/IMG_1536.jpg", alt: "Photograph", width: 6000, height: 4000 },
  { src: "/photography/cities/IMG_1541.jpg", alt: "NTT Docomo Yoyogi tower", width: 4000, height: 6000 },
  { src: "/photography/other/IMG_1682.jpg", alt: "Photograph", width: 6000, height: 4000 },
  { src: "/photography/cities/IMG_1545.jpg", alt: "City tower", width: 3381, height: 3990 },
  { src: "/photography/other/IMG_1734.jpg", alt: "Photograph", width: 6000, height: 4000 },
  { src: "/photography/cities/IMG_1548.jpg", alt: "City skyline", width: 6000, height: 4000 },
  { src: "/photography/cities/IMG_1987.jpg", alt: "City lights at night", width: 4000, height: 2865 },
  { src: "/photography/cities/IMG_2227.jpg", alt: "City skyline", width: 6000, height: 4000 },
];

export default function Photography() {
  return (
    <div className="bn-page min-h-screen">
      <div className="bn-wrap">
        <div className="bn-gallery-head">
          <Link href="/" className="bn-back-link">
            <ArrowLeft size={13} /> avaninder.bhaghayath
          </Link>
          <h1>Photography</h1>
        </div>

        <PhotoGallery photos={photos} />
      </div>
    </div>
  );
}
