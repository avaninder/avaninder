import Image from "next/image";
import Navbar from "@/components/navbar";
import { Typewriter } from "@/components/Typewriter";

export default function Home() {
  return (
    <div className="w-screen h-screen overflow-x-hidden overflow-y-auto">
      <Navbar />
      <div className="h-full w-screen relative">
        <div className="absolute top-0 left-0 z-10 p-8 text-white text-4xl font-bold">
          <Typewriter
            speed={50}
            text="Hey there, I'm Avaninder"
          />
        </div>
        <Image
          src="/srshub_img.jpg"
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
          
      </div>
    </div>
  );
}
