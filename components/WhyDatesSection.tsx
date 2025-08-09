import React, { useRef, useEffect, useState } from 'react';

const VALID_IMAGE_DATA_URL = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QAiRXhpZgAASUkqAAgAAAABABIBAwABAAAAAQAAABoBBQABAAAAVgAAABsBBQABAAAAXgAAACgBAwABAAAAAgAAADEBAgANAAAAZgAAADIBAgAUAAAAjAAAABMCAwABAAAAAgAAAGmHBAABAAAApAAAAJoBAAABAAEAAACaAQADAAAAUDAxADsBAgADAAAAAQMAAADqAwADAAAAAwAAAAAAAAD/4AAQSkZJRgABAQAAAQABAAD/2gBDAAYEBAUEBAYFBQUGBgYHCQ4JCQgICRINDQoOFRIWFhUSFBQXGI4XGCAoGScgIigqOTEtLS8xOjo6Ojo6Ojo6Ojr/2gBDAQYGBgoJEQkJEREJGBEREBERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERH/wgARCAQABAADASIAAhEBAxEB/8QAHAABAQEAAwEBAQAAAAAAAAAAAAECAwQFBgcI/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAECAwQF/9oADAMBAAIQAxAAAAC9X89+y+U57eL5n2vk/dPmPT8/wDP9l+W7734D633n5R7H2Pz+e/0r82959L4n03vPjfFfZfE9Z7z43z313x3zfsPjPpvp/i/J/c/G4eU8b6nwf0n5l9L9d8n839p8V9V9v8p87+h/O/K/pfzfof0f5j6L7j4v5/674n5f7n4z5X7r4y3lPjfU/FfWfFfV/FfL/ZfFfH/Z/GfAfa/GfLfYfJ/HfYfH/AAH2vx/mvsfj/P/bfIfG/ZfF/MfYfJ/Jfa/H/OfZfJfEfY/JfRfY/FfS/WfD/S/YfB/T/afBfTfYfGfP/XfGfMfYfKfL/AGnyXy/2Xynyn2nyvyv1vy3zH2fyn0n1nyP0X2nyP0f1nyXzn1/yn0v1nyP031nx3zn2Hx30313xvzn1/wAb6z6z4n5z634r6z6r4j5f674f576/4T5r7D4T5j674P5v6z4L5z6z4H5v674D5n6z4D5r674H5n6z4P5r634H5v6z4P5r6z4H57634D5v634H5v6z4P5v6z4L5v6v4P5r6z4T5z6v4T5r6v4P5v6z4T5v6v4P5r6v4P5v6v4P5v6z4T5v6v4P5z6z4P5v6v4P5z6v4T5z6v4P5v6v4P5v6v4P5z6z4T5v6v4P5z6v4T5v6v4T5z6r4T5v6v4T5z6v4P5v6z4P5z6z4T5v6v4T5v6v4P5z6v4P5z6r4T5v6v4P5z6v4P5v6v4T5z6v4P5z6v4P5z6v4P5v6v4P5z6v4T5z6v4P5z6v4P5z6v4P5v6v4T5z6v4P5z6v4P5z6r4P5z6v4T5z6v4P5z6v4T5v6r4T5z6v4P5v6r4T5z6v4P5v6r4T5z6r4P5z6r4T5z6r4P5z6r4P5v6r4T5v6v4P5z6r4P5v6r4P5v6r4T5v6r4P5v6r4T5v6r4T5v6r4P5v6r4P5v6r4T5v6v4T5v6r4T5v6v4P5v6r4T5v6v4P5v6v4T5v6r4P5v6r4T5v6r4P5v6v4T5v6v4P5v6v4T5v6r4T5v6r4P5v6r4T5z6r4P5v6r4T5z6v4T5z6r4P5z6v4T5z6r4P5z6r4T5z6v4T5v6r4T5z6v4P5v6v4T5v6v4P5z6v4P5v6v4T5v6r4T5v6v4P5v6v4T5v6r4T5v6v4P5v6r4T5v6v4P5v6r4T5z6v4P5v6r4T5v6v4T5v6r4T5v6v4P5v6r4T5v6r4P5v6r4P5v6r4T5v6v4T5v6v4T5v6v4T5v6v4P5v6v4T5v6r4P5v6v4P5v6r4P5v6v4P5v6v4P5v6r4P5v6v4P5v6v4P5v6r4P5v6v4P5v6v4P5v6v4T5v6v4P5v6v4P5v6v4T5v6r4T5v6v4P5v6v4T5v6v4T5v6r4P5v6v4P5v6v4P5v6v4T5v6r4P5v6v4T5v6v4P5v6v4T5v6r4T5v6v4T5v6v4T5v6v4T5v6r4P5v6v4T5v6r4P5v6v4T5v6v4P5v6v4T5v6r4T5v6r4P5v6v4T5v6v4P5v6r4T5v6r4P5v6v4T5v6v4P5v6r4T5v6r4P5v6v4T5v6v4P5v6r4P5v6v4T5v6r4T5v6r4P5v6v4T5v6r4P5v6v4T5v6v4P5v6v4P5v6v4P5v6v4T5v6r4T5v6v4P5v6v4P5v6v4T5v6r4P5v6v4P5v6v4T5v6v4P5v6v4T5v6r4P5v6v4P5v6r4P5v6v4T5v6v4P5v6r4P5v6v4T5v6r4T5v6v4P5v6r4P5v6v4T5v6r4P5v6v4P5v6v4P5v6r4T5v6r4P5v6r4T5v6v4P5v6r4P5v6v4T5v6r4P5v6v4P5v6v4T5v6r4T5v6v4P5v6v4T5v6v4P5v6r4T5v6r4P5v6v4T5v6v4P5v6r4T5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6r4P5v6r4P5v6r4T5v6r4P5v6v4P5v6v4T5v6v4P5v6v4P5v6r4P5v6v4T5v6v4P5v6r4P5v6v4P5v6r4P5v6r4T5v6r4P5v6r4P5v6v4T5v6v4P5v6v4T5v6r4T5v6v4P5v6r4P5v6v4T5v6v4P5v6r4T5v6r4P5v6r4P5v6v4T5v6r4P5v6v4P5v6v4P5v6r4P5v6v4P5v6v4P5v6r4T5v6v4P5v6r4T5v6v4P5v6v4P5v6r4P5v6r4P5v6v4P5v6v4P5v6v4T5v6v4T5v6v4T5v6r4P5v6v4T5v6v4T5v6v4P5v6v4P5v6v4P5v6v4T5v6r4P5v6r4T5v6r4T5v6v4P5v6v4P5v6r4P5v6r4P5v6v4P5v6v4P5v6v4P5v6v4T5v6r4P5v6r4P5v6r4P5v6r4T5v6v4T5v6v4P5v6v4P5v6v4P5v6r4P5v6v4T5v6r4P5v6r4T5v6v4T5v6v4P5v6r4P5v6v4P5v6v4P5v6v4T5v6v4P5v6v4P5v6v4T5v6r4P5v6v4P5v6v4P5v6r4P5v6r4P5v6v4T5v6v4P5v6r4P5v6r4P5v6v4P5v6r4P5v6v4P5v6v4P5v6v4P5v6r4P5v6v4T5v6r4P5v6r4P5v6v4T5v6v4T5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4P5v6v4PgA==';

