import { Encryption } from "@/components/main/encryption";
import { Hero } from "@/components/main/hero";
import { About } from "@/components/main/about";
import { Projects } from "@/components/main/projects";
import Skills from "@/components/main/skills";
import { Achievements } from "@/components/main/achievements";

// yaha pe ye comment nahi hatana mayank error throw kar raha h [SELF NOTE]
export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <About />
        <Skills />
        <Encryption />
        <Projects />
        <Achievements />
      </div>
    </main>
  );
}
