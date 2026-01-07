import React, { useEffect, useState } from 'react'
import { urlFor } from '@/lib/sanity'
import Image from 'next/image'
import { ArrowDown } from 'lucide-react'

const Hero = ({ heroData }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <section className='relative h-screen w-full overflow-hidden'>
      <div
        className='absolute inset-0 bg-cover bg-center'
        style={{
          backgroundImage: `url('${urlFor(heroData?.image)}')`,
          backgroundPosition: 'center 40%',
        }}
      >
        <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent' />
      </div>

      <div className='relative h-full flex flex-col justify-end pb-20 md:pb-24 px-6 md:px-12 lg:px-20'>
        <div className='max-w-4xl mx-auto text-center'>
          <Image
            src={"/assets/svg/sustainability.svg"}
            alt="Hero Title"
            width={481}
            height={107}
            className="mx-auto mb-0 sm:mb-2"
          />

          <p className='text-base md:text-lg lg:text-xl text-white font-semibold leading-relaxed lg:max-w-[820px] mx-auto mb-4 sm:mb-8'>
            {heroData?.subtitle}
          </p>

          <button className='bg-primary hover:bg-primary/95 text-white px-8 py-3 md:px-10 md:py-4 rounded-full font-medium text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl'>
            See More
          </button>
        </div>
      </div>

      <div className={`absolute bottom-6 w-full ${isScrolled ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}>
        <div className='flex items-center justify-center w-full'>
          <div className='w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2 animate-bounce'>
            <div className='w-1 h-3 bg-white/50 rounded-full' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero