"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const ProductZoom = () => {
    const containerRef = useRef(null);
    const imageRef = useRef(null);
    const infoRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "+=200%",
                    pin: true,
                    scrub: 1,
                }
            });

            tl.to(imageRef.current, {
                scale: 4,
                x: "30%",
                y: "20%",
                duration: 1,
            })
                .to(infoRef.current, {
                    opacity: 1,
                    y: -30,
                    duration: 0.5,
                });
        });

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="relative h-screen bg-[#050505] overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
                <img
                    ref={imageRef}
                    src="https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&q=80&w=1200"
                    alt="Macro detail"
                    className="w-full h-full object-cover opacity-60 grayscale scale-110"
                />
            </div>

            {/* Overlay Vignette */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />

            <div ref={infoRef} className="absolute bottom-20 left-20 z-10 max-w-md opacity-0">
                <h2 className="text-4xl font-bold mb-4 italic">Precision Machined</h2>
                <p className="text-white/50 leading-relaxed text-sm">
                    Every curve, every sensor, every photon-emitter is crafted with aerospace-grade tolerances to ensure a perfect interface between human and machine.
                </p>
            </div>

            <div className="absolute top-20 right-20 z-10 text-right pointer-events-none">
                <span className="block text-[8px] font-mono text-white/20 uppercase tracking-[0.5em] mb-2">Internal View</span>
                <div className="w-32 h-[1px] bg-white/10 ml-auto" />
            </div>
        </div>
    );
};

export default ProductZoom;
