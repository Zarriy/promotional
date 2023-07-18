import Image from 'next/image';
import HeroComponent from '@/components/hero';
import Services from '@/components/services';
import FeaturedProjects from '@/components/featured';

export default function Home() {
  return (
    <main className='min-h-screen'>
    <div className="px-8 max-w-[1280px] mx-auto">
      <HeroComponent /> 
      <Services />
    </div>
    <FeaturedProjects />
    </main>
  )
}
