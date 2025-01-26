import Link from "next/link";
import Image from "next/image";

type Outreach = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
};

const events: Outreach[] = [
  {
    id: 1,
    title: "FLL Team 89 Mentoring",
    description:
      "",
    imageUrl: "/fll_mentoring.png",
  },
  {
    id: 2,
    title: "FTC Team 19921 Mentoring ",
    description:
      "",
    imageUrl: "/ftc_mentoring.png",
  },
  {
    id: 3,
    title: "ESSO 3D Printing & Design Club",
    description:
      "",
    imageUrl: "/esso_img.png",
  },
  {
    id: 4,
    title: "RoboBoston Block Part @ MASSROBOTICS ",
    description:
      "",
    imageUrl: "/roboboston_2024.png",
  },
  {
    id: 5,
    title: "Meeting with Romanian FTC Team 19141",
    description:
      "",
    imageUrl: "/ftc_meet_1.png",
  },
  {
    id: 6,
    title: "Meeting with Brazillian FTC Team 21222",
    description:
      "",
    imageUrl: "/ftc_meet_2.png",
  },
  {
    id: 7,
    title: "Boston Children's Museum CreatedBy Festival",
    description:
      "",
    imageUrl: "/boston_createdby.png",
  },
  {
    id: 8,
    title: "Main Street School",
    description:
      "",
    imageUrl: "/elementary_school_outreach.png",
  },
];

export default function OutreachShowcase() {
  return (
    <div className="space-y-24">
      {events.map((outreach, index) => (
        <div className="block group">
          <div
            className={`flex flex-col ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } gap-8 items-center`}
          >
            <div className="w-full lg:w-1/2">
              <Image
                src={outreach.imageUrl}
                alt={outreach.title}
                width={600}
                height={400}
                className="rounded-3xl shadow-lg transition-transform duration-300"
              />
            </div>
            <div className="w-full lg:w-1/2 space-y-4">
              <h2 className="text-3xl font-bold text-blue-400  transition-colors duration-300">
                {outreach.title}
              </h2>
              <p className="text-gray-300 text-lg">{outreach.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
