'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

export const Hero: React.FC = () => {
    return (
        <section className="min-h-[90vh] flex items-center justify-center py-20">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h1 className="mb-6">
                        I solve real problems with code.
                    </h1>

                    <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
                        Software engineer with 4+ years of experience building scalable web products —
                        from enterprise workflows at Accenture to SaaS platforms and AI-powered tools.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button href="/projects" variant="primary">
                            View Projects
                        </Button>
                        <Button href="/resume" variant="outline">
                            Download Resume
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
