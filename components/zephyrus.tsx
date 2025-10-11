import Image from "next/image";

type post = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
};

const events: post[] = [
  {
    id: 1,
    title: "V2 Tilt Rotor Design",
    description:
      "After facing issues with the lack of support for the tilt rotor in the V1 servo mount design, I've designed and tested a much more robust and compact version, utilizing a spur gear for power transfer.",
    imageUrl: "/tilt_pod_v2.png",
  },
  {
    id: 2,
    title: "Spar Assembly",
    description:
      "With a 2-meter wingspan, the spar and tail boom combined will be lightweight thanks to the carbon fiber construction, enabling longer flight times with high structural integrity.",
    imageUrl: "/spar_weighed.jpg",
  },
  {
    id: 3,
    title: "Motors and Propellers",
    description:
      "With the three-rotor configuration, each featuring a 12x6 propeller and 790kv motor, the total weight is ~0.6 kg.",
    imageUrl: "/props_motors_weighed.jpg",
  },
];

export default function ZephyrusShowcase() {
  return (
    <div className="space-y-24">
      {events.map((post, index) => (
        <div className="block group" key={post.id}>
          <div
            className={`flex flex-col ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } gap-8 items-center`}
          >
            <div className="w-full lg:w-1/2">
              <Image
                src={post.imageUrl}
                alt={post.title}
                width={600}
                height={400}
                className="rounded-3xl shadow-lg transition-transform duration-300"
              />
            </div>
            <div className="w-full lg:w-1/2 space-y-4">
              <h2 className="text-3xl font-bold text-blue-400  transition-colors duration-300">
                {post.title}
              </h2>
              <p className="text-gray-300 text-lg">{post.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
