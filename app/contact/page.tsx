import type { Metadata } from 'next';
import {ContactSection} from '@/components/portfolio';
export const metadata: Metadata={title:'Contact'};
export default function Contact(){return <main id="main" className="inner-page"><ContactSection page/></main>;}
