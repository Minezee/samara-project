import { urlFor } from '@/lib/sanity'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AboutUs = ({ aboutUsData }) => {
    return (
        <section className='container mx-auto py-12 md:py-16 lg:py-20'>
            <div className='flex flex-col lg:flex-row gap-6 lg:gap-8 xl:gap-12 items-center'>
                <div className='w-full lg:w-1/2 lg:flex-1'>
                    <div className='relative w-full aspect-[887/556] overflow-hidden'>
                        <img
                            src={urlFor(aboutUsData?.image)}
                            alt="About Us"
                            className='w-full h-full object-cover'
                        />
                    </div>
                </div>

                <div className="w-full lg:w-1/2 lg:flex-1 text-center flex flex-col justify-center px-4 lg:px-0">
                    <h2 className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold mb-4 lg:mb-6 text-primary leading-tight">
                        {aboutUsData?.title}
                    </h2>
                    <p className="text-secondary text-sm sm:text-base lg:text-base xl:text-lg 2xl:text-xl leading-relaxed mb-6 lg:mb-8">
                        {aboutUsData?.subtitle}
                    </p>
                    <div className='flex items-center justify-center'>
                        <Link
                            target='_blank'
                            className='bg-primary hover:bg-primary/95 transition-colors rounded-full px-8 py-2 lg:py-2.5 text-white font-bold text-lg sm:text-xl lg:text-xl xl:text-2xl inline-block shadow-md hover:shadow-lg'
                            href={aboutUsData?.ctaLink || "/"}
                        >
                            {aboutUsData?.ctaText}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs