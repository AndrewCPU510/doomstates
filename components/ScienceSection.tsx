import React, { useRef } from 'react';
import { useScrollObserver } from '../hooks/useScrollObserver';

const VALID_IMAGE_DATA_URL = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QAiRXhpZgAASUkqAAgAAAABABIBAwABAAAAAQAAABoBBQABAAAAVgAAABsBBQABAAAAXgAAACgBAwABAAAAAgAAADEBAgANAAAAZgAAADIBAgAUAAAAjAAAABMCAwABAAAAAgAAAGmHBAABAAAApAAAAJoBAAABAAEAAACaAQADAAAAUDAxADsBAgADAAAAAQMAAADqAwADAAAAAwAAAAAAAAD/4AAQSkZJRgABAQAAAQABAAD/2gBDAAYEBAUEBAYFBQUGBgYHCQ4JCQgICRINDQoOFRIWFhUSFBQXGI4XGCAoGScgIigqOTEtLS8xOjo6Ojo6Ojo6Ojr/2gBDAQYGBgoJEQkJEREJGBEREBERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERH/wgARCAQABAADASIAAhEBAxEB/8QAHAABAQEAAwEBAQAAAAAAAAAAAAECAwQFBgcI/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAECAwQF/9oADAMBAAIQAxAAAAC9X89+y+U57eL5n2vk/dPmPT8/wDP9l+W7734D633n5R7H2Pz+e/0r82959L4n03vPjfFfZfE9Z7z43z313x3zfsPjPpvp/i/J/c/G4eU8b6nwf0n5l9L9d8n839p8V9V9v8p87+h/O/K/pfzfof0f5j6L7j4v5/674n5f7n4z5X7r4y3lPjfU/FfWfFfV/FfL/ZfFfH/Z/GfAfa/GfLfYfJ/HfYfH/AAH2vx/mvsfj/P/bfIfG/ZfF/MfYfJ/Jfa/H/OfZfJfEfY/JfRfY/FfS/WfD/S/YfB/T/afBfTfYfGfP/XfGfMfYfKfL/AGnyXy/2Xynyn2nyvyv1vy3zH2fyn0n1nyP0X2nyP0f1nyXzn1/yn0v1nyP031nx3zn2Hx30313xvzn1/wAb6z6z4n5z634r6z6r4j5f674f576/4T5r7D4T5j674P5v6z4L5z6z4H5v674D5n6z4D5r674H5n6z4P5r634H5v6z4P5r6z4H57634D5v634H5v6z4P5v6z4L5v6v4P5r6z4T5z6v4T5r6v4P5v6z4T5v6v4P5r6v4P5v6v4P5v6z4T5v6v4P5z6z4P5v6v4P5z6v4T5z6v4P5v6v4P5v6v4P5z6z4T5v6v4P5z6v4T5v6v4T5z6r4T5v6v4T5z6v4P5v6z4P5z6z4T5v6v4T5v6v4P5z6v4P5z6r4T5v6v4P5z6v4P5v6v4T5z6v4P5z6v4P5z6v4P5v6v4P5z6v4T5z6v4P5z6v4T5v6v4T5v6v4T5v6v4T5z6v4P5z6v4P5z6v4P5v6v4T5z6v4P5z6v4T5z6r4P5z6v4T5z6v4P5z6v4T5v6r4T5z6v4P5v6r4T5z6v4P5v6r4T5z6r4P5z6r4T5z6r4P5z6r4P5v6r4T5v6v4P5z6r4P5v6r4P5v6r4T5v6r4P5v6r4T5v6r4T5v6r4P5v6r4P5v6r4T5v6v4T5v6r4T5v6v4P5v6r4T5v6v4P5v6v4T5v6r4P5v6r4T5v6r4P5v6v4T5v6v4P5v6v4T5v6r4T5v6r4P5v6r4T5z6r4P5v6r4T5z6v4T5z6r4P5z6v4T5z6r4P5z6r4T5z6r4P5z6v4T5v6r4T5z6v4P5v6v4T5v6v4P5z6v4P5v6v4T5v6r4T5v6v4P5v6v4T5v6r4T5v6v4P5v6r4T5v6v4P5v6r4T5z6v4P5v6r4T5v6v4T5v6r4T5v6v4P5v6r4T5v6r4P5v6r4P5v6r4T5v6v4P5v6r4P5v6v4T5v6v4T5v6v4T5v6v4T5v6v4T5v6v4T5v6v4P5v6r4P5v6v4P5v6r4P5v6v4P5v6v4P5v6v4P5v6r4P5v6v4P5v6r4P5v6v4P5v6v4T5v6v4T5v6v4P5v6v4P5v6v4T5v6r4P5v6v4T5v6v4P5v6v4T5v6r4T5v6v4T5v6v4P5v6v4T5v6r4P5v6v4T5v6r4P5v6v4T5v6v4P5v6v4T5v6v4P5v6v4T5v6r4T5v6r4P5v6v4T5v6v4P5v6r4T5v6r4P5v6v4T5v6v4P5v6r4P5v6v4P5v6r4P5v6v4T5v6r4T5v6r4P5v6v4T5v6r4P5v6v4T5v6r4T5v6v4T5v6r4P5v6v4P5v6v4P5v6v4P5v6v4T5v6r4P5v6v4P5v6v4T5v6v4T5v6v4P5v6r4P5v6v4P5v6r4P5v6v4T5v6r4P5v6v4T5v6v4T5v6r4P5v6v4T5v6v4P5v6v4P5v6r4T5v6v4P5v6v4T5v6v4P5v6r4P5v6v4T5v6v4P5v6r4P5v6v4T5v6r4P5v6v4P5v6v4P5v6v4T5v6r4P5v6v4T5v6r4T5v6v4P5v6r4T5v6v4P5v6r4P5v6r4P5v6v4T5v6r4P5v6v4P5v6v4T5v6v4P5v6v4P5v6v4P5v6v4P5v6r4P5v6v4P5v6v4P5v6v4T5v6v4P5v6r4T5v6v4T5v6v4P5v6v4P5v6v4T5v6v4P5v6r4P5v6r4P5v6v4P5v6v4T5v6r4P5v6r4P5v6v4P5v6v4T5v6v4P5v6v4P5v6v4T5v6v4T5v6v4P5v6r4P5v6r4P5v6v4T5v6v4P5v6r4T5v6r4P5v6v4T5v6v4P5v6r4P5v6v4P5v6r4P5v6v4T5v6r4T5v6v4P5v6r4T5v6r4T5v6r4T5v6v4P5v6r4T5v6v4P5v6v4P5v6v4P5v6r4P5v6v4T5v6v4P5v6r4T5v6v4P5v6v4P5v6v4T5v6r4T5v6r4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4T5v6v4T5v6r4P5v6r4P5v6r4P5v6v4T5v6v4P5v6r4P5v6v4P5v6v4P5v6v4T5v6v4T5v6v4P5v6v4P5v6v4P5v6v4P5v6r4P5v6r4P5v6r4P5v6v4T5v6v4P5v6v4T5v6v4P5v6v4P5v6v4T5v6r4P5v6r4P5v6r4P5v6v4T5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4T5v6v4T5v6r4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4T5v6v4P5v6v4T5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P_gA==';

