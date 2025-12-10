import React from 'react'
import HeroSection from '../components/heroSection'
import Company from '../components/cards/company'
import Feature from '../components/Feature'
import Services from '../components/Services'
import ExplorProject from '../components/ExplorProject'
import OurProducts from '../components/ourProducts'


function Page() {
  return (
    <div className="min-h-screen bg-linear-to-br from-black to-gray-900 top-0 left-0 right-0 w-full">
      <HeroSection />
      <Company />
      <Feature />
      <ExplorProject />
      <Services />
      <OurProducts />
    </div>
  );
}

export default Page