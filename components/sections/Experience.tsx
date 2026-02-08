'use client';

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
    {
        company: 'Accenture',
        role: 'Web Developer',
        focus: 'Enterprise · Reliability',
        desc: 'Supported regulated workflows including Veeva Vault (MLR document management). Built HTML5 creatives and CMS publishing pipelines.'
    },
    {
        company: 'Spotter Labs',
        role: 'Full Stack Engineer',
        focus: 'SaaS · Scale',
        desc: 'Built scalable React applications, real-time dashboards, and interactive maps. Integrated GraphQL and payment flows.'
    },
    {
        company: 'BLIS',
        role: 'JavaScript Support Engineer II',
        focus: 'AdTech · Data',
        desc: 'Developed AdTech solutions and campaign management tools. Built efficient data processing pipelines.'
    },
];

export const Experience: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Horizontal Scroll Animation
            const cards = gsap.utils.toArray('.exp-card');

            gsap.to(cards, {
                xPercent: -100 * (cards.length - 1),
                ease: 'none',
                scrollTrigger: {
                    trigger: containerRef.current,
                    pin: true,
                    scrub: 1,
                    snap: 1 / (cards.length - 1),
                    end: () => `+=${containerRef.current?.offsetWidth || window.innerWidth}`
                }
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="h-screen bg-[#0B0D10] overflow-hidden flex flex-col justify-center relative">
            <div className="absolute top-20 left-10 md:left-20 max-w-xl z-20 pointer-events-none">
                <h2 className="text-4xl md:text-6xl font-bold mb-4 opacity-20">The Team Player.</h2>
                <p className="text-gray-400">Reliability. Scale. Collaboration.</p>
            </div>

            <div ref={scrollContainerRef} className="flex items-center px-10 md:px-20 gap-10 md:gap-20 w-max">
                {experiences.map((exp, i) => (
                    <div
                        key={i}
                        className="exp-card w-[85vw] md:w-[600px] h-[60vh] bg-[#12141a] border border-white/5 rounded-3xl p-8 md:p-12 flex flex-col justify-center shrink-0 hover:border-blue-500/30 transition-colors"
                    >
                        <span className="text-blue-400 font-mono text-sm mb-4">{exp.focus}</span>
                        <h3 className="text-4xl md:text-5xl font-bold mb-2">{exp.company}</h3>
                        <p className="text-xl text-gray-500 mb-8">{exp.role}</p>
                        <p className="text-lg text-gray-400 leading-relaxed border-l-2 border-white/10 pl-6">
                            {exp.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};