interface AnimatedItemProps {
  children: React.ReactNode;
  delay?: string;
}

const AnimatedItem: React.FC<AnimatedItemProps> = ({ children, delay = '0ms' }) => {
    const itemRef = useRef<HTMLDivElement>(null);
    const { isInView } = useScrollObserver(itemRef);

    return (
        <div ref={itemRef} className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: delay}}>
            {children}
        </div>
    )
}

const ScienceSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { progress } = useScrollObserver(sectionRef);
  
  const backgroundY = -progress * 200;

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-40 bg-brand-charcoal text-brand-offwhite overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
             <img
                src={VALID_IMAGE_DATA_URL}
                alt="A grove of date palms representing natural science"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ transform: `translateY(${backgroundY}px)` }}
            />
        </div>
         <div className="absolute inset-0 bg-overlay-75 z-10"></div>


      <div className="container mx-auto px-6 relative z-20">
        <div className="text-center mb-16">
            <AnimatedItem>
                <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-wider">The Science of Survival</h2>
                <p className="mt-4 text-lg font-mono text-stone-400 max-w-3xl mx-auto">Calibrated by nature for peak metabolic performance and long-term viability.</p>
            </AnimatedItem>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          <AnimatedItem delay="100ms">
            <div className="border border-stone-700 p-6 text-center h-full bg-brand-charcoal/50">
              <h3 className="text-2xl font-bold font-mono">C₆H₁₂O₆</h3>
              <p className="mt-3 text-stone-400">A dual-carbohydrate system for rapid and sustained metabolic energy release, preventing energy spikes and crashes.</p>
            </div>
          </AnimatedItem>

          <AnimatedItem delay="200ms">
            <div className="border border-stone-700 p-6 text-center h-full bg-brand-charcoal/50">
              <h3 className="text-2xl font-bold font-mono">Potassium (K⁺)</h3>
              <p className="mt-3 text-stone-400">Essential electrolyte for regulating cardiovascular function, nerve signals, and muscle contraction under stress.</p>
            </div>
          </AnimatedItem>

          <AnimatedItem delay="300ms">
            <div className="border border-stone-700 p-6 text-center h-full bg-brand-charcoal/50">
              <h3 className="text-2xl font-bold font-mono">Dietary Fiber</h3>
              <p className="mt-3 text-stone-400">Soluble and insoluble fibers support digestive regularity and gut microbiome health, critical for long-term survival.</p>
            </div>
          </AnimatedItem>

          <AnimatedItem delay="400ms">
            <div className="border border-stone-700 p-6 text-center h-full bg-brand-charcoal/50">
              <h3 className="text-2xl font-bold font-mono">Polyphenols</h3>
              <p className="mt-3 text-stone-400">Potent antioxidants that combat oxidative stress and cellular damage caused by environmental and physical duress.</p>
            </div>
          </AnimatedItem>
        </div>
      </div>
    </section>
  );
};

export default ScienceSection;
