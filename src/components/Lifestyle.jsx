"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Lifestyle = () => {
    const imgRef = useRef(null);

    useEffect(() => {
        gsap.to(imgRef.current, {
            scrollTrigger: {
                trigger: imgRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
            },
            y: "-20%",
            ease: "none"
        });
    }, []);

    return (
        <section className="relative h-[120vh] w-full flex items-center justify-center overflow-hidden bg-black">
            <div
                ref={imgRef}
                className="absolute top-0 left-0 w-full h-[140%] bg-cover bg-center grayscale brightness-50"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1200')"
                }}
            />

            <div className="relative z-10 text-center container mx-auto px-6">
                <span className="block text-blue-400 font-mono text-xs uppercase tracking-[0.4em] mb-6">Lifestyle</span>
                <h2 className="text-6xl md:text-8xl font-black italic uppercase leading-none mb-10">
                    Be Anywhere.<br />
                    Stay <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Present.</span>
                </h2>
                <a href="https://www.amolsonawane.pro/" target="_blank" rel="noopener noreferrer" className="glass px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest border border-white/10 hover:bg-white/10 transition-all inline-block">
                    Experience Reality 2.0
                </a>
            </div>
        </section>
    );
};

export default Lifestyle;
