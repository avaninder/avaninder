import Link from 'next/link'
import Image from 'next/image'

type Project = {
  id: number
  title: string
  description: string
  imageUrl: string
  projectUrl: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Polaris Flight Computer",
    description: "Featuring an ultra-precise barometer and 6-DOF Inertial Measurement Unit, the Polaris FC is intended for rocketry and UAV applications. It's ultra-powerful STM32H7 MCU features an ARM Cortex®-M7 proccesing core, and the board supports up to 5 servos or ESCs for brushless motors. The reciever interface allows for communication with the standard SBUS and IBUS protocols.",
    imageUrl: "/polaris.png",
    projectUrl: "https://github.com/charizardavi/Polaris"
  },
  {
    id: 2,
    title: "GimbalFOC",
    description: "A camera stabilization gimbal I made using a brushless DC motor field-oriented control algorithm for butter-smooth videography, even with severe shake.",
    imageUrl: "/gimbal.png",
    projectUrl: "https://github.com/charizardavi/GimbalFOC"
  },
  {
    id: 3,
    title: "SRS Hub & Tracker",
    description: "The SRSHub is a fully-featured sensor integration board for FIRST Tech Challenge, featuring 12 analog/digital inputs, 6 dedicated-hardware quadrature/PWM encoder ports, and a 480 MHZ system clock for optimal performance. The SRSTracker is a dedicated odometry computer, which utilizes a 480 MHZ system clock to accurately compute the robots position. ",
    imageUrl: "/srs_tracker_and_hub.png",
    projectUrl: "/projects"
  },
  {
    id: 4,
    title: "Vertices Path Generator",
    description: "A user interface to design and generate trajectories for the Vertices Path Follower, created by 15534 VERTEX.",
    imageUrl: "/vertices_path_gen.png",
    projectUrl: "https://vertices-path-gen.vercel.app"
  },
  {
    id: 5,
    title: "MacuScan",
    description: "MacuScan is a mobile app which utilizes a Convolutional Neural Network for analyzing age-related macular degeneration (AMD) in the eye. This low-cost solution only requires a lens and 3d-printed adapter for a smartphone, and allows anyone to quickly diagnose AMD.",
    imageUrl: "/macuscan.png",
    projectUrl: "https://github.com/charizardavi/MacuScan"
  },
  {
    id: 6,
    title: "MyAIDermatologist",
    description: "MyAIDermatologist is a mobile app that uses a convolutional neural network to detect various skin diseases, increasing accessibility for those without the ability to visit a dermatologist.",
    imageUrl: "/myaidermatologist.png",
    projectUrl: "https://github.com/charizardavi/myaidermatologist"
  },
]

export default function ProjectShowcase() {
  return (
    <div className="space-y-24">
      {projects.map((project, index) => (
        <Link 
          href={project.projectUrl} 
          key={project.id}
          target="_blank"
          rel="noopener noreferrer"
          className="block group"
        >
          <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}>
            <div className="w-full lg:w-1/2">
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={600}
                height={400}
                className="rounded-3xl shadow-lg transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="w-full lg:w-1/2 space-y-4">
              <h2 className="text-3xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors duration-300">{project.title}</h2>
              <p className="text-gray-300 text-lg">{project.description}</p>
              <div className="inline-block bg-blue-600 text-white py-2 px-4 rounded-full text-sm font-semibold transition-colors duration-300 group-hover:bg-blue-500">
                View Project
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

