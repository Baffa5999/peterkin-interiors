import { Header, ProjectCard, Footer } from '@/components/site'
import { projects } from '@/lib/projects'

export default function ProjectsPage() { return <><Header /><main className="px-5 pb-24 pt-32 md:px-8 md:pb-36 md:pt-40"><div className="mb-20 grid gap-6 border-t border-border pt-5 md:grid-cols-[1fr_2fr] md:gap-12"><p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Portfolio</p><h1 className="max-w-3xl font-serif text-5xl leading-[0.95] tracking-[-0.04em] md:text-8xl">A study of spaces and the lives inside them.</h1></div><div className="grid gap-x-5 gap-y-14 md:grid-cols-3">{projects.map((project, index) => <ProjectCard key={project.slug} project={project} featured={index === 0} />)}</div></main><Footer /></> }
