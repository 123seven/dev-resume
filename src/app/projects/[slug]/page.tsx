import { DATA } from "@/data/resume";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { toProjectSlug } from "@/lib/utils";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = DATA.projects.find(
    (p) => toProjectSlug(p.title) === params.slug.toLowerCase()
  );

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <div className="container max-w-[1400px] mx-auto px-6 py-12">
        <div className="mb-12">
          <Link
            href="/"
            className="group inline-flex items-center rounded-full bg-secondary px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
        </div>

        {/* Main Image */}
        {project.image && (
          <div className="mb-12 overflow-hidden rounded-lg">
            <img
              src={project.image}
              alt={project.title}
              className="w-full object-cover"
            />
          </div>
        )}
        {project.video && (
          <div className="mb-12 overflow-hidden rounded-lg">
            <video
              src={project.video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full"
            />
          </div>
        )}

        <div className="max-w-3xl">
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold tracking-tight">
                {project.title}
              </h1>
              <p className="mt-2 text-lg text-muted-foreground">
                {project.dates}
              </p>
            </div>

            {/* Quick Navigation */}
            <div className="flex flex-wrap gap-2 py-4">
              <a 
                href="#tech-stack" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Tech Stack
              </a>
              {project.features && (
                <>
                  <span className="text-muted-foreground">•</span>
                  <a 
                    href="#key-features" 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Key Features
                  </a>
                </>
              )}
              <span className="text-muted-foreground">•</span>
              <a 
                href="#privacy-policy" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </a>
              {project.screenshots && (
                <>
                  <span className="text-muted-foreground">•</span>
                  <a 
                    href="#screenshots" 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Screenshots
                  </a>
                </>
              )}
            </div>

            <p className="text-lg leading-relaxed">{project.description}</p>

            {project.links && project.links.length > 0 && (
              <div className="flex flex-wrap gap-3">
                {project.links.map((link, idx) => (
                  <Link
                    key={idx}
                    href={link.href}
                    target="_blank"
                    className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    {link.icon}
                    {link.type}
                  </Link>
                ))}
              </div>
            )}

            <div id="tech-stack">
              <h2 className="mb-3 text-2xl font-semibold tracking-tight">
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="px-3 py-1 text-sm font-medium"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {project.features && (
              <div id="key-features">
                <h2 className="mb-3 text-2xl font-semibold tracking-tight">
                  Key Features
                </h2>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start text-muted-foreground"
                    >
                      <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div id="privacy-policy" className="space-y-6">
              <h2 className="text-2xl font-semibold tracking-tight">
                Privacy Policy
              </h2>

              <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-2">
                  No Data Collection
                </h3>
                <p className="text-muted-foreground">
                  This app does not collect any personal data. The developer
                  does not gather any information from users of this
                  application.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Screenshots */}
        {project.screenshots && (
          <div id="screenshots" className="mt-16">
            <h2 className="mb-6 text-2xl font-semibold tracking-tight">
              Screenshots
            </h2>
            <div className="relative">
              <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-secondary">
                {project.screenshots.map((screenshot, index) => (
                  <div key={index} className="flex-none w-[400px]">
                    <img
                      src={screenshot}
                      alt={`${project.title} screenshot ${index + 1}`}
                      className="w-full rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
