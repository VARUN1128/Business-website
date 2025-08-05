// src/pages/Home.jsx
import React from 'react';

// Import the new section components
import HeroSection from '../components/home/HeroSection';
import FeaturesSection from '../components/home/FeaturesSection';
import ApproachSection from '../components/home/ApproachSection';
import TestimonialSection from '../components/home/TestimonialSection';
import ContactMapSection from '../components/home/ContactMapSection';

// Placeholder variables remain here to be passed as props
const placeholderImg = "https://via.placeholder.com/350x250?text=Image";
const avatarImg = "https://via.placeholder.com/40?text=👤";
const webflowLogo = "https://via.placeholder.com/60x20?text=Webflow";

export default function Home() {
  return (
    <div>
      <HeroSection placeholderImg={placeholderImg} />
      <FeaturesSection placeholderImg={placeholderImg} />
      <ApproachSection />
      <TestimonialSection />
      <ContactMapSection />
    </div>
  );
}
