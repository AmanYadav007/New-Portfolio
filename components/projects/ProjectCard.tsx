'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { FaArrowRight } from 'react-icons/fa';
import type { Project } from '@/data/projects';

interface ProjectCardProps {
    project: Project;
    index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <Link href={`/projects/${project.id}`}>
                <Card hover className="h-full">
                    {project.featured && (
                        <span className="inline-block px-3 py-1 bg-accent text-white text-xs rounded-full mb-4">
                            Featured
                        </span>
                    )}

                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 4).map((tech) => (
                            <span
                                key={tech}
                                className="px-2 py-1 bg-background text-xs rounded border border-border"
                            >
                                {tech}
                            </span>
                        ))}
                        {project.technologies.length > 4 && (
                            <span className="px-2 py-1 text-xs text-muted-foreground">
                                +{project.technologies.length - 4} more
                            </span>
                        )}
                    </div>

                    <div className="flex items-center text-accent font-medium mt-auto">
                        View Details <FaArrowRight className="ml-2 w-4 h-4" />
                    </div>
                </Card>
            </Link>
        </motion.div>
    );
};
