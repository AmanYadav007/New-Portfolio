'use client';

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skills = [
    { name: 'React', desc: 'Production SaaS & Dashboards' },
    { name: 'APIs', desc: 'REST & GraphQL Integration' },
    { name: 'Enterprise', desc: 'Compliance & Reliability' },
    { name: 'AI', desc: 'Conversational Agents & LLMs' },
];

export const Skills: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Floating animation for cards (parallax effect)
            cardsRef.current.forEach((card, i) => {
                if (card) {
                    gsap.to(card, {
                        y: 'random(-20, 20)',
                        x: 'random(-10, 10)',
                        rotation: 'random(-2, 2)',
                        duration: 'random(3, 5)',
                        repeat: -1,
                        yoyo: true,
                        ease: 'sine.inOut',
                        delay: i * 0.5
                    });

                    // Mouse movement parallax (optional, keeping it simple first)
                    // Could add event listener to containerRef for mousemove
                }
            });

            // ScrollTrigger for section entry
            gsap.from(cardsRef.current, {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                },
                y: 100,
                opacity: 0,
                stagger: 0.2,
                duration: 1,
                ease: 'back.out(1.7)'
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="min-h-screen flex flex-col items-center justify-center bg-[#0B0D10] py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent opacity-50 pointer-events-none"></div>

            <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center text-white/90">
                The Engineer.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-5xl mx-auto px-6 relative z-10">
                {skills.map((skill, i) => (
                    <div
                        key={skill.name}
                        ref={(el) => {
                            if (el) cardsRef.current[i] = el;
                        }}
                        className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:bg-white/10 cursor-default"
                    >
                        <h3 className="text-3xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                            {skill.name}
                        </h3>
                        <p className="text-lg text-gray-400 group-hover:text-gray-200 transition-colors">
                            {skill.desc}
                        </p>

                        {/* Hover Glow Effect */}
                        <div className="absolute inset-0 rounded-2xl bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none blur-xl"></div>
                    </div>
                ))}
            </div>
        </section>
    );
};
