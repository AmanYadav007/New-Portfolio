'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';

interface ExperienceCardProps {
    company: string;
    role?: string;
    problem: string;
    solution: string;
    technologies?: string[];
    index: number;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
    company,
    role,
    problem,
    solution,
    technologies,
    index,
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <Card className="mb-8">
                <div className="mb-4">
                    <h3 className="text-2xl font-bold mb-1">{company}</h3>
                    {role && <p className="text-muted-foreground">{role}</p>}
                </div>

                <div className="space-y-4">
                    <div>
                        <h4 className="font-semibold text-accent mb-2">Problem:</h4>
                        <p className="text-muted-foreground">{problem}</p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-accent mb-2">Solution:</h4>
                        <p className="text-muted-foreground">{solution}</p>
                    </div>

                    {technologies && technologies.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-4">
                            {technologies.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1 bg-background text-sm rounded-full border border-border"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </Card>
        </motion.div>
    );
};
