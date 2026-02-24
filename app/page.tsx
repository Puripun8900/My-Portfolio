import { Briefcase } from "lucide-react"
import { PortfolioHeader } from "@/components/portfolio/header"
import { SectionTitle } from "@/components/portfolio/section-title"
import { Objective } from "@/components/portfolio/objective"
import { Skills } from "@/components/portfolio/skills"
import { TechStack } from "@/components/portfolio/tech-stack"
import { Projects } from "@/components/portfolio/projects"
import { Education } from "@/components/portfolio/education"

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-slate-50 to-cyan-50">
      <div className="max-w-[1100px] mx-auto px-4 py-8 md:px-5 md:py-10">
        <PortfolioHeader />

        <SectionTitle>Objective</SectionTitle>
        <Objective />

        <SectionTitle>Skills</SectionTitle>
        <Skills />

        <SectionTitle>My Tech Stack</SectionTitle>
        <TechStack />

        <SectionTitle>Projects</SectionTitle>
        <Projects />

        <SectionTitle>Education</SectionTitle>
        <Education />

        <footer className="text-center text-muted-foreground mt-10 pt-6 text-sm flex items-center justify-center gap-2">
          <Briefcase className="h-4 w-4" />
          <p>Available as soon as possible for internship opportunities.</p>
        </footer>
      </div>
    </div>
  )
}
