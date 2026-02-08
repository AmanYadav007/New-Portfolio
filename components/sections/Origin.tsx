'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Origin: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const panels = gsap.utils.toArray('.origin-panel');

            panels.forEach((panel: any, i) => {
                gsap.from(panel, {
                    y: 100,
                    opacity: 0,
                    rotation: Math.random() * 4 - 2, // Slight random rotation for "hand-placed" feel
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: panel,
                        start: 'top 80%',
                        end: 'top 50%',
                        scrub: 1,
                        toggleActions: 'play none none reverse'
                    }
                });
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-24 bg-[#F8F7F4] relative">
            <div className="container">
                <div className="mb-16 text-center">
                    <span className="bg-black text-white px-4 py-1 font-bold uppercase tracking-widest text-sm inline-block -rotate-2">
                        Chapter 01: The Philosophy
                    </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {/* Panel 1 */}
                    <div className="origin-panel comic-panel min-h-[400px] flex flex-col justify-between relative transform -rotate-1">
                        <div className="text-6xl font-bold text-gray-200 absolute top-4 right-4 z-0">01</div>
                        <div className="relative z-10 mt-auto">
                            <div className="bg-white p-4 border-2 border-black inline-block shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-4">
                                <p className="font-comic font-bold text-lg">Thinking...</p>
                            </div>
                            <h3 className="text-4xl font-bold leading-tight uppercase">
                                I don't start with <span className="text-accent underline decoration-4 underline-offset-4">code</span>.
                            </h3>
                        </div>
                        {/* Decorative dots */}
                        <div className="absolute top-0 left-0 w-full h-24 opacity-10 bg-[radial-gradient(circle,_#000_2px,_transparent_2px)] bg-[length:16px_16px]"></div>
                    </div>

                    {/* Panel 2 (Replaced with "Thinking" Layer) */}
                    <div className="origin-panel comic-panel min-h-[400px] flex flex-col justify-between relative transform rotate-1 mt-12 md:mt-24">
                        <div className="text-6xl font-bold text-gray-200 absolute top-4 right-4 z-0">02</div>
                        <div className="relative z-10 mt-auto space-y-4">
                            <div className="bg-black text-white p-4 border-2 border-black inline-block shadow-[4px_4px_0px_0px_#7C3AED] mb-4">
                                <span className="font-comic font-bold text-lg !text-white">The Method</span>
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-3xl font-bold uppercase">I observe.</h3>
                                <h3 className="text-3xl font-bold uppercase">I question.</h3>
                                <h3 className="text-3xl font-bold uppercase">I <span className="bg-accent text-white px-2">empathize</span>.</h3>
                            </div>
                        </div>
                    </div>

                    {/* Panel 3 */}
                    <div className="origin-panel comic-panel min-h-[400px] flex flex-col justify-center relative transform -rotate-1 mt-0 md:mt-12 bg-black text-white">
                        <div className="text-6xl font-bold text-gray-800 absolute top-4 right-4 z-0">03</div>
                        <div className="relative z-10 space-y-6">
                            <p className="text-2xl font-bold border-l-4 border-accent pl-4">
                                Messy Requirements.
                            </p>
                            <p className="text-2xl font-bold border-l-4 border-white pl-4">
                                Real Users.
                            </p>
                            <p className="text-2xl font-bold border-l-4 border-accent pl-4">
                                Real Constraints.
                            </p>
                        </div>
                        <div className="absolute bottom-4 right-4 font-comic text-sm text-gray-400">
                // Chaos Control
                        </div>
                    </div>
                </div>

                {/* Caption Box */}
                <div className="mt-16 max-w-2xl mx-auto bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center relative">
                    <p className="font-comic text-xl font-bold">
                        Developer · Photographer · Video Maker · Psychology Enthusiast
                    </p>
                    <div className="absolute -bottom-6 right-12 w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] border-t-black border-r-[0px] border-r-transparent"></div>
                    <div className="absolute -bottom-[20px] right-[50px] w-0 h-0 border-l-[16px] border-l-transparent border-t-[16px] border-t-white border-r-[0px] border-r-transparent"></div>
                </div>
            </div>
        </section>
    );
};
