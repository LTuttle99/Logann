import type { Metadata } from 'next';
import './globals.css';
import { Navigation, Footer } from '@/components/portfolio';
export const metadata: Metadata = {
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL ? new URL(process.env.NEXT_PUBLIC_SITE_URL) : undefined,
  title: { default: 'Logann Tuttle — Data, Development & Possibility', template: '%s | Logann Tuttle' },
  description: 'Early-career data analyst and developer. Practical tools, actionable insights, and better ways of working.',
  openGraph: { title: 'Logann Tuttle', description: 'Data Analyst. Developer. Problem Solver.', type: 'website', ...(process.env.NEXT_PUBLIC_SITE_URL ? { images: ['/og.svg'] } : {}) },
};
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) { return <html lang="en"><body><a className="skip" href="#main">Skip to content</a><Navigation/>{children}<Footer/></body></html>; }
