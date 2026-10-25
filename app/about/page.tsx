import type { Metadata } from 'next';
import { PersonalIntroduction } from '@/components/personal';
import { IndependentDevelopmentNote } from '@/components/featured-product';
import { ContactSection } from '@/components/portfolio';
export const metadata: Metadata = { title: 'About' };
export default function About() {
  return <main id="main" className="inner-page"><PersonalIntroduction detailed/><IndependentDevelopmentNote/><ContactSection/></main>;
}
