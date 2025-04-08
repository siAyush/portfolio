import BlurFade from "@/components/blur-fade";
import BlurFadeText from "@/components/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { WorkCard } from "@/components/work-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { MailIcon } from "lucide-react";
import { Icons } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`I'm ${DATA.name.split(" ")[0]}`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
              <BlurFade delay={BLUR_FADE_DELAY}>
                <Link
                  href={`mailto:${DATA.contact.email}`}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12"
                  )}
                >
                  <MailIcon className="size-5" />
                </Link>
                <Link
                  href={DATA.contact.social.GitHub.url}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12"
                  )}
                >
                  <Icons.github className="size-5" />
                </Link>
                <Link
                  href={DATA.contact.social.LinkedIn.url}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12"
                  )}
                >
                  <Icons.linkedin className="size-5" />
                </Link>
                <Link
                  href={DATA.contact.social.X.url}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12"
                  )}
                >
                  <Icons.x className="size-5" />
                </Link>
              </BlurFade>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>

      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <h2 className="text-2xl font-bold">
            <span className="text-green-300">&gt;</span> About
          </h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <p className="text-gray-500 italic text-xs mb-4">
            [ break → understand → build ]
          </p>
          <div className="prose max-w-full text-pretty font-sans text-sm dark:prose-invert">
            {DATA.summary}
          </div>
        </BlurFade>
      </section>

      <section id="skills">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <div className="flex min-h-0 flex-col gap-y-3">
            <h2 className="text-2xl font-bold">
              <span className="text-green-300">&gt;</span> Skills
            </h2>
            <h2 className="text-l ">Languages</h2>
            <div className="flex flex-wrap gap-1">
              {DATA.languages.map((skill, id) => (
                <Badge key={skill}>{skill}</Badge>
              ))}
            </div>
            <h2 className="text-l ">Technologies</h2>
            <div className="flex flex-wrap gap-1">
              {DATA.technologies.map((skill, id) => (
                <Badge key={skill}>{skill}</Badge>
              ))}
            </div>
          </div>
        </BlurFade>
      </section>

      <section id="projects">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <h2 className="text-2xl font-bold">
              <span className="text-green-300">&gt;</span> Projects
            </h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
              {DATA.projects.map((project, id) => (
                <BlurFade key={project.title} delay={BLUR_FADE_DELAY * 4}>
                  <ProjectCard
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    tags={project.technologies}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-2xl font-bold">
              <span className="text-green-300">&gt;</span> Worked With
            </h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade key={work.company} delay={BLUR_FADE_DELAY * 5}>
              <WorkCard
                key={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
    </main>
  );
}
