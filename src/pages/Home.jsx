import React from 'react';
import Navbar from '../components/Navbar';
import AboutSection from '../components/AboutSection';
import TeamImageSection from '../components/TeamImageSection';
import AudienceHighlightSection from '../components/AudienceHighlightSection';
import WhyRonoFeatureSection from '../components/WhyRonoFeatureSection';
import OurVisionSection from '../components/OurVisionSection';
import visionImage from '../Assets/Images/Rectangle 13 (3).png';
import Ready from '../components/Ready';
import Footer from '../components/Footer';
import BuiltForSection from '../components/BuiltForSection';

const Home = () => {
  return (
    <>
      <Navbar />
      <AboutSection
        title="About Rono Hub"
        description="A growing digital brand building purpose-driven tools for modern businesses and individuals. Each product is designed to solve a specific problem whether it’s managing learning, simplifying transportation workflows, or connecting people to opportunities. creating focused solutions that are simple, reliable, and built for real-world use."
        subDescription="Under Rono, every product stands strong on its own — yet carries the same ideology of clarity, usability, and trust."
      />
      <TeamImageSection
        alt="Team collaboration image"
        borderRadius={32}
        height={532}
        maxWidth={1440}
      />
      <AudienceHighlightSection />
      {/* <BuiltForSection /> */}
      <WhyRonoFeatureSection />
      <OurVisionSection 
        imageSrc={visionImage}
      />
      <Ready />
      <Footer />
    </>
  );
};

export default Home;
