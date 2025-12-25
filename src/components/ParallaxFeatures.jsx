"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const features = [
    { title: "Neural Sync", desc: "0.1ms latency direct connection", color: "from-blue-500" },
    { title: "Quantum Optics", desc: "8K per eye micro-LED clarity", color: "from-cyan-400" },
    { title: "Haptic Sound", desc: "Bone conduction spatial audio", color: "from-purple-500" },
    { title: "Infinite Core", desc: "18-hour surgical precision battery", color: "from-blue-600" }
];

const ParallaxFeatures = () => {
    const sectionRef = useRef(null);
    const cardRefs = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            cardRefs.current.forEach((card, i) => {
                if (!card) return;

                gsap.fromTo(card,
                    { y: 150, opacity: 0, scale: 0.9 },
                    {
                        y: 0,
                        opacity: 1,
                        scale: 1,
                        duration: 1.5,
                        ease: "expo.out",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 85%",
                            toggleActions: "play none none reverse",
                        }
                    }
                );

                // Individual floating animation
                gsap.to(card, {
                    y: "-=15",
                    duration: 2 + i,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut"
                });
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-32 px-6 bg-black relative overflow-hidden">
            <div className="container mx-auto">
                <div className="flex flex-col mb-20">
                    <span className="text-blue-400 font-mono text-xs uppercase tracking-[0.3em] mb-4">Architecture</span>
                    <h2 className="text-5xl font-bold">Unrivaled Power.</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((f, i) => (
                        <div
                            key={i}
                            ref={el => cardRefs.current[i] = el}
                            className="glass p-8 rounded-3xl group hover:border-white/20 transition-colors"
                        >
                            <div className={`w-12 h-1 bg-gradient-to-r ${f.color} to-transparent mb-8`} />
                            <h3 className="text-2xl font-bold mb-4">{f.title}</h3>
                            <p className="text-white/40 text-sm leading-relaxed">{f.desc}</p>

                            <div className="mt-12 flex items-center gap-2 text-[10px] font-bold text-white/20 uppercase tracking-widest group-hover:text-blue-400 transition-colors">
                                <span>View Details</span>
                                <div className="w-4 h-[1px] bg-white/10 group-hover:bg-blue-400" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ParallaxFeatures;
