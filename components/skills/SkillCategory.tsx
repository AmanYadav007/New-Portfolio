'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';

interface SkillCategoryProps {
    title: string;
    skills: string[];
    index: number;
}

export const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <Card>
                <h3 className="text-xl font-bold mb-4">{title}</h3>
                <ul className="space-y-2">
                    {skills.map((skill) => (
                        <li key={skill} className="flex items-start">
                            <span className="text-accent mr-3 mt-1">•</span>
                            <span className="text-muted-foreground">{skill}</span>
                        </li>
                    ))}
                </ul>
            </Card>
        </motion.div>
    );
};
