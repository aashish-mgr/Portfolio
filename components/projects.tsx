import { projects } from "@/lib/content";
import { ProjectLinks } from "./project-links";
import { ProjectMock } from "./project-mock";
import { Reveal } from "./reveal";
import { Section } from "./section";
import { SectionHeader } from "./section-header";
import Image from "next/image";

function ProjectTags({ tags }: { tags: string[] }) {
  return (
    <ul className="mt-5 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <li
          key={tag}
          className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}

export function Projects() {
  const [featured, ...rest] = projects;

  return (
    <Section id="projects" className="scroll-mt-24 bg-base">
      <Reveal>
        <SectionHeader
          eyebrow="work"
          title="A record of things built and analysed"
        />
      </Reveal>

      <div className="mt-12 grid gap-10 lg:mt-14 lg:grid-cols-12 lg:items-center">
        <div className="relative h-64 overflow-hidden rounded-lg border border-line bg-elevated/50 sm:h-96 lg:col-span-6">
          {featured.image ? (
            <Image
              src={featured.image}
              alt={`${featured.title} screenshot`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top"
            />
          ) : (
            <ProjectMock variant="bars" />
          )}
          {!featured.image && (
            <span className="absolute bottom-3 right-4 font-mono text-[11px] text-faint">
              [project screenshot placeholder]
            </span>
          )}
        </div>
        <div className="lg:col-span-6">
          <p className="font-mono text-xs text-teal">{featured.category}</p>
          <h3 className="mt-2 font-display text-2xl font-medium tracking-[-0.01em] text-ink">
            {featured.title}
          </h3>
          <p className="mt-4 max-w-xl leading-relaxed text-muted">
            {featured.description}
          </p>
          <ProjectTags tags={featured.tags} />
          <ProjectLinks project={featured} />
        </div>
      </div>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        {rest.map((project, index) => (
          <article
            key={project.title}
            className="overflow-hidden rounded-lg border border-line bg-surface"
          >
            <div className="relative h-56 border-b border-line bg-elevated/50">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top"
                />
              ) : (
                <ProjectMock variant={index === 0 ? "board" : "mixed"} />
              )}
              {!project.image && (
                <span className="absolute bottom-3 right-4 font-mono text-[11px] text-faint">
                  [project screenshot placeholder]
                </span>
              )}
            </div>
            <div className="p-6 sm:p-7">
              <p className="font-mono text-xs text-gold">{project.category}</p>
              <h3 className="mt-2 font-display text-xl font-medium tracking-[-0.01em] text-ink">
                {project.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted">
                {project.description}
              </p>
              <ProjectTags tags={project.tags} />
              <ProjectLinks project={project} />
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}