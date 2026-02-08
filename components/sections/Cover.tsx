'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FaArrowDown, FaFileDownload } from 'react-icons/fa';
import Image from 'next/image';

export const Cover: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const issueRef = useRef<HTMLDivElement>(null);
    const barCodeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

            // 1. Issue Badge drops in
            tl.from(issueRef.current, {
                y: -100,
                opacity: 0,
                duration: 0.8,
                ease: 'bounce.out'
            });

            // 2. Main Title slides in from left
            tl.from(titleRef.current, {
                x: -100,
                opacity: 0,
                duration: 1,
                stagger: 0.2
            }, '-=0.4');

            // 3. Subtitles & Details fade up
            tl.from('.cover-detail', {
                y: 20,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1
            }, '-=0.6');

            // 4. Barcode scans in (width expansion)
            tl.from(barCodeRef.current, {
                scaleX: 0,
                opacity: 0,
                duration: 0.8,
                ease: 'power2.inOut'
            }, '-=0.4');

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="min-h-screen flex flex-col justify-between pt-32 pb-12 relative overflow-hidden border-b-4 border-black bg-[#F8F7F4]"
        >
            {/* Background Texture (Dot Pattern) */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(#111 1px, transparent 1px)',
                    backgroundSize: '24px 24px'
                }}
            ></div>

            <div className="container relative z-10 flex-grow flex flex-col justify-center">
                {/* Top Badge */}
                <div ref={issueRef} className="absolute top-0 right-6 md:right-24 rotate-12">
                    <div className="bg-[#FFD700] border-4 border-black p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform hover:scale-105 transition-transform duration-300">
                        <p className="font-comic font-bold text-xl uppercase tracking-widest text-black">
                            Issue #01
                        </p>
                        <p className="text-xs font-bold text-center mt-1">First Edition</p>
                    </div>
                </div>

                {/* Main Title */}
                <div className="mb-12">
                    <h2 className="cover-detail font-comic text-xl md:text-2xl mb-4 font-bold text-gray-500 uppercase tracking-widest">
                        The Origin Story of
                    </h2>
                    <h1 ref={titleRef} className="text-ink leading-[0.85] uppercase">
                        <span className="block text-[12vw] md:text-[8rem] tracking-tighter">Aman</span>
                        <span className="block text-[12vw] md:text-[8rem] tracking-tighter text-outline-black text-transparent" style={{ WebkitTextStroke: '3px black' }}>Yadav</span>
                    </h1>
                </div>

                {/* Role Description */}
                <div className="max-w-2xl border-l-4 border-black pl-8 ml-2 md:ml-4 cover-detail">
                    <p className="text-xl md:text-3xl font-bold leading-tight mb-4">
                        Problem-solving software engineer building scalable web products.
                    </p>
                    <div className="flex gap-4 text-sm font-bold uppercase tracking-wider font-mono">
                        <span>Founder</span>
                        <span>•</span>
                        <span>Builder</span>
                        <span>•</span>
                        <span>Team Player</span>
                    </div>
                </div>
            </div>

            {/* Footer / Barcode Area */}
            <div className="container relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end md:items-center border-t-4 border-black pt-8">
                    <div className="flex flex-col gap-2 mb-8 md:mb-0 cover-detail">
                        <span className="font-bold text-xs uppercase tracking-widest text-gray-400">Rate Card</span>
                        <span className="font-comic text-xl font-bold text-gray-500">Pricing: $70–100 / hour</span>
                    </div>

                    <div className="flex items-center gap-4 md:gap-8">
                        {/* Author Photo */}
                        <div className="hidden md:block w-32 h-40 border-4 border-black transform rotate-2 relative shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white overflow-hidden">
                            <Image
                                src="/images/projects/profile.png"
                                alt="Aman Yadav"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                        </div>

                        {/* Resume CTA */}
                        <a
                            href="https://drive.google.com/uc?export=download&id=1TR1KA1m70waAu6Bb4yBqWAphHXyhRApJ"
                            className="cover-detail flex items-center gap-2 font-bold uppercase text-sm cursor-pointer hover:bg-black hover:text-white px-4 py-2 transition-colors border-2 border-black rounded-lg whitespace-nowrap"
                        >
                            <FaFileDownload /> Resume
                        </a>

                        {/* CTA */}
                        <div className="animate-bounce cover-detail">
                            <span className="flex items-center gap-2 font-bold uppercase text-sm cursor-pointer hover:bg-black hover:text-white px-4 py-2 transition-colors border-2 border-transparent hover:border-black rounded-lg">
                                Start Reading <FaArrowDown />
                            </span>
                        </div>

                        {/* Decorative Barcode */}
                        <div ref={barCodeRef} className="flex flex-col items-center opacity-80">
                            <div className="h-12 w-48 bg-black"
                                style={{
                                    maskImage: 'repeating-linear-gradient(90deg, black, black 2px, transparent 2px, transparent 4px)'
                                }}
                            ></div>
                            <span className="text-[10px] font-mono mt-1 tracking-[0.5em]">02-08-2026</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
