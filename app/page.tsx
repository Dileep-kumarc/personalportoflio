import { HeroNew } from "@/components/sections/hero-new"
import { BentoContent } from "@/components/sections/bento-content"
import { ProjectsNew } from "@/components/sections/projects-new"
import { ExperienceNew } from "@/components/sections/experience-new"
import { ContactNew } from "@/components/sections/contact-new"

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroNew />
      <BentoContent />
      <ProjectsNew />
      <ExperienceNew />
      <ContactNew />
    </div>
  )
}
