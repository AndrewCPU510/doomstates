
import React, { useRef } from 'react';
import HeroSection from './components/HeroSection';
import ScienceSection from './components/ScienceSection';
import WhyDatesSection from './components/WhyDatesSection';
import ImmersiveSection from './components/ImmersiveSection';
import OrderSection from './components/OrderSection';
import Footer from './components/Footer';

function App() {
  const orderSectionRef = useRef<HTMLDivElement>(null);

  const handleScrollToOrder = () => {
    orderSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="w-full">
      <HeroSection onOrderNowClick={handleScrollToOrder} />
      <ScienceSection />
      <WhyDatesSection />
      <ImmersiveSection />
      <OrderSection ref={orderSectionRef} />
      <Footer />
    </main>
  );
}

export default App;
