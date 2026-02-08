'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight, FaTimes } from 'react-icons/fa';

const projects = [
    {
        id: 'bonuslyf',
        title: 'BonusLyf',
        tag: 'Flagship AI',
        desc: 'AI-powered emotional support platform.',
        fullDesc: 'Built an AI-powered emotional support platform with a privacy-first approach. Features empathetic UX and real-time conversational AI.',
        tech: ['Next.js', 'OpenAI', 'Firebase']
    },
    {
        id: 'spotter',
        title: 'Spotter Platform',
        tag: 'SaaS Utility',
        desc: 'Fleet management & logistics dashboard.',
        fullDesc: 'Comprehensive React platform with real-time dashboards, maps, and Stripe payments. Handles thousands of vehicle tracking points.',
        tech: ['React', 'GraphQL', 'Stripe']
    },
    {
        id: 'quicktool',
        title: 'Quick Side Tool',
        tag: 'Performance',
        desc: 'Client-side PDF processor for 500+ pages.',
        fullDesc: 'Lightweight tool specialized for speed. Processes massive PDFs in the browser without server uploads.',
        tech: ['PDF.js', 'Web Workers']
    },
    {
        id: 'resizer',
        title: 'Image Resizer',
        tag: 'Utility',
        desc: 'Privacy-first bulk image optimization.',
        fullDesc: 'Simple, fast, and secure. Processes images locally with zero data transfer.',
        tech: ['Canvas API', 'HTML5']
    }
];

export const Projects: React.FC = () => {
    const [selectedId, setSelectedId] = useState<string | null>(null);

    return (
        <section className="min-h-screen bg-[#0B0D10] py-20 px-4 md:px-0">
            <div className="container">
                <h2 className="text-4xl md:text-6xl font-bold mb-4">Built & Shipped.</h2>
                <p className="text-gray-400 mb-16 text-xl">Projects that solve real problems.</p>

                <div className="grid md:grid-cols-2 gap-4 md:gap-8">
                    {projects.map((project) => (
                        <motion.div
                            layoutId={project.id}
                            key={project.id}
                            onClick={() => setSelectedId(project.id)}
                            className="group cursor-pointer bg-[#12141a] border border-white/5 p-8 md:p-12 rounded-2xl hover:bg-white/5 transition-colors relative overflow-hidden"
                        >
                            <div className="relative z-10">
                                <span className="text-xs font-mono text-blue-400 mb-2 block">{project.tag}</span>
                                <h3 className="text-3xl font-bold mb-4 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                                <p className="text-gray-400 text-lg">{project.desc}</p>
                                <div className="mt-8 flex items-center text-sm font-bold text-white/50 group-hover:text-white transition-colors">
                                    VIEW CASE STUDY <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>

                            {/* Hover Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </motion.div>
                    ))}
                </div>

                <AnimatePresence>
                    {selectedId && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedId(null)}>
                            <div className="absolute inset-0" onClick={() => setSelectedId(null)}></div>

                            {projects.map((project) => (
                                project.id === selectedId && (
                                    <motion.div
                                        layoutId={selectedId}
                                        key={project.id}
                                        className="w-full max-w-4xl bg-[#12141a] border border-white/10 rounded-3xl overflow-hidden relative shadow-2xl"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <button
                                            onClick={() => setSelectedId(null)}
                                            className="absolute top-6 right-6 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors z-20"
                                        >
                                            <FaTimes />
                                        </button>

                                        <div className="p-8 md:p-16">
                                            <span className="text-blue-400 font-mono mb-4 block">{project.tag}</span>
                                            <h2 className="text-4xl md:text-5xl font-bold mb-8">{project.title}</h2>

                                            <div className="grid md:grid-cols-3 gap-8 mb-12">
                                                <div className="md:col-span-2">
                                                    <h4 className="text-xl font-bold mb-4">The Solution</h4>
                                                    <p className="text-gray-300 text-lg leading-relaxed">{project.fullDesc}</p>
                                                </div>
                                                <div>
                                                    <h4 className="text-xl font-bold mb-4">Tech Stack</h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {project.tech.map(t => (
                                                            <span key={t} className="px-3 py-1 bg-white/5 rounded-full text-sm border border-white/5">{t}</span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex gap-4">
                                                <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-colors">
                                                    View Live
                                                </button>
                                                <button className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl transition-colors">
                                                    Source Code
                                                </button>
                                            </div>
                                        </div>
                                    </motion.div>
                                )
                            ))}
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};
