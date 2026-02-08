'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const projects = [
    {
        id: 'bonuslyf',
        title: 'BonusLyf',
        issue: '#01',
        tag: 'Flagship AI',
        desc: 'AI-powered emotional support platform.',
        fullDesc: 'An AI-powered emotional support platform designed to provide a private, always-available companion.',
        role: 'Founder, Product Designer, Full-Stack Engineer',
        significance: 'Shows founder mindset, empathy-driven product thinking, and AI integration beyond demos.',
        reason: 'Self-initiated, self-funded, built end-to-end to solve a real human problem.',
        tech: ['React', 'Node.js', 'Firebase', 'OpenAI API'],
        color: '#663399',
        link: 'https://bonuslyf.com/',
        github: 'https://github.com/AmanYadav007/BonusLYF'
    },
    {
        id: 'quicktool',
        title: 'Quick Side Tool',
        issue: '#02',
        tag: 'Utility',
        desc: 'Browser-based tool for handling large PDFs & images.',
        fullDesc: 'A browser-based tool for handling large PDFs and images quickly, specialized for speed and privacy.',
        role: 'Sole Builder',
        significance: 'Pure problem-solving for real users with practical utility.',
        reason: 'Built to solve a personal pain point; shipped and used by others.',
        tech: ['React', 'Web Workers', 'Performance Opt'],
        color: '#006400',
        link: 'https://quicksidetool.online/',
        github: 'https://github.com/AmanYadav007/QuickSideTool'
    },
    {
        id: 'resizer',
        title: 'Image Resizer',
        issue: '#03',
        tag: 'Performance',
        desc: 'Lightweight bulk image optimization tool.',
        fullDesc: 'A simple, privacy-first image resizing tool used by 300+ users. Processes images locally.',
        role: 'Sole Developer',
        significance: 'Demonstrates shipping mentality and focus on simplicity.',
        reason: 'Built independently with no company dependency; achieved real adoption.',
        tech: ['JavaScript', 'HTML5 Canvas', 'UX Simplicity'],
        color: '#8B0000',
        link: 'https://chromewebstore.google.com/detail/image-resizer-resize-opti/bmooadknflpjeaagpaaclbcgdpgglagn',
        github: 'https://github.com/AmanYadav007/image-resizer-v1'
    },
    {
        id: 'ai-experiments',
        title: 'AI Prototypes',
        issue: '#04',
        tag: 'R&D',
        desc: 'Prototypes around conversation & empathy.',
        fullDesc: 'Small AI-driven experiments exploring conversational UX, empathy, and new interaction models.',
        role: 'Experimenter & Builder',
        significance: 'Shows curiosity and exploration beyond current trends.',
        reason: 'Not production-bound; driven by pure exploration and learning.',
        tech: ['OpenAI APIs', 'Prompt Design', 'Conversational UX'],
        color: '#111'
    },
    {
        id: 'creative-exp',
        title: 'Creative Layouts',
        issue: '#05',
        tag: 'Design',
        desc: 'UI experiments with GSAP & motion.',
        fullDesc: 'Experimental UI layouts using GSAP, comic-style designs, and motion-driven storytelling.',
        role: 'Designer + Developer',
        significance: 'Shows design sensibility and willingness to explore non-standard UI.',
        reason: 'Self-initiated creative exploration.',
        tech: ['GSAP', 'CSS Animations', 'Layout Experimentation'],
        color: '#FFD700'
    },
    {
        id: 'photography',
        title: 'Visual Stories',
        issue: '#06',
        tag: 'Creative',
        desc: 'Photography and visual exploration.',
        fullDesc: 'Photography and visual exploration that influences UI/UX taste, composition, and storytelling.',
        role: 'Photographer',
        significance: 'Directly feeds into product design and helps think visually.',
        reason: 'Visual storytelling outside code.',
        tech: ['Composition', 'Storytelling', 'Visual Arts'],
        color: '#333',
        link: 'https://www.instagram.com/i_m.aman.yadav/'
    }
];

