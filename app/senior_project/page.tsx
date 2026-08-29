import Link from "next/link";
import ZephyrusShowcase from "@/components/zephyrus";
import { ArrowLeft } from "lucide-react";

export default function SeniorProject() {
  return (
    <div className="bn-page min-h-screen">
      <div className="bn-wrap">
        <div className="bn-gallery-head">
          <Link href="/" className="bn-back-link">
            <ArrowLeft size={13} /> avaninder.bhaghayath
          </Link>
          <p className="bn-eyebrow">Senior Project</p>
          <h1>Zephyrus</h1>
          <p className="bn-lede">
            Autonomous VTOL Drone &mdash; a three-rotor Vertical Takeoff and Landing
            drone with autonomous flight capability.
          </p>
        </div>

        <section className="bn-section" aria-labelledby="build-progress-heading">
          <div className="bn-section-head">
            <h2 id="build-progress-heading">Build Progress</h2>
          </div>
          <ZephyrusShowcase />
        </section>
      </div>
    </div>
  );
}
