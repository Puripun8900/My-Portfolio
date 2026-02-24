import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Smart Gym IoT System",
    description:
      "IoT gym platform for real-time monitoring of equipment usage and analytics. Integrated sensor data collection with Raspberry Pi Pico and embedded processing for efficiency and user experience.",
    image:
      "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Smart Gym IoT Project",
    demo: "https://smartgym-m.azurewebsites.net/login.html",
    repo: "https://github.com/Puripun8900/Group-M",
  },
  {
    title: "Finnish Language Center",
    description:
      'Developed an interactive A1-level Finnish learning application with a "Workplace Breakroom" theme. Included responsive design, conversation modules, and student-generated learning content.',
    image:
      "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Language Center Project",
    demo: "https://arch-promchan.github.io/Language-Centre/",
    repo: "https://github.com/Arch-Promchan/Language-Centre/tree/frontend",
  },
]

export function Projects() {
  return (
    <div className="flex flex-col gap-6">
      {projects.map((project) => (
        <div
          key={project.title}
          className="bg-card/80 backdrop-blur-sm rounded-2xl shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-600/10"
        >
          <div className="relative w-full h-48 md:h-64">
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1100px"
            />
          </div>
          <div className="p-5 md:p-6 flex flex-col">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-grow">
              {project.description}
            </p>
            <div className="flex gap-3 flex-wrap">
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold text-sm px-4 py-2.5 rounded-lg transition-all duration-300 hover:bg-blue-700 hover:-translate-y-0.5 active:translate-y-0"
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold text-sm px-4 py-2.5 rounded-lg transition-all duration-300 hover:bg-blue-700 hover:-translate-y-0.5 active:translate-y-0"
              >
                <Github className="h-4 w-4" />
                GitHub Repo
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
