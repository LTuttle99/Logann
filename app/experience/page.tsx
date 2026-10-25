import type { Metadata } from 'next';
import {ExperienceSection,ContactSection} from '@/components/portfolio';
export const metadata: Metadata={title:'Experience'};
export default function Experience(){return <main id="main" className="inner-page"><ExperienceSection detailed/><ContactSection/></main>;}
