'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export const Explorer: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Create stars
            const stars = Array.from({ length: 50 }).map(() => {
                const div = document.createElement('div');
                div.className = 'absolute bg-white rounded-full opacity-0';
                const size = Math.random() * 2 + 1;
                div.style.width = `${size}px`;
                div.style.height = `${size}px`;
                div.style.left = `${Math.random() * 100}%`;
                div.style.top = `${Math.random() * 100}%`;
                containerRef.current?.appendChild(div);
                return div;
            });

            // Animate stars
            stars.forEach((star) => {
                gsap.to(star, {
                    opacity: Math.random() * 0.7 + 0.1,
                    duration: Math.random() * 2 + 1,
                    repeat: -1,
                    yoyo: true,
                    delay: Math.random() * 2
                });

                gsap.to(star, {
                    y: -100, // Float up
                    duration: Math.random() * 10 + 10,
                    repeat: -1,
                    ease: 'none',
                    delay: Math.random() * 5
                });
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="h-[60vh] flex items-center justify-center bg-[#0B0D10] relative overflow-hidden">
            <div className="text-center z-10 px-4">
                <p className="text-2xl md:text-3xl font-light text-gray-300 leading-relaxed max-w-2xl">
                    Outside of work, I'm curious about space, enjoy photography, and sketch ideas before I code them.
                </p>
            </div>

            {/* Dynamic Starfield Container */}
            <div className="absolute inset-0 pointer-events-none"></div>
        </section>
    );
};
