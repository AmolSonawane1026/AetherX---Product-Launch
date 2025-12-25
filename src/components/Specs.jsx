"use client";

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const specData = [
    { label: "Refresh Rate", val: 240, suffix: "Hz" },
    { label: "Field of View", val: 180, suffix: "°" },
    { label: "Microprocessors", val: 4, suffix: "Cores" },
    { label: "Resolution", val: 12, suffix: "K" }
];

const Specs = () => {
    const containerRef = useRef(null);
    const numberRefs = useRef([]);
    const [displayValues, setDisplayValues] = useState([0, 0, 0, 0]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            numberRefs.current.forEach((el, i) => {
                if (!el) return;
                const finalVal = specData[i].val;

                gsap.fromTo({ val: 0 },
                    { val: finalVal },
                    {
                        duration: 2.5,
                        ease: "expo.out",
                        onUpdate: function () {
                            const currentVal = Math.round(this.targets()[0].val);
                            setDisplayValues(prev => {
                                const newVals = [...prev];
                                newVals[i] = currentVal;
                                return newVals;
                            });
                        },
                        scrollTrigger: {
                            trigger: el,
                            start: "top 90%",
                        }
                    }
                );
            });

            gsap.from(".spec-line", {
                scaleX: 0,
                transformOrigin: "left",
                duration: 1.5,
                ease: "power2.out",
                stagger: 0.2,
                scrollTrigger: {
                    trigger: ".spec-line",
                    start: "top 90%",
                }
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-32 px-6 bg-black">
            <div className="container mx-auto max-w-5xl">
                <div className="flex flex-col mb-24 text-center">
                    <span className="text-purple-400 font-mono text-xs uppercase tracking-[0.3em] mb-4">Specs</span>
                    <h2 className="text-5xl font-bold">Absolute Supremacy.</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
                    {specData.map((s, i) => (
                        <div key={i} className="flex flex-col relative group">
                            <div className="flex justify-between items-end mb-4">
                                <span className="text-white/40 font-bold uppercase tracking-widest text-xs">{s.label}</span>
                                <div className="flex items-baseline gap-1">
                                    <span
                                        ref={el => numberRefs.current[i] = el}
                                        className="text-6xl font-black"
                                    >{displayValues[i]}</span>
                                    <span className="text-xl font-bold text-blue-500">{s.suffix}</span>
                                </div>
                            </div>
                            <div className="spec-line h-[1px] w-full bg-white/10 group-hover:bg-blue-500/50 transition-colors" />
                        </div>
                    ))}
                </div>

                <div className="mt-32 p-12 glass rounded-[40px] text-center">
                    <p className="text-white/30 font-mono text-xs uppercase leading-relaxed max-w-2xl mx-auto">
                        "The Aether X represents a culmination of five years of research in photonic waveguides and non-invasive neural linkage. It is not just a headset; it is the final interface."
                    </p>
                    <div className="mt-8 text-[10px] font-bold tracking-[0.2em] text-white/20 uppercase">Dr. Elias Vance — Lead Architect</div>
                </div>
            </div>
        </section>
    );
};

export default Specs;
