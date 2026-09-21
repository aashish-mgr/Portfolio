import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Stack } from "@/components/stack";

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <Hero />
        <Stack />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}