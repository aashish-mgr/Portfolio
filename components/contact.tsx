import { Mail } from "lucide-react";
import { socials } from "@/lib/content";
import { GithubIcon, LinkedinIcon } from "./brand-icons";
import { Reveal } from "./reveal";
import { Section } from "./section";
import { SectionHeader } from "./section-header";

const contactLinks = [
  {
    label: "email",
    value: socials.email,
    href: `mailto:${socials.email}`,
    icon: Mail,
  },
  {
    label: "github",
    value: "https://github.com/aashish-mgr",
    href: socials.github,
    icon: GithubIcon,
  },
  {
    label: "linkedin",
    value: "https://www.linkedin.com/in/aashish-mgr/",
    href: socials.linkedin,
    icon: LinkedinIcon,
  },
];

export function Contact() {
  return (
    <Section id="contact" className="scroll-mt-24 bg-base">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <Reveal>
            <SectionHeader
              eyebrow="contact"
              title="Let's talk the web"
            />
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-6 max-w-md leading-relaxed text-muted">
              If you have a project in mind, or just want to say hi, feel free to reach out. I’m always open to discussing new ideas, creative projects, or opportunities to be part of your visions.
            </p>
            <ul className="mt-8 space-y-4">
              {contactLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-3"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-md border border-line bg-elevated/40 text-muted transition group-hover:border-teal/50 group-hover:text-teal">
                      <link.icon size={16} aria-hidden />
                    </span>
                    <span>
                      <span className="block font-mono text-[11px] text-faint">
                        {link.label}
                      </span>
                      <span className="block text-sm text-ink transition group-hover:text-teal">
                        {link.value}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}