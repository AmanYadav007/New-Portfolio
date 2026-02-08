'use client';

import React from 'react';
import { gsap } from 'gsap';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

export const FinalPanel: React.FC = () => {
    const [hasClickedQuestion, setHasClickedQuestion] = React.useState(false);
    const backgroundRef = React.useRef<HTMLDivElement>(null);
    const questionRef = React.useRef<HTMLSpanElement>(null);

    React.useEffect(() => {
        // Slow background drift
        if (backgroundRef.current) {
            gsap.to(backgroundRef.current, {
                backgroundPosition: '100% 100%',
                duration: 20,
                repeat: -1,
                ease: 'linear'
            });
        }

        // Gentle pulse for the question mark
        if (questionRef.current) {
            gsap.to(questionRef.current, {
                scale: 1.1,
                duration: 1.5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
        }
    }, []);

    const handleQuestionClick = () => {
        setHasClickedQuestion(true);
    };

    return (
        <footer className="bg-black text-white py-20 relative border-t-8 border-white flex flex-col items-center min-h-[70vh] z-50 overflow-hidden">
            {/* Comic Background Textures */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none"
                ref={backgroundRef}
                style={{
                    backgroundImage: 'radial-gradient(#888 1px, transparent 1px)',
                    backgroundSize: '24px 24px'
                }}>
            </div>
            <div className="absolute inset-0 z-0 opacity-5 pointer-events-none"
                style={{
                    backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #444 10px, #444 11px)'
                }}>
            </div>

            <div className="container relative z-10 flex flex-col items-center w-full flex-grow pt-12 md:pt-16">

                {/* Content Wrapper */}
                <div className="flex-grow flex flex-col justify-center items-center w-full">
                    <div className="mb-12 text-center relative z-20">
                        <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-2 text-transparent relative inline-block"
                            style={{ WebkitTextStroke: '2px white' }}>
                            The End
                            <span
                                ref={questionRef}
                                onClick={handleQuestionClick}
                                className="text-accent ml-1 text-7xl md:text-9xl align-middle cursor-pointer inline-block hover:brightness-125 focus:outline-none focus:ring-2 focus:ring-accent rounded-full px-2"
                                style={{ WebkitTextStroke: '0px' }}
                                role="button"
                                tabIndex={0}
                                aria-label="Easter egg"
                            >
                                {hasClickedQuestion ? '!' : '?'}
                            </span>
                        </h2>
                        <p className="font-comic text-xl md:text-2xl text-white mt-1 rotate-1 opacity-90">
                            {hasClickedQuestion ? "Let's build something cool." : "Or the beginning of something worth building."}
                        </p>
                    </div>

                    {/* Contact Action Box */}
                    <div className="relative group perspective-1000 max-w-3xl w-full mx-auto px-4 z-20 mt-8 md:mt-12">
                        {/* Hard Shadow Block with Halftone Pattern */}
                        <div className="absolute inset-0 bg-accent translate-x-2 translate-y-2 md:translate-x-4 md:translate-y-4 border-4 border-black z-0"
                            style={{
                                backgroundImage: 'radial-gradient(rgba(0,0,0,0.2) 2px, transparent 2px)',
                                backgroundSize: '6px 6px'
                            }}>
                        </div>

                        <div className="bg-black text-white p-8 md:p-12 border-4 border-white relative z-10 transform -rotate-1 hover:rotate-0 transition-transform duration-300 ease-out">
                            {/* Speech Bubble Tail (Top) */}
                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[20px] border-l-transparent border-b-[24px] border-b-white border-r-[20px] border-r-transparent z-20"></div>
                            <div className="absolute -top-[18px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[16px] border-l-transparent border-b-[20px] border-b-black border-r-[16px] border-r-transparent z-30"></div>

                            <h3 className="text-3xl font-black uppercase mb-2 text-center italic tracking-wider">Start A Conversation</h3>

                            {/* Intent Line */}
                            <p className="text-center text-gray-400 text-sm md:text-base mb-8 font-mono">
                                Open to full-time roles, contracts, and interesting problems.
                            </p>

                            <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 w-full flex-wrap">
                                <a href="https://www.linkedin.com/in/aman-yadav-9144021a3/" target="_blank" rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-3 font-bold hover:text-accent transition-colors group/link text-lg w-full md:w-auto p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg">
                                    <div className="p-3 bg-white text-[#0077B5] border-2 border-black rounded-full group-hover/link:scale-110 group-hover/link:-translate-y-1 transition-all duration-200 shadow-[2px_2px_0px_0px_#000]">
                                        <FaLinkedin className="text-xl" />
                                    </div>
                                    <span className="uppercase group-hover/link:underline decoration-wavy decoration-accent underline-offset-4">LinkedIn</span>
                                </a>
                                <a href="https://github.com/AmanYadav007" target="_blank" rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-3 font-bold hover:text-accent transition-colors group/link text-lg w-full md:w-auto p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg">
                                    <div className="p-3 bg-white text-[#333] border-2 border-black rounded-full group-hover/link:scale-110 group-hover/link:-translate-y-1 transition-all duration-200 shadow-[2px_2px_0px_0px_#000]">
                                        <FaGithub className="text-xl" />
                                    </div>
                                    <span className="uppercase group-hover/link:underline decoration-wavy decoration-accent underline-offset-4">GitHub</span>
                                </a>
                                <a href="https://x.com/Amanyad57536099" target="_blank" rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-3 font-bold hover:text-accent transition-colors group/link text-lg w-full md:w-auto p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg">
                                    <div className="p-3 bg-white text-black border-2 border-black rounded-full group-hover/link:scale-110 group-hover/link:-translate-y-1 transition-all duration-200 shadow-[2px_2px_0px_0px_#000]">
                                        <FaTwitter className="text-xl" />
                                    </div>
                                    <span className="uppercase group-hover/link:underline decoration-wavy decoration-accent underline-offset-4">X / Twitter</span>
                                </a>
                                <a href="https://www.instagram.com/i_m.aman.yadav/" target="_blank" rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-3 font-bold hover:text-accent transition-colors group/link text-lg w-full md:w-auto p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg">
                                    <div className="p-3 bg-white text-[#E1306C] border-2 border-black rounded-full group-hover/link:scale-110 group-hover/link:-translate-y-1 transition-all duration-200 shadow-[2px_2px_0px_0px_#000]">
                                        <FaInstagram className="text-xl" />
                                    </div>
                                    <span className="uppercase group-hover/link:underline decoration-wavy decoration-accent underline-offset-4">Instagram</span>
                                </a>
                            </div>

                            {/* Micro-moment */}
                            <div className="mt-8 text-center opacity-40 text-xs font-mono">
                                Thanks for scrolling.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center font-mono text-sm uppercase tracking-widest relative z-10 mt-16 text-gray-500">
                    © {new Date().getFullYear()} <span className="font-comic text-lg text-white mx-1 capitalize">Aman Yadav</span> · Issue #01 · Built with React & GSAP
                </div>
            </div>

            {/* Placeholder for 'N' logo */}
            <div className="fixed bottom-6 left-6 z-50 text-white mix-blend-difference pointer-events-none">
                {/* Logo Here */}
            </div>
        </footer>
    );
};