export const SideQuests: React.FC = () => {
    const [selectedId, setSelectedId] = useState<string | null>(null);

    return (
        <section className="py-24 bg-white border-b-4 border-black relative">
            {/* Dot Pattern Overlay */}
            <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
                    backgroundSize: '16px 16px'
                }}
            ></div>

            <div className="container relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b-4 border-black pb-4">
                    <div>
                        <span className="font-comic font-bold text-sm bg-black text-white px-2 py-1 uppercase tracking-widest">
                            Select Mission
                        </span>
                        <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter mt-2">
                            Side Quests
                        </h2>
                    </div>
                    <div className="font-mono text-xs uppercase tracking-widest text-gray-500 mt-4 md:mt-0">
                        Volume 1 : 2021 - 2025
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <motion.div
                            layoutId={project.id}
                            key={project.id}
                            onClick={() => setSelectedId(project.id)}
                            className="group cursor-pointer bg-[#F8F7F4] border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-all duration-200 relative overflow-hidden"
                        >
                            {/* Comic Corner Fold */}
                            <div className="absolute top-0 right-0 w-8 h-8 bg-black clip-path-polygon-[100%_0,0_0,100%_100%]"></div>

                            <div className="flex justify-between items-start mb-12">
                                <span className="font-bold font-mono text-xs border border-black px-1">
                                    {project.issue}
                                </span>
                                <div className="w-4 h-4 rounded-full bg-black"></div>
                            </div>

                            <div className="relative z-10">
                                <h3 className="text-3xl font-bold uppercase leading-none mb-2 group-hover:text-accent transition-colors">
                                    {project.title}
                                </h3>
                                <span className="text-xs font-bold bg-gray-200 px-2 py-1 uppercase tracking-wider">
                                    {project.tag}
                                </span>
                                <p className="font-comic text-sm mt-4 text-gray-600 border-t-2 border-dashed border-gray-300 pt-4">
                                    {project.desc}
                                </p>
                            </div>

                            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity font-bold text-xs uppercase bg-black text-white px-2 py-1">
                                Open Issue
                            </div>
                        </motion.div>
                    ))}
                </div>

                <AnimatePresence>
                    {selectedId && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10" style={{ zIndex: 100 }}>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                                onClick={() => setSelectedId(null)}
                            ></motion.div>

                            {projects.map((project) => (
                                project.id === selectedId && (
                                    <motion.div
                                        layoutId={selectedId}
                                        key={project.id}
                                        className="w-full max-w-4xl bg-[#F8F7F4] border-4 border-black shadow-[16px_16px_0px_0px_#FFFFFF] relative z-10 max-h-[90vh] overflow-y-auto custom-scrollbar"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        {/* Modal Header (Comic Cover Style) */}
                                        <div className="bg-black text-white p-6 md:p-8 flex justify-between items-start sticky top-0 z-20 border-b-4 border-white">
                                            <div>
                                                <span className="font-mono text-xs uppercase tracking-widest text-gray-400">Issue {project.issue}</span>
                                                <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mt-2">{project.title}</h2>
                                            </div>
                                            <button
                                                onClick={() => setSelectedId(null)}
                                                className="bg-white text-black p-2 hover:bg-accent hover:text-white transition-colors border-2 border-transparent"
                                            >
                                                <FaTimes size={24} />
                                            </button>
                                        </div>

                                        <div className="p-8 md:p-12">
                                            <div className="grid md:grid-cols-3 gap-12">
                                                <div className="md:col-span-2">
                                                    <h4 className="text-xl font-bold uppercase mb-4 bg-accent text-white px-3 py-1 inline-block -rotate-1">
                                                        Briefing
                                                    </h4>
                                                    <p className="font-comic text-xl leading-relaxed border-l-4 border-black pl-6">
                                                        {project.fullDesc}
                                                    </p>

                                                    <div className="mt-12 flex gap-6">
                                                        {/* @ts-ignore */}
                                                        {project.link && (
                                                            <a
                                                                href={project.link}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="flex items-center gap-2 bg-black text-white px-6 py-3 font-bold uppercase hover:translate-x-1 hover:translate-y-1 hover:shadow-none shadow-[4px_4px_0px_0px_#663399] transition-all border-2 border-transparent"
                                                            >
                                                                <FaExternalLinkAlt /> Live Demo
                                                            </a>
                                                        )}
                                                        {/* @ts-ignore */}
                                                        {project.github && (
                                                            <a
                                                                href={project.github}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="flex items-center gap-2 bg-white text-black border-2 border-black px-6 py-3 font-bold uppercase hover:bg-gray-100 transition-colors"
                                                            >
                                                                <FaGithub /> Source Code
                                                            </a>
                                                        )}
                                                    </div>
                                                </div>

                                                <div className="bg-white border-2 border-black p-6 shadow-[8px_8px_0px_0px_#ccc]">
                                                    <h4 className="text-sm font-bold uppercase tracking-widest mb-4 border-b-2 border-black pb-2">Mission Intel</h4>

                                                    <div className="mb-6">
                                                        <span className="block text-xs font-mono uppercase text-gray-400 mb-1">Role</span>
                                                        <p className="font-bold">{project.role}</p>
                                                    </div>

                                                    <div className="mb-6">
                                                        <span className="block text-xs font-mono uppercase text-gray-400 mb-1">Why It Matters</span>
                                                        <p className="font-comic text-sm leading-snug">{project.significance}</p>
                                                    </div>

                                                    <div className="mb-6">
                                                        <span className="block text-xs font-mono uppercase text-gray-400 mb-1">Quest Type</span>
                                                        <p className="font-comic text-sm leading-snug">{project.reason}</p>
                                                    </div>

                                                    <h4 className="text-sm font-bold uppercase tracking-widest mb-3 border-b-2 border-dashed border-gray-300 pb-1">Tech Stack</h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {project.tech.map(t => (
                                                            <span key={t} className="px-2 py-1 bg-gray-100 border border-black text-xs font-bold hover:bg-black hover:text-white transition-colors cursor-default">
                                                                {t}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
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
