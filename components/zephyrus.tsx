import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

type post = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  phase: string;
};

const events: post[] = [
  {
    id: 1,
    title: "Frame Assembly",
    description:
      "With the tilt rotor pods and rear rotor put together, I'm gearing up for a first flight!",
    imageUrl: "/drone-frame.jpg",
    phase: "Phase 5",
  },
  {
    id: 2,
    title: "Tilt Rotor Assembly",
    description:
      "Each pod comes out to ~450g, due to the high-power motors and aluminum joint construction.",
    imageUrl: "/tilt_rotor_asm.jpg",
    phase: "Phase 4",
  },
  {
    id: 3,
    title: "V2 Tilt Rotor Design",
    description:
      "After facing issues with the lack of support for the tilt rotor in the V1 servo mount design, I've designed and tested a much more robust and compact version, utilizing a spur gear for power transfer.",
    imageUrl: "/tilt_pod_v2.png",
    phase: "Phase 3",
  },
  {
    id: 4,
    title: "Spar Assembly",
    description:
      "With a 2-meter wingspan, the spar and tail boom combined will be lightweight thanks to the carbon fiber construction, enabling longer flight times with high structural integrity.",
    imageUrl: "/spar_weighed.jpg",
    phase: "Phase 2",
  },
  {
    id: 5,
    title: "Motors and Propellers",
    description:
      "With the three-rotor configuration, each featuring a 12x6 propeller and 790kv motor, the total weight is ~0.6 kg.",
    imageUrl: "/props_motors_weighed.jpg",
    phase: "Phase 1",
  },
];

export default function ZephyrusShowcase() {
  return (
    <div className="relative">
      <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-purple-600 to-transparent" />

      <div className="space-y-16">
        {events.map((post, index) => (
          <div className="relative" key={post.id}>
            <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-blue-600 rounded-full items-center justify-center border-4 border-black z-10">
              <CheckCircle2 className="w-6 h-6 text-white" />
            </div>

            <div
              className={`flex flex-col lg:flex-row gap-8 items-center ${
                index % 2 === 0 ? "" : "lg:flex-row-reverse"
              }`}
            >
              <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? "lg:pr-16" : "lg:pl-16"}`}>
                <div className="relative group overflow-hidden rounded-3xl bg-gray-900 border border-gray-800 hover:border-blue-500 transition-all duration-300">
                  <div className="relative h-64 md:h-80">
                    <Image
                      src={post.imageUrl}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      quality={85}
                    />
                  </div>
                </div>
              </div>

              <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? "lg:pl-16" : "lg:pr-16"}`}>
                <div className="bg-gray-900 rounded-3xl p-8 border border-gray-800 hover:border-blue-500 transition-all duration-300">
                  <div className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full mb-4">
                    {post.phase}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {post.title}
                  </h2>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {post.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
