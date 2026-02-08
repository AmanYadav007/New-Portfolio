'use client';

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Founder: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: '+=200%',
                    pin: true,
                    scrub: 1,
                }
            });

            // 1. Initial State: "Sometimes I don't wait for permission..."
            // 2. Reveal Card
            tl.to(cardRef.current, {
                scale: 1,
                opacity: 1,
                duration: 1,
                ease: 'power2.out'
            })
                .to(textRef.current?.children[0] as Element, { // Title "BonusLyf"
                    opacity: 1,
                    y: 0,
                    duration: 0.5
                }, '-=0.5')
                .to(textRef.current?.children[1] as Element, { // Subtitle
                    opacity: 1,
                    y: 0,
                    duration: 0.5
                }, '-=0.3')
                .to('.founder-detail', { // Details
                    opacity: 1,
                    y: 0,
                    stagger: 0.2,
                    duration: 0.5
                });

            // Breathing animation separate from scroll
            gsap.to(cardRef.current, {
                boxShadow: '0 0 30px rgba(96, 165, 250, 0.1)',
                repeat: -1,
                yoyo: true,
                duration: 3,
                ease: 'sine.inOut'
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="h-screen flex items-center justify-center bg-[#0B0D10] relative overflow-hidden">
            {/* Background Pulse */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[40vw] h-[40vw] bg-blue-900/10 rounded-full blur-[100px] animate-pulse-slow"></div>
            </div>

            <div className="relative z-10 w-full max-w-5xl px-6 flex flex-col items-center text-center">
                <p className="text-xl md:text-2xl text-gray-400 mb-12 founder-intro">
                    Sometimes, I don't wait for permission. I build.
                </p>

                <div
                    ref={cardRef}
                    className="w-full max-w-3xl bg-[#12141a] border border-white/5 rounded-3xl p-10 md:p-16 opacity-50 scale-90 shadow-2xl"
                >
                    <div ref={textRef}>
                        <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4 opacity-0 translate-y-8">
                            BonusLyf
                        </h2>
                        <p className="text-xl text-gray-400 mb-12 opacity-0 translate-y-4">
                            AI-powered emotional support platform
                            <br />
                            <span className="text-sm uppercase tracking-widest text-gray-500 mt-2 block">Founder · Engineer · Designer</span>
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 text-left">
                        <div className="founder-detail opacity-0 translate-y-4">
                            <h4 className="text-blue-400 font-bold mb-2">Problem</h4>
                            <p className="text-gray-400 leading-relaxed">
                                Emotional support is inaccessible for many suitable to cost or stigma.
                            </p>
                        </div>
                        <div className="founder-detail opacity-0 translate-y-4">
                            <h4 className="text-purple-400 font-bold mb-2">Solution</h4>
                            <p className="text-gray-400 leading-relaxed">
                                A private, always-available AI companion that listens without judgment.
                            </p>
                        </div>
                    </div>

                    <div className="mt-12 pt-8 border-t border-white/5 founder-detail opacity-0 translate-y-4">
                        <p className="text-lg italic text-white/80">
                            "I owned it end to end."
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
