'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowDown, ArrowUpRight, Menu, X } from 'lucide-react'
import { useState } from 'react'
import type { Project } from '@/lib/projects'

export function Header() {
  const [open, setOpen] = useState(false)
  const links = [['Projects', '#projects'], ['About', '#about'], ['Contact', '#contact']]
  return <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-5 py-5 mix-blend-difference text-white md:px-8">
    <Link href="/" className="font-serif text-lg tracking-tight" onClick={() => setOpen(false)}>Peterkin Interiors</Link>
    <nav className="hidden items-center gap-8 text-[10px] uppercase tracking-[0.22em] md:flex">{links.map(([label, href]) => <a key={href} href={href} className="transition-opacity hover:opacity-60">{label}</a>)}</nav>
    <button aria-label={open ? 'Close menu' : 'Open menu'} className="md:hidden" onClick={() => setOpen(!open)}>{open ? <X size={20} /> : <Menu size={20} />}</button>
    {open && <nav className="absolute inset-x-0 top-0 flex min-h-screen flex-col justify-center gap-8 bg-[#35342f] px-5 text-4xl font-serif md:hidden"><button className="absolute right-5 top-5" aria-label="Close menu" onClick={() => setOpen(false)}><X size={24} /></button>{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}</nav>}
  </header>
}

export function Hero({ image }: { image: string }) {
  return <section className="relative flex min-h-[92vh] items-end overflow-hidden bg-muted text-white"><Image src={image} alt="Placeholder hero living room interior" fill priority sizes="100vw" className="object-cover" /><div className="absolute inset-0 bg-black/25" /><div className="relative z-10 flex w-full items-end justify-between gap-8 px-5 pb-9 md:px-8 md:pb-12"><div><p className="mb-4 text-[10px] uppercase tracking-[0.24em]">New York · Hudson Valley</p><h1 className="max-w-3xl font-serif text-5xl leading-[0.95] tracking-[-0.04em] md:text-8xl">Spaces with a sense of place.</h1></div><a href="#projects" className="hidden items-center gap-2 pb-1 text-[10px] uppercase tracking-[0.2em] md:flex">Scroll to explore <ArrowDown size={14} /></a></div></section>
}

export function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return <Link href={`/projects/${project.slug}`} className={`group block ${featured ? 'md:col-span-2' : ''}`}><div className={`relative overflow-hidden bg-muted ${featured ? 'aspect-[16/10]' : 'aspect-[4/3]'}`}><Image src={project.images[0].src} alt={project.images[0].alt} fill sizes={featured ? '(max-width: 768px) 100vw, 66vw' : '(max-width: 768px) 100vw, 33vw'} className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" /></div><div className="flex items-start justify-between gap-4 pt-3"><div><h3 className="font-serif text-xl">{project.title}</h3><p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{project.category} · {project.location}</p></div><ArrowUpRight size={16} className="mt-1 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></div></Link>
}

export function SectionIntro({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) { return <div className="grid gap-6 border-t border-border pt-5 md:grid-cols-[1fr_2fr] md:gap-12"><p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{eyebrow}</p><div><h2 className="max-w-3xl font-serif text-4xl leading-[1.05] tracking-[-0.03em] md:text-6xl">{title}</h2>{children}</div></div> }

export function ContactForm() { return <form className="grid gap-5" action="mailto:studio@peterkininteriors.com" method="post" encType="text/plain"><label className="grid gap-2 text-[10px] uppercase tracking-[0.18em]">Name<input required name="name" className="border-b border-border bg-transparent py-3 text-base normal-case tracking-normal outline-none transition-colors focus:border-foreground" /></label><label className="grid gap-2 text-[10px] uppercase tracking-[0.18em]">Email<input required type="email" name="email" className="border-b border-border bg-transparent py-3 text-base normal-case tracking-normal outline-none transition-colors focus:border-foreground" /></label><label className="grid gap-2 text-[10px] uppercase tracking-[0.18em]">Message<textarea required name="message" rows={4} className="resize-none border-b border-border bg-transparent py-3 text-base normal-case tracking-normal outline-none transition-colors focus:border-foreground" /></label><button className="mt-3 flex items-center gap-2 text-left text-[10px] uppercase tracking-[0.18em] transition-opacity hover:opacity-60" type="submit">Send inquiry <ArrowUpRight size={14} /></button></form> }

export function Footer() { return <footer className="flex flex-col gap-4 border-t border-border px-5 py-7 text-[10px] uppercase tracking-[0.16em] text-muted-foreground md:flex-row md:items-center md:justify-between md:px-8"><p>© {new Date().getFullYear()} Peterkin Interiors</p><div className="flex gap-5"><a href="https://instagram.com" className="hover:text-foreground">Instagram</a><a href="mailto:studio@peterkininteriors.com" className="hover:text-foreground">Email</a></div></footer> }
