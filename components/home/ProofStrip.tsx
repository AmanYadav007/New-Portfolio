'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaBuilding, FaRocket, FaRobot, FaBullhorn } from 'react-icons/fa';

const proofItems = [
    {
        icon: FaBuilding,
        label: 'Enterprise',
        sublabel: 'Accenture',
    },
    {
        icon: FaRocket,
        label: 'SaaS',
        sublabel: 'Spotter Labs',
    },
    {
        icon: FaRobot,
        label: 'AI Product',
        sublabel: 'BonusLyf',
    },
    {
        icon: FaBullhorn,
        label: 'AdTech',
        sublabel: 'T-Mobile / BLIS',
    },
];

export const ProofStrip: React.FC = () => {
    return (
        <section className="py-16 border-y border-border bg-muted/30">
            <div className="container">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {proofItems.map((item, index) => (
                        <motion.div
                            key={item.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex flex-col items-center text-center gap-3"
                        >
                            <item.icon className="w-8 h-8 text-accent" />
                            <div>
                                <p className="font-semibold text-foreground">{item.label}</p>
                                <p className="text-sm text-muted-foreground">{item.sublabel}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
