import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

export const Contact: React.FC = () => {
    return (
        <section className="py-32 bg-[#0B0D10] text-center border-t border-white/5">
            <div className="container">
                <h2 className="text-4xl md:text-6xl font-bold mb-8">Let's build something meaningful.</h2>

                <div className="flex justify-center gap-10 mt-12">
                    <a href="mailto:your.email@example.com" className="flex flex-col items-center gap-3 text-gray-400 hover:text-white transition-colors group">
                        <div className="p-4 rounded-full bg-white/5 group-hover:bg-blue-600/20 transition-colors">
                            <FaEnvelope className="w-6 h-6" />
                        </div>
                        <span className="text-sm font-mono uppercase tracking-widest">Email</span>
                    </a>

                    <a href="https://linkedin.com" className="flex flex-col items-center gap-3 text-gray-400 hover:text-white transition-colors group">
                        <div className="p-4 rounded-full bg-white/5 group-hover:bg-blue-600/20 transition-colors">
                            <FaLinkedin className="w-6 h-6" />
                        </div>
                        <span className="text-sm font-mono uppercase tracking-widest">LinkedIn</span>
                    </a>

                    <a href="https://github.com" className="flex flex-col items-center gap-3 text-gray-400 hover:text-white transition-colors group">
                        <div className="p-4 rounded-full bg-white/5 group-hover:bg-blue-600/20 transition-colors">
                            <FaGithub className="w-6 h-6" />
                        </div>
                        <span className="text-sm font-mono uppercase tracking-widest">GitHub</span>
                    </a>
                </div>

                <footer className="mt-32 text-gray-600 text-sm">
                    © {new Date().getFullYear()} Aman Yadav. Designed & Built with Next.js, Tailwind, & GSAP.
                </footer>
            </div>
        </section>
    );
};
