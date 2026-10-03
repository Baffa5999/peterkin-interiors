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

// Uploaded project imagery is organized by project for straightforward future replacement.
export const projects: Project[] = [
  {
    slug: 'cedar-house', title: 'Cedar House', category: 'Residential', location: 'Abuja, Nigeria', year: '2024', scope: 'Full renovation',
    description: 'A quiet country retreat shaped by warm timber, honest materials, and the changing light of the valley.',
    process: 'We worked from the existing structure outward, preserving original beams and letting each new intervention feel inevitable.',
    images: [
      { src: '/images/abuja-glow-living-room.png', alt: 'Abuja Glow: a warm living room where soft light meets cream delight' }, // cedar-house-01 / hero-living-room.jpg
      { src: '/images/projects/cedar-house/linen-haven-bedroom.png', alt: 'Linen Haven: a quiet bedroom retreat where woven warmth meets restful sleep' }, // cedar-house-02.jpg
      { src: '/images/projects/cedar-house/marble-marvel-kitchen.png', alt: 'Marble Marvel: a walnut kitchen where Abuja flavour meets functional glamour' }, // cedar-house-03.jpg
      { src: '/images/projects/cedar-house/wood-mood-lounge.png', alt: 'Wood Mood: a refined lounge where timber rhythm meets a gentle Abuja bloom' }, // cedar-house-04.jpg
      { src: '/images/projects/cedar-house/texture-flexure-detail.png', alt: 'Texture Flexure: tactile upholstery and timber detail, made for comfort and pleasure' }, // cedar-house-05.jpg
    ],
  },
  {
    slug: 'elm-street', title: 'Elm Street', category: 'Residential', location: 'Abuja, Nigeria', year: '2023', scope: 'Interior architecture',
    description: 'An apartment renovation balancing precise detailing with the ease of everyday family life.',
    process: 'A restrained palette creates a continuous visual rhythm, while bespoke storage makes room for the life held within it.',
    images: [
      { src: '/images/projects/cedar-house/linen-haven-bedroom.png', alt: 'Linen Haven: a quiet bedroom retreat where woven warmth meets restful sleep' }, // elm-street-01.jpg
      { src: '/images/projects/elm-street/elm-street-hallway.png', alt: 'Hallway hush: a warm Abuja passage where timber and art find their rhythm.' },
      { src: '/images/projects/elm-street/elm-street-kitchen.png', alt: 'Kitchen cadence: walnut, pale stone, and Nigerian daylight in balance.' },
      { src: '/images/projects/elm-street/elm-street-study.png', alt: 'Study story: a quiet workroom shaped for focus, thought, and gentle flow.' },
    ],
  },
  {
    slug: 'northline-studio', title: 'Northline Studio', category: 'Commercial', location: 'Abuja, Nigeria', year: '2022', scope: 'Workplace interiors',
    description: 'A light-filled Abuja studio where warm wood meets a welcoming aura, giving every working hour room to flower.',
    process: 'The plan is organized around a central workroom, with quieter rooms and informal meeting spaces unfolding around it.',
    images: [
      { src: '/images/projects/northline-studio/kar-aura-reception.png', alt: 'Marble Marvel: a walnut kitchen where Abuja flavour meets functional glamour' }, // northline-studio-01.jpg
      { src: '/images/projects/northline-studio/northline-meeting-room.png', alt: 'Meeting ground: a warm Abuja room where ideas gather around timber.' },
      { src: '/images/projects/northline-studio/northline-library.png', alt: 'Library light: art, books, and greenery giving the studio room to grow.' },
      { src: '/images/projects/northline-studio/northline-material-detail.png', alt: 'Material language: brass, weave, wood, and craft in close conversation.' },
    ],
  },
  {
    slug: 'marsh-cottage', title: 'Marsh Cottage', category: 'Residential', location: 'Abuja, Nigeria', year: '2021', scope: 'Furnishing & styling',
    description: 'A sun-washed Abuja retreat where tactile layers gather softly, creating a warm and welcoming story.',
    images: [
      { src: '/images/projects/marsh-cottage/wood-mood-lounge.png', alt: 'Refined Abuja living room with sectional sofa, wood slats, and layered lighting' }, // marsh-cottage-01.jpg
      { src: '/images/projects/marsh-cottage/marsh-cottage-living-room.png', alt: 'Living softly: a sun-washed Abuja room made for welcome and ease.' },
      { src: '/images/projects/marsh-cottage/marsh-cottage-bedroom.png', alt: 'Bedroom breeze: linen, timber, and quiet light settling into rest.' },
      { src: '/images/projects/marsh-cottage/marsh-cottage-kitchen.png', alt: 'Kitchen warmth: stone, timber, and handmade Nigerian details in harmony.' },
    ],
  },
]

export const featuredProjects = projects.slice(0, 4)
export const getProject = (slug: string) => projects.find((project) => project.slug === slug)

// Future asset structure: /public/images/projects/<slug>/<slug>-01.jpg
// Example: /public/images/projects/cedar-house/cedar-house-01.jpg
export const assetNotes = ['abuja-glow-living-room.png', 'designer-portrait.jpg', ...projects.map((p) => `${p.slug}/${p.slug}-01.jpg`)]

export const placeholderHero = '/images/abuja-glow-living-room.png'
export const placeholderPortrait = '/images/designer-portrait.jpg'
