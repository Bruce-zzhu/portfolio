import { StarsCanvas } from '@/components/canvas';
import { About, Contact, Experience, Header, Hero, Skills } from '@/components/pageSections';

export default function App() {
  return (
    <>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Header />
        <Hero />
      </div>
      <main>
        <About />
        <Skills />
        <Experience />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </main>
    </>
  );
}
