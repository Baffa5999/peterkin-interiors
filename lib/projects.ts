export type Project = {
  slug: string
  title: string
  category: string
  location: string
  year: string
  scope: string
  description: string
  process?: string
  images: { src: string; alt: string }[]
}

// Placeholder URLs are centralized here for easy replacement with /images/projects/... assets.
export const projects: Project[] = [
  {
    slug: 'cedar-house', title: 'Cedar House', category: 'Residential', location: 'Hudson Valley, NY', year: '2024', scope: 'Full renovation',
    description: 'A quiet country retreat shaped by warm timber, honest materials, and the changing light of the valley.',
    process: 'We worked from the existing structure outward, preserving original beams and letting each new intervention feel inevitable.',
    images: [
      { src: 'https://placehold.co/1600x1100/d8d0c5/393832?text=Cedar+House+01', alt: 'Placeholder for Cedar House living room' },
      { src: 'https://placehold.co/1200x1500/c2b8aa/393832?text=Cedar+House+02', alt: 'Placeholder for Cedar House kitchen' },
      { src: 'https://placehold.co/1600x1100/b4aa9e/393832?text=Cedar+House+03', alt: 'Placeholder for Cedar House dining area' },
      { src: 'https://placehold.co/1200x1500/cbc1b5/393832?text=Cedar+House+04', alt: 'Placeholder for Cedar House bedroom' },
    ],
  },
  {
    slug: 'elm-street', title: 'Elm Street', category: 'Residential', location: 'Brooklyn, NY', year: '2023', scope: 'Interior architecture',
    description: 'An apartment renovation balancing precise detailing with the ease of everyday family life.',
    process: 'A restrained palette creates a continuous visual rhythm, while bespoke storage makes room for the life held within it.',
    images: [
      { src: 'https://placehold.co/1600x1100/c8c1b8/393832?text=Elm+Street+01', alt: 'Placeholder for Elm Street living room' },
      { src: 'https://placehold.co/1200x1500/bdb4aa/393832?text=Elm+Street+02', alt: 'Placeholder for Elm Street hallway' },
      { src: 'https://placehold.co/1600x1100/d7d0c8/393832?text=Elm+Street+03', alt: 'Placeholder for Elm Street kitchen' },
      { src: 'https://placehold.co/1200x1500/c0b7ad/393832?text=Elm+Street+04', alt: 'Placeholder for Elm Street study' },
    ],
  },
  {
    slug: 'northline-studio', title: 'Northline Studio', category: 'Commercial', location: 'Manhattan, NY', year: '2022', scope: 'Workplace interiors',
    description: 'A light-filled studio for a growing creative practice, designed to support focus, exchange, and pause.',
    process: 'The plan is organized around a central workroom, with quieter rooms and informal meeting spaces unfolding around it.',
    images: [
      { src: 'https://placehold.co/1600x1100/bbb8b0/393832?text=Northline+Studio+01', alt: 'Placeholder for Northline Studio workspace' },
      { src: 'https://placehold.co/1200x1500/d2ccc3/393832?text=Northline+Studio+02', alt: 'Placeholder for Northline Studio meeting room' },
      { src: 'https://placehold.co/1600x1100/c7c1b9/393832?text=Northline+Studio+03', alt: 'Placeholder for Northline Studio library' },
      { src: 'https://placehold.co/1200x1500/aca9a2/393832?text=Northline+Studio+04', alt: 'Placeholder for Northline Studio detail' },
    ],
  },
  {
    slug: 'marsh-cottage', title: 'Marsh Cottage', category: 'Residential', location: 'Martha’s Vineyard, MA', year: '2021', scope: 'Furnishing & styling',
    description: 'A small coastal house with a soft, sun-washed palette and a deep respect for its elemental setting.',
    images: [
      { src: 'https://placehold.co/1600x1100/d6d0c7/393832?text=Marsh+Cottage+01', alt: 'Placeholder for Marsh Cottage exterior' },
      { src: 'https://placehold.co/1200x1500/c9c1b5/393832?text=Marsh+Cottage+02', alt: 'Placeholder for Marsh Cottage living room' },
      { src: 'https://placehold.co/1600x1100/beb7ab/393832?text=Marsh+Cottage+03', alt: 'Placeholder for Marsh Cottage bedroom' },
      { src: 'https://placehold.co/1200x1500/ded8d0/393832?text=Marsh+Cottage+04', alt: 'Placeholder for Marsh Cottage kitchen' },
    ],
  },
]

export const featuredProjects = projects.slice(0, 4)
export const getProject = (slug: string) => projects.find((project) => project.slug === slug)

// Future asset structure: /public/images/projects/<slug>/<slug>-01.jpg
// Example: /public/images/projects/cedar-house/cedar-house-01.jpg
export const assetNotes = ['hero-living-room.jpg', 'designer-portrait.jpg', ...projects.map((p) => `${p.slug}/${p.slug}-01.jpg`)]

export const placeholderHero = 'https://placehold.co/2000x1300/b9b1a5/393832?text=Hero+Living+Room'
export const placeholderPortrait = 'https://placehold.co/900x1100/c7c0b7/393832?text=Designer+Portrait'