const panels = [
    {
        title: 'Lasts for Years. Powers you for hours.',
        description: 'Naturally preserved by low water content and high sugar concentration. A single date provides a dense caloric payload for immediate energy.'
    },
    {
        title: 'No refrigeration. No nonsense.',
        description: 'Engineered by nature for shelf stability. Perfect for your bug-out bag, vehicle, or long-term pantry storage without any special requirements.'
    },
    {
        title: 'Preservative-free. Packed with bioactive nutrients.',
        description: 'Free from industrial additives. What you get is a pure, unadulterated source of energy, fiber, and essential micronutrients, as nature intended.'
    }
];

const WhyDatesSection: React.FC = () => {
    const stickyContainerRef = useRef<HTMLDivElement>(null);
    const horizontalScrollRef = useRef<HTMLDivElement>(null);
    const [transformX, setTransformX] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const stickyEl = stickyContainerRef.current;
            if (!stickyEl) return;

            const parentElement = stickyEl.parentElement;
            if (!parentElement) return;

            const offsetTop = parentElement.offsetTop ?? 0;
            const scrollY = window.scrollY;
            const scrollFromTop = scrollY - offsetTop;
            const scrollableHeight = parentElement.scrollHeight - window.innerHeight;

            if (scrollFromTop >= 0 && scrollFromTop <= scrollableHeight) {
                const progress = scrollFromTop / scrollableHeight;
                const scrollWidth = horizontalScrollRef.current!.scrollWidth - window.innerWidth;
                setTransformX(-scrollWidth * progress);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial call
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="relative h-[300vh] bg-brand-charcoal">
            <div ref={stickyContainerRef} className="sticky top-0 h-screen w-full overflow-hidden">
                {/* Section background image only appears when sticky */}
                <img
                    src="/images/why-dates-bg.jpg"
                    alt="Dates background"
                    className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
                    style={{ minHeight: '100vh' }}
                />
                <div className="absolute inset-0 bg-overlay-60 z-10"></div>

                <div
                    ref={horizontalScrollRef}
                    className="relative z-20 h-full flex items-center"
                    style={{ transform: `translateX(${transformX}px)` }}
                >
                    <div className="flex">
                    {panels.map((panel, index) => (
                        <div key={index} className="w-screen flex-shrink-0 flex justify-center items-center px-12 md:px-24">
                            <div className="max-w-xl text-center md:text-left">
                                <h3 className="text-4xl md:text-5xl font-bold uppercase tracking-wide text-brand-offwhite">{panel.title}</h3>
                                <p className="mt-6 text-lg text-stone-300 font-mono">{panel.description}</p>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyDatesSection;
