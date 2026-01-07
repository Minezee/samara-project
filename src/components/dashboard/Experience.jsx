import { urlFor } from '@/lib/sanity'
import Link from 'next/link'
import React from 'react'

const Experience = ({ experienceData }) => {
    return (
        <section className='container mx-auto py-12 md:py-16 lg:py-20 grid grid-cols-2 lg:grid-cols-3 gap-10'>
            {experienceData.sort((a, b) => a.order - b.order).map((experience, index) => (
                <div key={experience?.title + index} className='flex flex-col items-center w-full justify-between'>
                    <div className='flex flex-col items-center h-full'>
                        <div className='aspect-square overflow-hidden relative w-full'>
                            <img
                                src={urlFor(experience?.image)}
                                alt={`Experience ${index + 1}`}
                                className='w-full h-full object-cover object-center'
                            />
                        </div>
                        <h2 className=" text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold mt-10 text-center text-primary">{experience?.title}</h2>
                        <p className="text-secondary text-sm sm:text-base lg:text-base xl:text-lg 2xl:text-xl leading-relaxed mt-4 text-center">{experience?.description}</p>
                    </div>
                    <Link href={experience?.ctaLink} className='mt-4 bg-primary hover:bg-primary/95 transition-colors rounded-full px-8 py-2 lg:py-2.5 text-white font-bold text-lg sm:text-xl lg:text-xl xl:text-2xl inline-block shadow-md hover:shadow-lg'>
                        {experience?.ctaText}
                    </Link>
                </div>
            ))}
        </section>
    )
}

export default Experience