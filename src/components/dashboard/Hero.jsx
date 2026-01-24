import React, { useEffect, useState } from 'react'
import { urlFor } from '@/lib/sanity'
import { scrollToSection } from '../../../utils/helpers/smoothScrollTo';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'

const Hero = ({ heroData }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = Array.isArray(heroData) ? heroData : [heroData];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id='home' className='relative h-screen w-full overflow-hidden'>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <div
            className='absolute inset-0 bg-cover bg-center'
            style={{
              backgroundImage: `url('${urlFor(slide?.image)}')`,
              backgroundPosition: 'center 40%',
            }}
          >
            <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent' />
          </div>

          <div className='relative h-full flex flex-col justify-end pb-20 md:pb-24 px-6 md:px-12 lg:px-20'>
            <div className='max-w-4xl mx-auto text-center'>
              <h2 className='font-dancing font-semibold italic text-white text-7xl'>{slide?.title}</h2>

              <p className='text-base md:text-lg lg:text-xl text-white font-semibold leading-relaxed lg:max-w-[820px] mx-auto mb-4 sm:mb-8'>
                {slide?.subtitle}
              </p>

              <button
                onClick={(e) => scrollToSection(e, 'about')}
                className='bg-primary hover:bg-primary/95 text-white px-8 py-3 md:px-10 md:py-4 rounded-full font-medium text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl'
              >
                See More
              </button>
            </div>
          </div>
        </div>
      ))}

      {slides.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className='absolute left-0 top-1/2 -translate-y-1/2 text-white p-0 md:p-3 rounded-full transition-all duration-300 z-10'
            aria-label='Previous slide'
          >
            <RiArrowLeftSLine className='w-6 h-6 md:w-10 md:h-10' />
          </button>

          <button
            onClick={nextSlide}
            className='absolute right-0 top-1/2 -translate-y-1/2 text-white p-0 md:p-3 rounded-full transition-all duration-300 z-10'
            aria-label='Next slide'
          >
            <RiArrowRightSLine className='w-6 h-6 md:w-10 md:h-10' />
          </button>
        </>
      )}

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