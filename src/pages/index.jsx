import React from 'react'
import { client, urlFor } from '@/lib/sanity'
import Image from 'next/image'
import Hero from '@/components/dashboard/Hero'
import AboutUs from '@/components/dashboard/AboutUs'
import Experience from '@/components/dashboard/Experience'
import Product from '@/components/dashboard/Product'
import Location from '@/components/dashboard/Location'
import { getMapEmbedUrl } from '../../utils/helpers/getMapUrl'
import Difference from '@/components/dashboard/Difference'
import HeadSeo from '@/components/HeadSeo'

const LandingPage = ({ data }) => {
  const { heroData, aboutUs, experience, product, location, difference } = data;
  const images = urlFor(heroData[0]?.image);

  if (!data) {
    return <div>Loading...</div>
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Samara Chocolate",
    "alternateName": ["Samara", "Samara Chocolate"],
    "url": "https://samarachocolate.com",
    "image": [
      String(images)
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": location?.address || "Your Street Address",
      "addressLocality": "Daerah Istimewa Yogyakarta",
      "addressRegion": "Central Java",
      "postalCode": "55511",
      "addressCountry": "ID"
    },
    "telephone": location?.phone || "+62-xxx-xxxx-xxxx",
    "priceRange": "$$-$$$",
    "servesCuisine": "Chocolate, Confectionery",
    "openingHours": "Mo-Su 09:00-18:00",
    "sameAs": [
      "https://www.instagram.com/samarachocolate.id",
      "https://www.tiktok.com/@samarachocolate.id"
    ]
  }

  return (
    <>
      <HeadSeo
        title="Home | Samara"
        siteName="Samara Chocolate"
        description={"Premium artisan chocolate crafted from finest Indonesian cacao. Experience luxury chocolate collections, boutique experiences, and the art of chocolate making."}
        image={String(images)}
        structuredData={structuredData}
      />
      <Hero heroData={heroData} />
      <AboutUs aboutUsData={aboutUs} />
      <Experience experienceData={experience} />
      <Product productData={product} />
      <Location locationData={location} />
      <Difference differenceData={difference} />
    </>
  )
}

export default LandingPage

export async function getStaticProps() {
  const heroData = await client.fetch(`*[_type == "hero"]`)
  const aboutUs = await client.fetch(`*[_type == "aboutUs"][0]`)
  const experienceData = await client.fetch(`*[_type == "experience"]`)
  const productData = await client.fetch(`*[_type == "product"]`)
  const productSectionData = await client.fetch(`*[_type == "productSection"][0]`)
  const locationData = await client.fetch(`*[_type == "visitUs"][0]`)
  const differenceData = await client.fetch(`*[_type == "difference"][0]`)
  const footerData = await client.fetch(`*[_type == "footer"][0]`)

  console.log(heroData)

  let embedUrl = null
  if (locationData?.mapUrl) {
    embedUrl = await getMapEmbedUrl(locationData.mapUrl)
  }

  const data = {
    heroData: heroData,
    aboutUs: aboutUs,
    experience: experienceData,
    product: {
      ...productSectionData,
      data: productData
    },
    location: {
      ...locationData,
      embedUrl: embedUrl
    },
    difference: differenceData,
    footer: footerData
  }

  return {
    props: {
      data
    },
    revalidate: 60,
  }
}