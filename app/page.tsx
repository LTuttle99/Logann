import { Hero, Skills, ContactSection } from '@/components/portfolio';
import { PersonalIntroduction, BeyondTheScreen } from '@/components/personal';
import { ImpactSection, CareerTimeline } from '@/components/career';
import { FeaturedProduct } from '@/components/featured-product';

export default function Home() {
  return <main id="main"><Hero/><PersonalIntroduction/><ImpactSection/><CareerTimeline/><Skills/><FeaturedProduct/><BeyondTheScreen/><ContactSection/></main>;
}
