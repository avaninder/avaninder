import Image from "next/image";

type Post = {
  title: string;
  description: string;
  imageUrl: string;
  phase: string;
  isVideo?: boolean;
};

const events: Post[] = [
  {
    title: "Second Test Flight",
    description:
      "The added weight of the ribs and tail did not affect flight performance, which is promising! The airspeed was lower than expected, and total acceleration needs optimization before transitioning, either by shaving weight or changing motor+prop configuration.",
    imageUrl: "/zephyrus_test_2.mp4",
    phase: "Phase 9",
    isVideo: true,
  },
  {
    title: "Finished Assembly",
    description:
      "Using a thermal-sealing wrap, the wings are done, and the drone is ready for another flight!",
    imageUrl: "/finished_assembly.jpg",
    phase: "Phase 8",
  },
  {
    title: "Wing Rib Assembly",
    description:
      "Using ultra-light servos with laser-cut plywood ribs, the ailerons are assembled and ready for tuning!",
    imageUrl: "/aileron.jpg",
    phase: "Phase 7",
  },
  {
    title: "First Test Flight",
    description:
      "In tricopter mode, I tested sensor functionality and flight capability! The main takeaway was that stability and control response are going to need some tuning, but the maiden flight was promising!",
    imageUrl: "/zephyrus_test_1.mp4",
    phase: "Phase 6",
    isVideo: true,
  },
  {
    title: "Frame Assembly",
    description:
      "With the tilt rotor pods and rear rotor put together, I'm gearing up for a first flight!",
    imageUrl: "/drone-frame.jpg",
    phase: "Phase 5",
  },
  {
    title: "Tilt Rotor Assembly",
    description:
      "Each pod comes out to ~450g, due to the high-power motors and aluminum joint construction.",
    imageUrl: "/tilt_rotor_asm.jpg",
    phase: "Phase 4",
  },
  {
    title: "V2 Tilt Rotor Design",
    description:
      "After facing issues with the lack of support for the tilt rotor in the V1 servo mount design, I've designed and tested a much more robust and compact version, utilizing a spur gear for power transfer.",
    imageUrl: "/tilt_pod_v2.png",
    phase: "Phase 3",
  },
  {
    title: "Spar Assembly",
    description:
      "With a 2-meter wingspan, the spar and tail boom combined will be lightweight thanks to the carbon fiber construction, enabling longer flight times with high structural integrity.",
    imageUrl: "/spar_weighed.jpg",
    phase: "Phase 2",
  },
  {
    title: "Motors and Propellers",
    description:
      "With the three-rotor configuration, each featuring a 12x6 propeller and 790kv motor, the total weight is ~0.6 kg.",
    imageUrl: "/props_motors_weighed.jpg",
    phase: "Phase 1",
  },
];

export default function ZephyrusShowcase() {
  return (
    <div>
      {events.map((post) => (
        <div className="bn-phase" key={post.phase}>
          <div className="bn-phase-media">
            {post.isVideo ? (
              <video src={post.imageUrl} controls preload="metadata">
                Your browser does not support the video tag.
              </video>
            ) : (
              <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                sizes="(max-width: 640px) 100vw, 176px"
              />
            )}
          </div>
          <div className="bn-phase-body">
            <div className="bn-phase-row">
              <h3>{post.title}</h3>
              <span className="bn-phase-tag">{post.phase}</span>
            </div>
            <p>{post.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
