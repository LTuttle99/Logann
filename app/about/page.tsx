import type { Metadata } from 'next';
import {AboutSection,Philosophy,ContactSection} from '@/components/portfolio';
export const metadata: Metadata={title:'About'};
export default function About(){return <main id="main" className="inner-page"><AboutSection detailed/><Philosophy/><ContactSection/></main>;}
