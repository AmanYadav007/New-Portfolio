'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Mindset: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const lines = gsap.utils.toArray('.mindset-line');

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: '+=300%', // Pin for 3 screens worth of scroll
                    pin: true,
                    scrub: 1,
                    anticipatePin: 1
                }
            });

            // Animate lines sequentially
            lines.forEach((line, i) => {
                // Fade in and slide up current line
                tl.to(line as HTMLElement, {
                    opacity: 1,
                    y: 0,
                    filter: 'blur(0px)',
                    duration: 1,
                    ease: 'power2.out'
                });

                // If not the last line, fade it out to make room for next
                if (i < lines.length - 1) {
                    tl.to(line as HTMLElement, {
                        opacity: 0.2,
                        filter: 'blur(4px)',
                        duration: 1,
                        ease: 'power2.in',
                        delay: 0.5 // Pause a bit before fading out
                    });
                }
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="h-screen flex items-center justify-center bg-[#0B0D10] relative">
            <div ref={textRef} className="max-w-4xl px-6 text-center will-change-transform">
                {[
                    "I don't start with code.",
                    "I start with the problem.",
                    "Messy requirements. Ambiguous goals.",
                    "Real users. Real constraints.",
                    "In the last 5 years, I've solved problems as:",
                    "• an employee\n• a founder\n• a builder\n• a collaborator"
                ].map((text, i) => (
                    <h2
                        key={i}
                        className="mindset-line absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-4xl md:text-6xl font-bold leading-tight opacity-0 blur-sm translate-y-12"
                    >
                        {text.split('\n').map((line, j) => (
                            <span key={j} className="block">{line}</span>
                        ))}
                    </h2>
                ))}
            </div>
        </section>
    );
};
