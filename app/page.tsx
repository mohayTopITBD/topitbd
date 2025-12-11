import React from "react";
import HeroSection from "../components/sections/heroSection";
import Company from "../components/cards/company";
import Feature from "../components/sections/Feature";
import Services from "../components/sections/Services";
import ExplorProject from "../components/sections/ExplorProject";
import OurProducts from "../components/sections/ourProducts";
import WorkCulture from "../components/sections/workCulture";
import DifferenceSection from "../components/sections/DifferenceSection";
import Pricing from "../components/sections/Pricing";
import SuccessStories from "../components/sections/SuccessStory";
import Exparts from "../components/sections/Exparts";

function Page() {
  return (
    <div className="min-h-screen bg-linear-to-br from-black to-gray-900 top-0 left-0 right-0 w-full">
      <HeroSection />
      <Company />
      <Feature />
      <ExplorProject />
      <Services />
      <OurProducts />
      <WorkCulture />
      <Pricing />
      <DifferenceSection/>
      <SuccessStories />
      <Exparts />
    </div>
  );
}

export default Page;
