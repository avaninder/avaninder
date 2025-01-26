import Navbar from "@/components/navbar";
import OutreachShowcase from "@/components/outreach-showcase";

export default function Home() {
  return (
    <div className="w-screen h-screen overflow-x-hidden overflow-y-auto">
      <Navbar />
      <main className="min-h-screen text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">My Outreach</h1>
        <OutreachShowcase />
      </div>
    </main>
    </div>
  );
}
