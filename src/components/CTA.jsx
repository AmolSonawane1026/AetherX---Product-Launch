"use client";

import React from 'react';

const CTA = () => {
    return (
        <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-[#050505]">
            {/* Background radial gradient */}
            <div className="absolute w-[1000px] h-[1000px] bg-blue-600/5 rounded-full blur-[150px]" />

            <div className="relative z-10 text-center container mx-auto px-6">
                <h2 className="text-6xl md:text-9xl font-black italic uppercase tracking-tighter mb-12 animate-pulse">
                    The Future Is<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500">Ready.</span>
                </h2>

                <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                    <a href="https://www.amolsonawane.pro/" target="_blank" rel="noopener noreferrer" className="group relative px-12 py-6 bg-white text-black font-black uppercase tracking-[0.2em] text-sm overflow-hidden hover:scale-105 transition-transform inline-block">
                        <span className="relative z-10">Pre-Order Now</span>
                        {/* Hover light sweep */}
                        <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[25deg] group-hover:left-[150%] transition-all duration-700 ease-in-out" />
                    </a>

                    <a href="https://www.amolsonawane.pro/" target="_blank" rel="noopener noreferrer" className="px-12 py-6 glass text-white font-black uppercase tracking-[0.2em] text-sm hover:bg-white/10 transition-all inline-block">
                        Watch Technical Keynote
                    </a>
                </div>

                <p className="mt-16 text-white/20 text-[10px] uppercase tracking-[0.5em]">Starting at $3,499. Ships Fall 2025.</p>
            </div>

            <footer className="absolute bottom-10 left-0 w-full px-12 flex justify-between items-center text-[10px] text-white/20 uppercase font-bold tracking-widest">
                <div>&copy; Created By <a href="https://www.amolsonawane.pro/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Amol Sonawane</a></div>
                <div className="flex gap-8">
                    {/* <a href="#" className="hover:text-white transition-colors">Twitter</a> */}
                    <a href="https://www.instagram.com/amol_sonawane10/?igsh=MTlvNGFiZGk3dzI5NA%3D%3D#" target="_blank" className="hover:text-white transition-colors">Instagram</a>
                    <a href="https://api.whatsapp.com/send/?phone=917558379918&text&type=phone_number&app_absent=0" target="_blank" className="hover:text-white transition-colors">Whatsapp</a>
                </div>
            </footer>
        </section>
    );
};

export default CTA;
