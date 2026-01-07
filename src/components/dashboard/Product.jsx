import { urlFor } from '@/lib/sanity'
import Link from 'next/link'
import React from 'react'
import { formatRupiah } from '../../../utils/helpers/formatRupiah'

const Product = ({ productData }) => {
    console.log(productData)
    return (
        <section className='py-12 md:py-16 lg:py-20 bg-tertiary'>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-primary mb-10">FEATURED PRODUCTS</h2>
            <div className='container mx-auto grid grid-cols-2 lg:grid-cols-3 gap-10'>
                {productData.map((product, index) => (
                    <div key={product?.title + index} className='flex flex-col items-center w-full justify-between'>
                        <div className='flex flex-col items-center h-full'>
                            <div className='aspect-square overflow-hidden relative w-full'>
                                <img
                                    src={urlFor(product?.image)}
                                    alt={`Product ${index + 1}`}
                                    className='w-full h-full object-cover object-center'
                                />
                            </div>
                            <h2 className="h-full flex-1 text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold mt-10 text-center text-primary">{product?.name}</h2>
                            <p className="text-secondary text-sm sm:text-base lg:text-base xl:text-lg 2xl:text-xl leading-relaxed mt-4 text-center">{product?.description}</p>
                            <div className='text-center text-lg sm:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl'>
                                {formatRupiah(product?.price)}
                            </div>
                        </div>
                        <Link href={product?.shopeeLink} className='mt-4 bg-primary hover:bg-primary/95 transition-colors rounded-full px-8 py-2 lg:py-2.5 text-white font-bold text-lg sm:text-xl lg:text-xl xl:text-2xl inline-block shadow-md hover:shadow-lg'>
                            Buy Now
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Product