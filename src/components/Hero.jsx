"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero = () => {
    const sectionRef = useRef(null);
    const productRef = useRef(null);
    const titleRef = useRef(null);
    const bgRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Initial Load Animation
            gsap.fromTo(productRef.current,
                { scale: 0.8, opacity: 0, rotationY: -45 },
                { scale: 1, opacity: 1, rotationY: 0, duration: 2, ease: "expo.out" }
            );

            // Mouse Move Parallax
            const handleMouseMove = (e) => {
                const { clientX, clientY } = e;
                const xPos = (clientX / window.innerWidth - 0.5) * 20;
                const yPos = (clientY / window.innerHeight - 0.5) * 20;

                gsap.to(productRef.current, {
                    x: xPos,
                    y: yPos,
                    rotationY: xPos * 0.5,
                    rotationX: -yPos * 0.5,
                    duration: 1,
                    ease: "power2.out"
                });

                gsap.to(bgRef.current, {
                    x: -xPos * 2,
                    y: -yPos * 2,
                    duration: 2,
                    ease: "power2.out"
                });
            };

            window.addEventListener('mousemove', handleMouseMove);

            // Scroll Animation - will automatically reverse when scrolling back
            gsap.fromTo(productRef.current,
                {
                    scale: 1,
                    y: 0,
                    opacity: 1,
                    filter: "blur(0px)"
                },
                {
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top top",
                        end: "bottom top",
                        scrub: 1,
                        invalidateOnRefresh: true,
                    },
                    scale: 2.5,
                    y: "20%",
                    opacity: 0.2,
                    filter: "blur(10px)"
                }
            );

            gsap.fromTo(titleRef.current,
                {
                    opacity: 0,
                    y: 0,
                },
                {
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "20% top",
                        end: "60% top",
                        scrub: 1,
                        invalidateOnRefresh: true,
                    },
                    opacity: 1,
                    y: -100,
                }
            );

            return () => {
                window.removeEventListener('mousemove', handleMouseMove);
            };
        });

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
            {/* Background Ambient Glow */}
            <div
                ref={bgRef}
                className="absolute inset-0 z-0 opacity-40 pointer-events-none"
                style={{
                    background: "radial-gradient(circle at center, rgba(88, 28, 135, 0.4) 0%, rgba(30, 64, 175, 0.1) 40%, rgba(5, 5, 5, 1) 70%)"
                }}
            />

            {/* Floating Particles/Dust (Simplified) */}
            <div className="absolute inset-0 z-10 pointer-events-none opacity-20">
                <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-blue-400 rounded-full animate-pulse" />
                <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse delay-700" />
                <div className="absolute bottom-1/4 left-1/2 w-0.5 h-0.5 bg-white rounded-full animate-pulse delay-500" />
            </div>

            {/* Main Product Render */}
            <div className="relative z-20 flex flex-col items-center justify-center">
                <img
                    ref={productRef}
                    src="https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&q=80&w=1200"
                    alt="Aether X Headset"
                    className="w-[500px] h-auto drop-shadow-[0_0_80px_rgba(59,130,246,0.5)] rounded-2xl grayscale brightness-110 contrast-125"
                    style={{ transformStyle: 'preserve-3d' }}
                />

                {/* Scroll Reveal Headline */}
                <div ref={titleRef} className="absolute top-full mt-24 text-center opacity-0 pointer-events-none">
                    <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-none">
                        Enter the<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Future</span>
                    </h1>
                    <p className="mt-8 text-white/40 uppercase tracking-[0.5em] text-sm">Scroll to initiate neural link</p>
                </div>
            </div>

            {/* Hero UI Elements */}
            <div className="absolute bottom-12 left-12 z-30 flex flex-col gap-2 font-mono text-[10px] text-blue-400/60 uppercase">
                <span>Model: AX-2025</span>
                <span>Status: Synced</span>
                <span>Latency: 0.12ms</span>
            </div>
            <div className="absolute bottom-12 right-12 z-30 flex flex-col gap-2 items-end font-mono text-[10px] text-purple-400/60 uppercase text-right">
                <span>Coordinate System: Active</span>
                <span>X: 12.42 | Y: 88.10 | Z: 0.04</span>
            </div>
        </section>
    );
};

export default Hero;
