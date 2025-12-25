"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ScrollStory = () => {
    const containerRef = useRef(null);
    const textRefs = useRef([]);

    const messages = [
        { text: "Beyond Physical Reality", sub: "Experience a seamless blend of neural interaction and visual fidelity." },
        { text: "Intuitive Perception", sub: "Your thoughts drive the interface. No controllers. No lag." },
        { text: "Infinite Horizon", sub: "Spatial computing redesigned for the human consciousness." }
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: `+=${messages.length * 150}%`,
                    pin: true,
                    scrub: 1,
                    anticipatePin: 1,
                }
            });

            messages.forEach((_, i) => {
                // Fade in
                tl.fromTo(textRefs.current[i],
                    { opacity: 0, y: 50, filter: "blur(10px)" },
                    {
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                        duration: 1,
                        ease: "power2.out"
                    }
                );

                // Hold (optional, gives more scroll time to read)
                tl.to({}, { duration: 0.5 });

                // Fade out (except last one)
                if (i < messages.length - 1) {
                    tl.to(textRefs.current[i], {
                        opacity: 0,
                        y: -50,
                        filter: "blur(10px)",
                        duration: 1,
                        ease: "power2.in"
                    });
                }
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="relative h-screen bg-[#050505] flex items-center justify-center overflow-hidden">
            {/* Dynamic BG Shape */}
            <div className="absolute w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] -left-1/4" />
            <div className="absolute w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] -right-1/4 top-1/4" />

            <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
                {messages.map((m, i) => (
                    <div
                        key={i}
                        ref={el => textRefs.current[i] = el}
                        className="absolute inset-0 flex flex-col items-center justify-center opacity-0"
                    >
                        <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                            {m.text}
                        </h2>
                        <p className="text-lg md:text-xl text-white/50 max-w-xl leading-relaxed">
                            {m.sub}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ScrollStory;
