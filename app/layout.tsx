import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'

const serif = Cormorant_Garamond({ variable: '--font-serif', subsets: ['latin'], weight: ['400', '500', '600'] })
const sans = DM_Sans({ variable: '--font-sans', subsets: ['latin'], weight: ['400', '500'] })

export const metadata: Metadata = { title: 'Peterkin Interiors — Spaces with a sense of place', description: 'Peterkin Interiors is a New York-based design studio creating quiet, tactile spaces with a lasting point of view.', generator: 'Next.js' }
export const viewport: Viewport = { colorScheme: 'light', themeColor: '#f1eee8', width: 'device-width', initialScale: 1 }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en" className="bg-background"><body className={`${serif.variable} ${sans.variable} antialiased`}>{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html> }
