import Image from "next/image";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="w-screen h-screen overflow-x-hidden overflow-y-auto">
      <Navbar />
      <div className="h-full w-screen relative">
        <Image
          src="/render_1.png"
          alt="Render of PCB"
          fill
          style={{
            objectFit: "cover",
          }}
          sizes="100vw"
          priority
        ></Image>
      </div>
    </div>
  );
}
