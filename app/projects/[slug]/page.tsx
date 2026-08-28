import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { Footer, Header } from '@/components/site'
import { getProject, projects } from '@/lib/projects'

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })) }

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()
  return <><Header /><main className="pt-24"><section className="px-5 pb-14 md:px-8 md:pb-20"><Link href="/projects" className="mb-14 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground"><ArrowLeft size={14} /> All projects</Link><div className="grid gap-10 md:grid-cols-[1fr_2fr] md:gap-12"><div><p className="mb-5 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{project.category}</p><h1 className="font-serif text-5xl leading-[0.95] tracking-[-0.04em] md:text-8xl">{project.title}</h1></div><div className="max-w-xl md:pt-8"><p className="text-lg leading-7">{project.description}</p><dl className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-4 text-[10px] uppercase tracking-[0.15em]"><div><dt className="text-muted-foreground">Location</dt><dd className="mt-2 tracking-normal">{project.location}</dd></div><div><dt className="text-muted-foreground">Year</dt><dd className="mt-2 tracking-normal">{project.year}</dd></div><div><dt className="text-muted-foreground">Scope</dt><dd className="mt-2 tracking-normal">{project.scope}</dd></div></dl></div></div></section><section className="space-y-4 px-5 md:px-8">{project.images.map((image, index) => <figure key={image.src} className="space-y-3"><div className={`relative overflow-hidden bg-muted ${index % 3 === 1 ? 'aspect-[4/5] md:ml-[16.666%] md:w-[66.666%]' : 'aspect-[16/10]'}`}><Image src={image.src} alt={image.alt} fill sizes="(max-width: 768px) 100vw, 90vw" className="object-cover" /></div><figcaption className="px-1 text-xs leading-5 text-muted-foreground md:px-0">{image.alt.replace(/^Placeholder for /, '')} — a considered Abuja interior shaped for Nigerian living.</figcaption></figure>)}</section><section className="grid gap-6 px-5 py-24 md:grid-cols-[1fr_2fr] md:px-8 md:py-36"><p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Process notes</p><p className="max-w-2xl font-serif text-3xl leading-tight md:text-5xl">{project.process ?? 'A considered approach, from first sketch to final detail.'}</p></section></main><Footer /></>
}
