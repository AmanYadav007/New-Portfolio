'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export const Hero: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const nameRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Name fade in letter by letter (simulated with just text block for now to keep it simple, 
            // or split text if we added a library, but standard fade/slide works great too)
            gsap.from(nameRef.current, {
                opacity: 0,
                y: 100,
                duration: 1.5,
                ease: 'power4.out',
                delay: 0.2
            });

            // Subtitle slide up
            gsap.from(subtitleRef.current, {
                opacity: 0,
                y: 50,
                duration: 1.5,
                ease: 'power3.out',
                delay: 0.8
            });

            // Scroll indicator fade in
            gsap.from(scrollRef.current, {
                opacity: 0,
                duration: 1,
                delay: 2,
                ease: 'power2.out'
            });

            // Background gradient shift (subtle)
            gsap.to(containerRef.current, {
                backgroundPosition: '100% 100%',
                duration: 20,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut'
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="h-screen flex flex-col items-center justify-center relative overflow-hidden"
            style={{
                background: 'radial-gradient(circle at 50% 50%, #1a1a2e 0%, #0B0D10 100%)',
                backgroundSize: '200% 200%',
                willChange: 'background-position'
            }}
        >
            {/* Noise Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

            <div className="text-center z-10 px-4">
                <h1 ref={nameRef} className="text-7xl md:text-9xl mb-6 tracking-tighter mix-blend-overlay text-white">
                    AMAN YADAV
                </h1>

                <div ref={subtitleRef} className="overflow-hidden">
                    <p className="text-xl md:text-3xl font-light text-gray-400 tracking-wide mb-2">
                        Problem-solving software engineer
                    </p>
                    <p className="text-sm md:text-base text-gray-500 uppercase tracking-widest">
                        Founder · Product Builder · Team Player
                    </p>
                </div>
            </div>

            <div
                ref={scrollRef}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
            >
                <span className="text-xs uppercase tracking-widest text-gray-500">Scroll to explore</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent"></div>
            </div>
        </section>
    );
};
