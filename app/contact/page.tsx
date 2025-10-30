import Navbar from "@/components/navbar";
import { ContactForm } from "@/components/ContactForm";

export default function Contact() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="min-h-screen text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-400">
              If you have any questions, feel free to reach out!
            </p>
          </div>

          <div className="bg-gray-900 rounded-2xl p-8 md:p-12 border border-gray-800">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

