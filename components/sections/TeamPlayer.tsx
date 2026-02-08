'use client';

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
    {
        company: 'Spotter',
        role: 'Full Stack Engineer',
        environment: 'SaaS · Scale',
        highlight: 'Real-time Dashboards',
        desc: 'Built scalable React applications with interactive maps. Integrated GraphQL and Stripe payment flows.',
        color: '#663399' // Accent
    },
    {
        company: 'Accenture',
        role: 'Web Developer',
        environment: 'Enterprise · Regulated',
        highlight: 'Veeva Vault (MLR workflows)',
        desc: 'Supported regulated workflows. Built HTML5 creatives and CMS publishing pipelines for pharma clients.',
        color: '#111'
    },
    {
        company: 'BLIS',
        role: 'JavaScript Support Engineer II',
        environment: 'AdTech · Data',
        highlight: 'RTB Pipelines',
        desc: 'Developed AdTech solutions and campaign management tools. Optimized data processing pipelines.',
        color: '#111'
    },
];

export const TeamPlayer: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const container = containerRef.current;
            const section = sectionRef.current;

            if (!container || !section) return;

            const totalScroll = container.scrollWidth - window.innerWidth;

            gsap.to(container, {
                x: () => -totalScroll,
                ease: 'none',
                scrollTrigger: {
                    trigger: section,
                    pin: true,
                    scrub: 1,
                    end: () => `+=${totalScroll * 1.2}`, // Adjust speed
                    invalidateOnRefresh: true,
                },
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="h-screen bg-[#F8F7F4] overflow-hidden flex flex-col justify-center relative border-t-4 border-black border-b-4">
            {/* Background Strip Pattern */}
            <div
                className="absolute inset-0 opacity-5 pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(90deg, #000 1px, transparent 1px)',
                    backgroundSize: '100px 100%'
                }}
            ></div>

            <div className="absolute top-12 left-12 md:left-24 z-20">
                <h2 className="text-4xl font-bold uppercase tracking-tighter bg-white border-2 border-black p-2 inline-block shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    The Team Player
                </h2>
            </div>

            <div ref={containerRef} className="flex px-12 md:px-24 gap-12 w-max items-center h-full">
                {/* Intro Frame */}
                <div className="w-[300px] md:w-[400px] h-[60vh] flex items-center justify-center">
                    <p className="font-comic text-2xl md:text-4xl font-bold leading-tight max-w-xs">
                        "I've worked in <span className="text-accent">Enterprise</span>, <span className="text-accent">SaaS</span>, and <span className="text-accent">AdTech</span> environments."
                    </p>
                </div>

                {/* Experience Frames */}
                {experiences.map((exp, i) => (
                    <div
                        key={i}
                        className="w-[85vw] md:w-[600px] bg-white border-4 border-black p-10 md:p-14 flex flex-col justify-between shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative group hover:-translate-y-2 transition-transform duration-300"
                    >
                        {/* Panel Number */}
                        <div className="absolute top-0 left-0 bg-black text-white px-3 py-1 font-bold text-sm">
                            Panel 0{i + 1}
                        </div>

                        <div className="mt-6">
                            <h3 className="text-5xl md:text-6xl font-bold uppercase tracking-tighter mb-2">
                                {exp.company}
                            </h3>
                            <p className="font-mono text-xs uppercase tracking-widest text-gray-500 mb-4 border-b-2 border-dashed border-gray-300 pb-2 inline-block">
                                {exp.environment}
                            </p>
                            <p className="text-xl font-bold text-accent mb-6">{exp.role}</p>
                        </div>

                        <div className="bg-[#F8F7F4] border-2 border-black p-4 relative">
                            <div className="absolute -top-3 left-4 bg-black text-white px-2 text-xs font-bold uppercase">Highlight</div>
                            <p className="font-comic text-lg leading-relaxed">
                                {exp.desc}
                            </p>
                        </div>
                    </div>
                ))}

                {/* Outro Frame */}
                <div className="w-[300px] md:w-[400px] h-[60vh] flex items-center justify-center">
                    <div className="text-center">
                        <p className="font-bold text-xl uppercase mb-4">Who's Next?</p>
                        <div className="w-24 h-24 rounded-full border-4 border-black bg-white flex items-center justify-center mx-auto text-4xl">
                            ?
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
