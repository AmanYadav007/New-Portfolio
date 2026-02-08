'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaCamera, FaGamepad, FaCoffee, FaUserAstronaut } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

export const Human: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const panelsRef = useRef<HTMLDivElement[]>([]);

    // Stats State
    const [caffeine, setCaffeine] = useState(0);
    const [debug, setDebug] = useState(0);
    const [creativity, setCreativity] = useState(0);

    // Easter Egg State
    const [mergedText, setMergedText] = useState("Merge Conflicts");

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Panel Entrance Animations
            panelsRef.current.forEach((panel, i) => {
                gsap.from(panel, {
                    scrollTrigger: {
                        trigger: panel,
                        start: 'top 85%',
                    },
                    y: 100,
                    opacity: 0,
                    rotation: Math.random() * 4 - 2, // Subtle tilt
                    duration: 0.8,
                    delay: i * 0.1,
                    ease: 'back.out(1.7)'
                });
            });

            // Stats Counter Animation
            ScrollTrigger.create({
                trigger: "#stats-panel",
                start: "top 75%",
                once: true,
                onEnter: () => {
                    // Animate Numbers
                    const targets = { c: 0, d: 0, cr: 0 };
                    gsap.to(targets, {
                        c: 98,
                        d: 100,
                        cr: 88,
                        duration: 2.5,
                        ease: "power2.out",
                        onUpdate: () => {
                            setCaffeine(Math.round(targets.c));
                            setDebug(Math.round(targets.d));
                            setCreativity(Math.round(targets.cr));
                        }
                    });

                    // Animate Bars
                    gsap.fromTo(".stat-bar-fill",
                        { width: "0%" },
                        {
                            width: (i, el) => el.getAttribute("data-target") || "0%",
                            duration: 1.5,
                            ease: "elastic.out(1, 0.5)",
                            stagger: 0.2
                        }
                    );
                }
            });

        }, containerRef);
        return () => ctx.revert();
    }, []);

    const addToRefs = (el: HTMLDivElement) => {
        if (el && !panelsRef.current.includes(el)) {
            panelsRef.current.push(el);
        }
    };

    const handleEasterEgg = () => {
        if (mergedText === "Merge Conflicts") {
            const el = document.getElementById('egg-shake');
            if (el) {
                gsap.to(el, { keyframes: { x: [-5, 5, -5, 5, 0] }, duration: 0.4, ease: "power1.inOut" });
            }
            setMergedText("Resolved. Eventually.");
        }
    };

    return (
        <section ref={containerRef} className="py-24 md:py-32 bg-[#F8F7F4] relative border-b-4 border-black overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-5 pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(#111 2px, transparent 2px)',
                    backgroundSize: '32px 32px'
                }}
            ></div>

            <div className="container relative z-10">
                <div className="mb-16 text-center">
                    <span className="bg-accent text-white px-4 py-1 font-bold uppercase tracking-widest text-sm inline-block rotate-2 shadow-[4px_4px_0px_0px_#000]">
                        Behind The Scenes
                    </span>
                    <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter mt-4">
                        The Human
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    {/* Panel 1: Character Stats (Left) */}
                    <div
                        id="stats-panel"
                        ref={addToRefs}
                        className="md:col-span-5 comic-panel relative bg-white transform -rotate-1 hover:rotate-0 transition-transform duration-300"
                    >
                        <div className="border-b-4 border-black pb-4 mb-6 flex justify-between items-center">
                            <h3 className="text-2xl font-bold uppercase">Character Stats</h3>
                            <span className="font-mono text-xs bg-black text-white px-2 py-1 animate-pulse">LVL. 25</span>
                        </div>

                        <div className="space-y-6 font-mono font-bold">
                            {/* Caffeine */}
                            <div className="group cursor-help relative">
                                <div className="flex justify-between mb-1">
                                    <span>Caffeine</span>
                                    <span>{caffeine}%</span>
                                </div>
                                <div className="h-4 bg-gray-200 border-2 border-black overflow-hidden">
                                    <div className="stat-bar-fill h-full bg-accent" data-target="98%"></div>
                                </div>
                                {/* Hover Tooltip */}
                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20">
                                    Critical dependency. Do not remove.
                                </div>
                            </div>

                            {/* Debug Skill */}
                            <div className="group cursor-help relative">
                                <div className="flex justify-between mb-1">
                                    <span>Debug Skill</span>
                                    <span>{debug === 100 ? 'MAX' : `${debug}%`}</span>
                                </div>
                                <div className="h-4 bg-gray-200 border-2 border-black overflow-hidden">
                                    <div className="stat-bar-fill h-full bg-black" data-target="100%"></div>
                                </div>
                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20">
                                    Years of production bugs.
                                </div>
                            </div>

                            {/* Creativity */}
                            <div className="group cursor-help relative">
                                <div className="flex justify-between mb-1">
                                    <span>Creativity</span>
                                    <span>{creativity}%</span>
                                </div>
                                <div className="h-4 bg-gray-200 border-2 border-black overflow-hidden">
                                    <div className="stat-bar-fill h-full bg-yellow-400" data-target="88%"></div>
                                </div>
                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20">
                                    Fuelled by curiosity & side quests.
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 pt-6 border-t-2 border-dashed border-gray-300">
                            <p className="font-comic text-sm leading-7">
                                <strong>Class:</strong> Full Stack Mage<br />
                                <strong>Weapon:</strong> VS Code & Caffeine<br />
                                <strong>Weakness:</strong> <span
                                    id="egg-shake"
                                    onClick={handleEasterEgg}
                                    className="cursor-pointer text-red-600 font-bold hover:underline"
                                    title="Click to resolve"
                                >
                                    {mergedText}
                                </span>
                            </p>
                        </div>
                    </div>

                    {/* Panel 2: The Philosophy (Right Top) */}
                    <div ref={addToRefs} className="md:col-span-7 comic-panel bg-black text-white relative transform rotate-1 shadow-[8px_8px_0px_0px_#7C3AED] hover:scale-[1.01] transition-transform duration-300">
                        <div className="absolute -top-3 -left-3 bg-white text-black border-2 border-black px-3 py-1 font-bold uppercase text-xs shadow-[2px_2px_0px_0px_#ccc]">
                            Core Belief
                        </div>
                        <div className="h-full flex flex-col items-center justify-center p-6 md:p-8">
                            <p className="font-comic text-2xl md:text-3xl leading-relaxed text-center mb-4">
                                "I believe good software starts with <span className="text-accent italic">empathy</span> and ends with <span className="text-white underline decoration-wavy decoration-2 underline-offset-4">clarity</span>."
                            </p>
                            <p className="font-mono text-xs text-gray-400 uppercase tracking-widest text-center border-t border-gray-800 pt-4 mt-2">
                                This is how I build products, lead decisions, and write code.
                            </p>
                        </div>
                    </div>

                    {/* Panel 3: Side Hobbies (Right Bottom) */}
                    <div ref={addToRefs} className="md:col-span-7 md:col-start-6 comic-panel bg-yellow-300 relative transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                        <h3 className="text-xl font-bold uppercase mb-4 border-b-2 border-black inline-block">Off-Duty Activities</h3>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-2">
                            {/* Photo */}
                            <div className="group relative cursor-pointer md:hover:-translate-y-2 transition-transform duration-300 p-2">
                                <div className="flex flex-col items-center gap-2 relative z-10">
                                    <div className="w-12 h-12 bg-white border-2 border-black flex items-center justify-center rounded-full shadow-[2px_2px_0px_0px_#000] group-hover:bg-black group-hover:text-white transition-colors">
                                        <FaCamera className="text-xl" />
                                    </div>
                                    <span className="font-comic font-bold text-sm">Photo</span>
                                </div>
                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-32 bg-black text-white text-[10px] p-2 text-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded border-2 border-white shadow-lg">
                                    Composition teaches balance in UI.
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-xp-[6px] border-x-transparent border-t-[6px] border-t-black"></div>
                                </div>
                            </div>

                            {/* Gaming */}
                            <div className="group relative cursor-pointer md:hover:-translate-y-2 transition-transform duration-300 p-2">
                                <div className="flex flex-col items-center gap-2 relative z-10">
                                    <div className="w-12 h-12 bg-white border-2 border-black flex items-center justify-center rounded-full shadow-[2px_2px_0px_0px_#000] group-hover:bg-black group-hover:text-white transition-colors">
                                        <FaGamepad className="text-xl" />
                                    </div>
                                    <span className="font-comic font-bold text-sm">Gaming</span>
                                </div>
                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-32 bg-black text-white text-[10px] p-2 text-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded border-2 border-white shadow-lg">
                                    Systems thinking & feedback loops.
                                </div>
                            </div>

                            {/* Brewing */}
                            <div className="group relative cursor-pointer md:hover:-translate-y-2 transition-transform duration-300 p-2">
                                <div className="flex flex-col items-center gap-2 relative z-10">
                                    <div className="w-12 h-12 bg-white border-2 border-black flex items-center justify-center rounded-full shadow-[2px_2px_0px_0px_#000] group-hover:bg-black group-hover:text-white transition-colors">
                                        <FaCoffee className="text-xl" />
                                    </div>
                                    <span className="font-comic font-bold text-sm">Brewing</span>
                                </div>
                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-32 bg-black text-white text-[10px] p-2 text-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded border-2 border-white shadow-lg">
                                    Patience, precision, iteration.
                                </div>
                            </div>

                            {/* Alien Research */}
                            <div className="group relative cursor-pointer md:hover:-translate-y-2 transition-transform duration-300 p-2">
                                <div className="flex flex-col items-center gap-2 relative z-10">
                                    <div className="w-12 h-12 bg-white border-2 border-black flex items-center justify-center rounded-full shadow-[2px_2px_0px_0px_#000] group-hover:bg-black group-hover:text-white transition-colors">
                                        <FaUserAstronaut className="text-xl" />
                                    </div>
                                    <span className="font-comic font-bold text-sm text-center leading-tight">Alien<br />Research</span>
                                </div>
                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-32 bg-black text-white text-[10px] p-2 text-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded border-2 border-white shadow-lg">
                                    The truth is out there.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
