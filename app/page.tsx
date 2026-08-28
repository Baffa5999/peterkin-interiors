import Image from 'next/image'
import { Header, Hero, ProjectCard, SectionIntro, ContactForm, Footer, WhatsAppButton } from '@/components/site'
import { featuredProjects, placeholderPortrait, placeholderHero } from '@/lib/projects'

export default function Page() {
  return <>
    <Header />
    <main>
      <Hero image={placeholderHero} />
      <section className="px-5 py-20 md:px-8 md:py-32"><div className="grid gap-8 border-t border-border pt-5 md:grid-cols-[1fr_2fr] md:gap-12"><p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">From Abuja, Nigeria</p><div className="max-w-3xl"><h2 className="font-serif text-3xl leading-tight tracking-[-0.03em] md:text-5xl">Interiors shaped by light, material, and the way Nigerians live.</h2><p className="mt-6 max-w-xl text-sm leading-6 text-muted-foreground">Peterkin Interiors is an Abuja studio creating calm, considered spaces for modern Nigerian homes, businesses, and the everyday rituals held within them.</p></div></div></section>
      <section id="projects" className="space-y-14 px-5 py-24 md:px-8 md:py-36">
        <SectionIntro eyebrow="Selected work" title="Considered interiors for living, working, and gathering."><p className="mt-7 max-w-md text-sm leading-6 text-muted-foreground">Peterkin Interiors is an Abuja-based design studio creating quiet, tactile spaces with a lasting point of view, rooted in Nigeria and shaped by place.</p></SectionIntro>
        <div className="grid gap-x-5 gap-y-14 md:grid-cols-3">{featuredProjects.map((project, index) => <ProjectCard key={project.slug} project={project} featured={index === 0} />)}</div>
        <div className="pt-1"><a href="/projects" className="inline-flex items-center gap-2 border-b border-foreground pb-2 text-[10px] uppercase tracking-[0.18em] hover:opacity-60">View all projects <span>→</span></a></div>
      </section>
      <section id="about" className="bg-[#35342f] px-5 py-24 text-[#f1eee8] md:px-8 md:py-36"><div className="grid gap-12 md:grid-cols-[1fr_1fr]"><div className="relative aspect-[4/5] overflow-hidden bg-muted"><Image src={placeholderPortrait} alt="Placeholder designer portrait" fill sizes="(max-width: 768px) 100vw, 45vw" className="object-cover" /></div><div className="flex flex-col justify-between gap-12"><div><p className="mb-7 text-[10px] uppercase tracking-[0.2em] text-[#bdb8ae]">The studio</p><h2 className="max-w-xl font-serif text-4xl leading-[1.05] tracking-[-0.03em] md:text-6xl">A room should feel like a deep breath.</h2></div><div className="max-w-md space-y-5 text-sm leading-6 text-[#c9c4bb]"><p>Peterkin Interiors creates spaces that are personal, grounded, and quietly expressive. Our work begins with listening: to the architecture, to the landscape, and to the people who will inhabit it.</p><p>Led by Peterkin, the studio works across residential and commercial interiors with a belief in fewer, better things — thoughtfully sourced, beautifully made, and meant to live with.</p></div></div></div></section>
      <section id="contact" className="px-5 py-24 md:px-8 md:py-36"><div className="grid gap-14 md:grid-cols-2"><SectionIntro eyebrow="Get in touch" title="Let’s make a place for what matters." /><div className="md:pt-1"><ContactForm /><div className="mt-12 flex flex-col gap-2 text-sm text-muted-foreground"><a href="mailto:Peterkinpeter360@gmail.com" className="hover:text-foreground">Peterkinpeter360@gmail.com</a><a href="tel:+2348100112879" className="hover:text-foreground">+234 810 011 2879</a><p>FCT Abuja, Nigeria</p></div></div></div></section>
    </main>
    <Footer />
    <WhatsAppButton />
  </>
}
