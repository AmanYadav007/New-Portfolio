'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Builder: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const splashRef = useRef<HTMLDivElement>(null);

    const [speedLines, setSpeedLines] = useState<Array<{ top: string, left: string, transform: string }>>([]);

    useEffect(() => {
        setSpeedLines(Array.from({ length: 20 }).map(() => ({
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 20 - 10}%`,
            transform: `rotate(${Math.random() * 10 - 5}deg)`
        })));

        const ctx = gsap.context(() => {
            // 1. Text Reveal ("Sometimes...")
            gsap.from('.builder-text', {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 60%',
                },
                y: 50,
                opacity: 0,
                stagger: 0.2,
                duration: 0.8,
                ease: 'power4.out'
            });

            // 2. Splash Panel Reveal (BonusLyf) using clip-path for "Snap" effect
            gsap.from(splashRef.current, {
                scrollTrigger: {
                    trigger: splashRef.current,
                    start: 'top 70%',
                },
                clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
                duration: 1,
                ease: 'expo.inOut'
            });

            // 3. Speed Lines Animation
            gsap.to('.speed-line', {
                x: 'random(-50, 50)',
                opacity: 'random(0.3, 0.8)',
                duration: 0.1,
                repeat: -1,
                yoyo: true
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-24 bg-[#F8F7F4] overflow-hidden">
            <div className="container mb-16 relative z-10">
                <h2 className="builder-text text-4xl md:text-6xl font-bold uppercase leading-tight">
                    Sometimes, <br />
                    I don't wait for <span className="text-accent underline decoration-wavy decoration-2">permission</span>.
                </h2>
                <h2 className="builder-text text-5xl md:text-7xl font-bold uppercase leading-tight mt-4 ml-8 md:ml-24">
                    I <span className="bg-black text-white px-4">Build.</span>
                </h2>
            </div>

            {/* Splash Panel */}
            <div
                ref={splashRef}
                className="w-full relative min-h-[80vh] border-y-4 border-black bg-black text-white flex items-center justify-center clip-path-polygon-[0_0,100%_0,100%_100%,0_100%]"
            >
                {/* Speed Lines Background */}
                <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
                    {speedLines.map((style, i) => (
                        <div
                            key={i}
                            className="speed-line absolute bg-white h-[2px]"
                            style={{
                                width: '100%',
                                ...style
                            }}
                        ></div>
                    ))}
                </div>

                <div className="container relative z-10 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        {/* Visual / Title */}
                        <div>
                            <a href="https://www.bonuslyf.com/" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#FFD700] text-black px-4 py-1 font-bold uppercase text-sm mb-4 border-2 border-white transform -rotate-2 hover:scale-105 transition-transform">
                                Founder Mode ↗
                            </a>
                            <a href="https://www.bonuslyf.com/" target="_blank" rel="noopener noreferrer" className="block group">
                                <h1 className="text-6xl md:text-8xl font-bold uppercase tracking-tighter mb-4 text-white group-hover:text-gray-200 transition-colors">
                                    Bonus<span className="text-outline-white text-transparent group-hover:text-outline-gray-200" style={{ WebkitTextStroke: '2px white' }}>Lyf</span>
                                </h1>
                            </a>
                            <p className="font-comic text-xl !text-white max-w-md">
                                An AI-powered emotional support platform that listens without judgment.
                            </p>
                        </div>

                        {/* Sub-Panels */}
                        <div className="space-y-6">
                            <div className="bg-white text-black p-6 border-4 border-black transform rotate-1 shadow-[4px_4px_0px_0px_#7C3AED]">
                                <h4 className="font-bold uppercase text-sm tracking-widest text-accent mb-1">The Problem</h4>
                                <p className="font-bold text-lg leading-tight">Emotional support is inaccessible to many due to cost and stigma.</p>
                            </div>

                            <div className="bg-white text-black border-4 border-black p-6 transform -rotate-1 shadow-[4px_4px_0px_0px_white]">
                                <h4 className="font-bold uppercase text-sm tracking-widest text-gray-500 mb-1">The Solution</h4>
                                <p className="font-comic text-lg text-gray-800">
                                    A private, always-available AI companion. Built with Next.js & OpenAI.
                                </p>
                            </div>

                            <div className="text-right">
                                <span className="font-comic text-sm uppercase tracking-widest text-gray-300">
                                    Status: Shipped 🚀
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
