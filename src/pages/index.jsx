import React from 'react'
import { client, urlFor } from '@/lib/sanity'
import Image from 'next/image'
import Hero from '@/components/dashboard/Hero'
import AboutUs from '@/components/dashboard/AboutUs'
import Experience from '@/components/dashboard/Experience'
import Product from '@/components/dashboard/Product'
import Location from '@/components/dashboard/Location'

const LandingPage = ({ data }) => {
  const { heroData, aboutUs, experience, product } = data;

  if (!data) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Hero heroData={heroData} />
      <AboutUs aboutUsData={aboutUs} />
      <Experience experienceData={experience} />
      <Product productData={product} />
      <Location />
    </>
  )
}

export default LandingPage


export async function getStaticProps() {

  const heroData = await client.fetch(`*[_type == "hero"][0]`)
  const aboutUs = await client.fetch(`*[_type == "aboutUs"][0]`)
  const experienceData = await client.fetch(`*[_type == "experience"]`)
  const productData = await client.fetch(`*[_type == "product"]`)

  const data = {
    heroData: heroData,
    aboutUs: aboutUs,
    experience: experienceData,
    product: productData
  }

  return {
    props: {
      data
    },
    revalidate: 60,
  }
}