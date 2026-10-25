import type { Metadata } from 'next';
import { CareerTimeline } from '@/components/career';
import { ContactSection } from '@/components/portfolio';
export const metadata: Metadata = { title: 'Experience' };
export default function Experience() {
  return <main id="main" className="inner-page"><CareerTimeline detailed/><ContactSection/></main>;
}
