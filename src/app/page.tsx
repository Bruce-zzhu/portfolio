import { About, Contact, Hero } from '@/features/portfolioDisplay';
import { StarsCanvas } from '@/components/canvas';

export default function App() {
  return (
    <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
      <Hero />
      <About />
      <div>
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
}
