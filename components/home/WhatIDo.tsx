'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { FaSearch, FaPencilRuler, FaRocket } from 'react-icons/fa';

const steps = [
    {
        icon: FaSearch,
        title: 'Understand the problem',
        description: 'I break down unclear requirements and business needs into solvable technical pieces.',
    },
    {
        icon: FaPencilRuler,
        title: 'Design the solution',
        description: 'I design clean, scalable architectures with performance, UX, and maintainability in mind.',
    },
    {
        icon: FaRocket,
        title: 'Build & ship',
        description: 'I build reliable products that people actually use — and iterate based on feedback.',
    },
];

export const WhatIDo: React.FC = () => {
    return (
        <section className="py-24">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="mb-4">What I Do</h2>
                    <p className="text-lg max-w-2xl mx-auto">
                        My approach to solving problems and building products
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card hover>
                                <step.icon className="w-10 h-10 text-accent mb-4" />
                                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                                <p className="text-muted-foreground">{step.description}</p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
