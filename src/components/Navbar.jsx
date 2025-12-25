"use client";

import React from 'react';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full z-[100] px-8 py-6 flex justify-between items-center pointer-events-none">
            <div className="flex items-center gap-2 pointer-events-auto">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-black italic">A</span>
                </div>
                <span className="text-xl font-bold tracking-tighter uppercase">Aether X</span>
            </div>

            <div className="hidden md:flex gap-12 text-[10px] tracking-[0.2em] uppercase font-semibold text-white/50 pointer-events-auto">
                <a href="https://www.amolsonawane.pro/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Vision</a>
                <a href="https://www.amolsonawane.pro/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Technology</a>
                <a href="https://www.amolsonawane.pro/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Specs</a>
            </div>

            <a href="https://www.amolsonawane.pro/" target="_blank" rel="noopener noreferrer" className="glass px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest pointer-events-auto hover:bg-white/10 transition-all border border-white/10">
                Pre-Order
            </a>
        </nav>
    );
};

export default Navbar;
