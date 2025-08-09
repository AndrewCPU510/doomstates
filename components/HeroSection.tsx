import React from 'react';
import { ArrowDownIcon } from './Icons';

interface HeroSectionProps {
  onOrderNowClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onOrderNowClick }) => {
  return (
    <section className="h-screen relative flex items-center justify-center text-center text-brand-offwhite overflow-hidden">
      {/* Background Layers */}
      <img
        src="/images/hero-bg.jpg"
        alt="Workers harvesting dates in a sunny field."
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 bg-overlay-50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 px-4 flex flex-col items-center">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold uppercase tracking-widest">
          DoomsDates
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl font-mono">
          Fuel for the end times. Engineered for endurance.
        </p>
        <button
          onClick={onOrderNowClick}
          className="mt-8 px-8 py-3 bg-transparent border-2 border-brand-offwhite text-brand-offwhite font-bold uppercase tracking-wider hover:bg-brand-offwhite hover:text-brand-charcoal transition-colors duration-300"
        >
          Order Now
        </button>
      </div>
      <div className="absolute z-20 bottom-10 animate-bounce">
        <ArrowDownIcon className="w-8 h-8 text-brand-offwhite/50" />
      </div>
    </section>
  );
};

export default HeroSection;