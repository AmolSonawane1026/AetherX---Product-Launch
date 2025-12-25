"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ScrollStory from '../components/ScrollStory';
import ParallaxFeatures from '../components/ParallaxFeatures';
import ProductZoom from '../components/ProductZoom';
import Lifestyle from '../components/Lifestyle';
import Specs from '../components/Specs';
import CTA from '../components/CTA';

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
    const scrollContainerRef = useRef(null);

    useEffect(() => {
        // Refresh ScrollTrigger on mount
        ScrollTrigger.refresh();

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <div ref={scrollContainerRef} className="relative bg-[#050505] overflow-x-hidden">
            <Navbar />
            <Hero />
            <ScrollStory />
            <ParallaxFeatures />
            <ProductZoom />
            <Lifestyle />
            <Specs />
            <CTA />

            {/* Scroll Progress Indicator */}
            <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4 pointer-events-none">
                {[0, 1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-1 h-1 bg-white/20 rounded-full" />
                ))}
            </div>
        </div>
    );
}
