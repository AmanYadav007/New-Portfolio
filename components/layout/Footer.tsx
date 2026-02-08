import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-border py-12">
            <div className="container">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Social Links */}
                    <div className="flex items-center gap-6">
                        <a
                            href="mailto:your.email@example.com"
                            className="text-muted-foreground hover:text-accent transition-colors"
                            aria-label="Email"
                        >
                            <FaEnvelope className="w-5 h-5" />
                        </a>
                        <a
                            href="https://linkedin.com/in/yourprofile"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-accent transition-colors"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin className="w-5 h-5" />
                        </a>
                        <a
                            href="https://github.com/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-accent transition-colors"
                            aria-label="GitHub"
                        >
                            <FaGithub className="w-5 h-5" />
                        </a>
                    </div>

                    {/* Copyright */}
                    <p className="text-sm text-muted-foreground">
                        © {currentYear} Aman Yadav. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};
